import { Logger } from '@bracketed/logger';
import { Stopwatch } from '@sapphire/stopwatch';
import axios from 'axios';
import { CorsOptions } from 'cors';
import express, { Express, NextFunction, Request, Response } from 'express';
import { EventEmitter } from 'node:events';
import fs from 'node:fs';
import path from 'node:path';

import { Registry } from './registry/Registry.js';

import { MiddlewareHandler } from './registry/types/Middlewares/MiddlewareHandlerType.js';
import { JovaCustomOption } from './types/config/jovaCustomOptions.js';
import { JovaPathSettings } from './types/config/jovaPathOptions.js';
import { JovaServerOptions } from './types/config/jovaServerOptionsObject.js';
import { JovaSettings } from './types/config/jovaSettingsObject.js';
import { RatelimitConfig } from './types/config/rateLimitOptionsObject.js';
import { ApplicationEvent } from './types/JovaEvents.js';

import { ApplicationListener } from './registry/types/Events/AppEventType.js';
import { ApplicationMiddleware } from './registry/types/Middlewares/AppMiddlewareType.js';
import { ApplicationRoute } from './registry/types/Routes/AppRouteType.js';

import { loadApplicationCorsConfiguration } from './resources/CorsConfig.js';
import { loadApplicationCustomConfiguration } from './resources/CustomOptionsConfig.js';
import { loadApplicationEventsMiddlewareConfiguration } from './resources/EventsConfig.js';
import { loadApplicationMiddlewaresConfiguration } from './resources/MiddlewaresConfig.js';
import { loadApplicationRatelimitConfiguration } from './resources/RatelimitConfig.js';
import { loadApplicationSettingsConfiguration } from './resources/SettingsConfig.js';

export * from './types/config/jovaCustomOptions.js';
export * from './types/config/jovaCustomSettingEnum.js';
export * from './types/config/jovaHeaderAdditionObject.js';
export * from './types/config/jovaPathOptions.js';
export * from './types/config/jovaServerOptionsObject.js';
export * from './types/config/jovaSettingsObject.js';
export * from './types/config/rateLimitDatabaseOptionsObject.js';
export * from './types/config/rateLimitOptionsObject.js';

export * from './types/http/HTTPRequestMethods.js';
export * from './types/http/HTTPResponseCodes.js';

export * from './registry/types/Routes/AppRouteType.js';
export * from './registry/types/Routes/RouteHandlerType.js';

export * from './registry/types/Middlewares/AppMiddlewareType.js';
export * from './registry/types/Middlewares/MiddlewareHandlerType.js';

export * from './registry/types/Events/AppEventType.js';
export * from './registry/types/Events/EventHandlerType.js';

function recursiveSearchInDir(targetDirName: string, currentDir: string): string | null {
	const files = fs.readdirSync(currentDir);

	for (const file of files) {
		const fullPath = path.join(currentDir, file);
		const stat = fs.statSync(fullPath);

		// If a directory matches the target directory name, return it
		if (stat.isDirectory() && file === targetDirName) {
			return fullPath;
		}

		// If it's a directory, recursively search inside
		if (stat.isDirectory()) {
			const result = recursiveSearchInDir(targetDirName, fullPath);
			if (result) return result; // If found in subdirectory, return the result
		}
	}

	return null;
}

function findDirUpward(targetDirName: string, startDir: string): string | null {
	let currentDir = path.resolve(startDir);

	// Keep walking up until the root directory is reached
	while (currentDir !== path.parse(currentDir).root) {
		const result: string | null = recursiveSearchInDir(targetDirName, currentDir);
		if (result) {
			return result; // Return the directory if found
		}
		currentDir = path.dirname(currentDir); // Move up to the parent directory
	}

	return null; // Return null if directory not found
}

function findHandlers(dir: string, startDir = process.cwd(), fileList: string[] = [], visitedDirs = new Set()) {
	const foundDir = findDirUpward(dir, startDir);

	if (!foundDir) {
		console.error(`Directory '${dir}' not found from '${startDir}' or any parent directories.`);
		return fileList; // Return empty list if directory doesn't exist
	}

	// Resolve the absolute path of the found directory
	const absoluteDir = path.resolve(foundDir);

	// Check if the directory has been visited to avoid processing it twice
	if (visitedDirs.has(absoluteDir)) return fileList;

	// Mark this directory as visited
	visitedDirs.add(absoluteDir);

	// Read the contents of the directory
	const files = fs.readdirSync(absoluteDir);

	// Loop through each item in the directory
	files.forEach((file) => {
		const fullPath = path.join(absoluteDir, file);
		const stat = fs.statSync(fullPath);

		if (stat.isDirectory()) findHandlers(file, fullPath, fileList, visitedDirs);
		else {
			if (file.endsWith('.js')) fileList.push(fullPath);
		}
	});

	return fileList;
}

/**
 * The Jova Server Class.
 *
 * @class JovaServer
 * @typedef {JovaServer}
 * @extends {EventEmitter}
 */
class JovaServer extends EventEmitter {
	/**
	 * The port number defined by the Server Options or in the `listen` function.
	 *
	 * @public
	 * @readonly
	 * @example 3000
	 * @default 3000
	 * @type {(string | number)}
	 */
	public readonly port: string | number;
	private readonly basePath: string;
	private readonly paths: JovaPathSettings;

	private readonly middlewares: Array<MiddlewareHandler> | undefined;
	private readonly ratelimitConf: RatelimitConfig | undefined;
	private readonly settings: JovaSettings | undefined;
	private readonly customOptions: Array<JovaCustomOption> | undefined;
	private readonly corsOptions: CorsOptions | undefined;

	/**
	 * The application registry, contains all the routes, middlewares and event handlers.
	 *
	 * @public
	 * @readonly
	 * @type {Registry}
	 */
	public readonly registry: Registry;
	private readonly application: Express = express();
	private readonly logger: Logger = new Logger();
	private readonly emitter: EventEmitter;

	/**
	 * Creates an instance of JovaServer.
	 *
	 * @constructor
	 * @param {JovaServerOptions} [options={}]
	 * @default {}
	 */
	constructor(options: JovaServerOptions = {}) {
		super();

		this.basePath = options.basePath || '';
		this.port = options.port || 3000;
		this.middlewares = options.middlewares || undefined;
		this.ratelimitConf = options.ratelimiting || undefined;
		this.settings = options.settings || undefined;
		this.customOptions = options.customOptions || undefined;
		this.corsOptions = options.cors || undefined;
		this.paths = {
			events: options.paths?.events || 'events',
			middlewares: options.paths?.middlewares || 'middlewares',
			routes: options.paths?.events || 'routes',
		};

		this.emitter = new EventEmitter();
		this.registry = new Registry({
			basePath: this.basePath,
		});

		this.setupGlobalErrorHandlers();
	}

	private release(Event: ApplicationEvent, ...args: any[]) {
		this.emitter.emit(Event, ...args);
		this.registry.getEvents().forEach((eventListener) => {
			if (eventListener.event === Event) eventListener.handler(...args);
			else if (eventListener.event === ApplicationEvent.ALL) eventListener.handler(Event, ...args);
		});
	}

	private setupGlobalErrorHandlers() {
		process.on('uncaughtException', (error: Error) => {
			this.logger.fatal('ApplicationError: Uncaught Exception:', error);
			this.release(ApplicationEvent.ERROR, error);
		});

		process.on('unhandledRejection', (reason: unknown) => {
			this.logger.fatal('ApplicationError: Unhandled Rejection:', reason);
			this.release(ApplicationEvent.ERROR, reason);
		});
	}

	/**
	 * Check for a free port to host your Jova server, optionally fund an available one.
	 *
	 * @public
	 * @async
	 * @param {(number | string)} port
	 * @param {?boolean} [recursive]
	 * @returns {Promise<number>}
	 */
	public async checkFreePort(port: number | string, recursive?: boolean): Promise<number> {
		if (typeof port === 'string') port = Number(port);
		if (port >= 65354)
			throw new Error('Cannot set application port while Jova.js Server is running.', {
				cause: 'AUTO_PORT_MAXED',
			});
		const InUse = await axios
			.get(`localhost:${port}`)
			.then(() => true)
			.catch(() => false);

		if (InUse) {
			if (recursive === true) {
				this.logger.info(
					`JovaListener: Port ${port} is in use, attempting to open server with port ${port + 1}.`
				);
				return await this.checkFreePort(port + 1);
			} else {
				throw new Error('Specified port is already in use.', { cause: 'PORT_IN_USE' });
			}
		}

		return port;
	}

	private async loadJovaResources(): Promise<void> {
		loadApplicationRatelimitConfiguration(this.application, this.ratelimitConf);
		loadApplicationMiddlewaresConfiguration(this.application, this.middlewares);
		loadApplicationEventsMiddlewareConfiguration(this.application, this.registry, this.emitter);
		loadApplicationSettingsConfiguration(this.application, this.settings);
		loadApplicationCorsConfiguration(this.application, this.corsOptions);
		loadApplicationCustomConfiguration(this.application, this.customOptions);
	}

	/**
	 * Alias for `all`.
	 *
	 * This method is like the standard methods, except it matches all HTTP verbs.
	 *
	 * Source: http://expressjs.com/en/5x/api.html#app.all
	 *
	 * @public
	 * @readonly
	 * @param path string
	 * @param callback any
	 * @alias all
	 */
	public readonly any = this.application.all;
	/**
	 * This method is like the standard methods, except it matches all HTTP verbs.
	 *
	 * Source: http://expressjs.com/en/5x/api.html#app.all
	 *
	 * @public
	 * @param path string
	 * @param callback any
	 * @readonly
	 */
	public readonly all = this.application.all;

	/**
	 * Routes HTTP GET requests to the specified path with the specified callback functions.
	 *
	 * Source: http://expressjs.com/en/5x/api.html#app.get
	 *
	 * @public
	 * @param path string
	 * @param callback any
	 * @readonly
	 */
	public readonly get = this.application.get;
	/**
	 * Routes HTTP DELETE requests to the specified path with the specified callback functions.
	 *
	 * Source: http://expressjs.com/en/5x/api.html#app.delete
	 *
	 * @public
	 * @param path string
	 * @param callback any
	 * @readonly
	 */
	public readonly delete = this.application.delete;
	/**
	 * Add callback triggers to route parameters.
	 *
	 * Source: http://expressjs.com/en/5x/api.html#app.param
	 *
	 * @public
	 * @readonly
	 */
	public readonly param = this.application.param;
	/**
	 * Routes HTTP POST requests to the specified path with the specified callback functions.
	 *
	 * Source: http://expressjs.com/en/5x/api.html#app.post
	 *
	 * @public
	 * @param path string
	 * @param callback any
	 * @readonly
	 */
	public readonly post = this.application.post;
	/**
	 * Routes HTTP PUT requests to the specified path with the specified callback functions.
	 *
	 * Source: http://expressjs.com/en/5x/api.html#app.put
	 *
	 * @public
	 * @param path string
	 * @param callback any
	 * @readonly
	 */
	public readonly put = this.application.put;
	/**
	 * Returns the rendered HTML of a view via the `callback` function.
	 * It accepts an optional parameter that is an object containing local variables for the view.
	 * It is like response.render(), except it cannot send the rendered view to the client on its own.
	 *
	 * Source: http://expressjs.com/en/5x/api.html#app.render
	 *
	 * @public
	 * @readonly
	 */
	public readonly render = this.application.render;
	/**
	 * Returns an instance of a single route, which you can then use to handle HTTP verbs with optional middleware.
	 * Use `route` to avoid duplicate route names (and thus typo errors).
	 *
	 * Source: http://expressjs.com/en/5x/api.html#app.route
	 *
	 * @public
	 * @readonly
	 */
	public readonly route = this.application.route;

	private async loadApplicationRoutes(): Promise<void> {
		const routes = findHandlers(this.paths.routes as string);

		this.logger.info('ApplicationRouteRegistry: Registering Routes...');
		const RouteRegisterStopwatch = new Stopwatch();

		for await (const [_index, value] of routes.entries()) {
			const RouteTimer = new Stopwatch();
			const Route = (await import(`file://${value}`)).Route as {
				new (): { registerApplicationRoutes: (registry: Registry) => ApplicationRoute };
			};

			const RegisteredRoute = new Route().registerApplicationRoutes(this.registry);

			this.logger.info(
				`ApplicationRouteRegistry: Registered Route: "${RegisteredRoute.getApplicationRoute().route}" (${RegisteredRoute.getApplicationRoute().method.toUpperCase()}) in ${RouteTimer.stop().toString()}`
			);
		}

		this.registry.getRoutes().forEach((Route) => {
			const RouteSpecificMiddlewares = this.registry
				.getMiddlewares()
				.filter((m) => m.runsOnAllRoutes === false && Route.middlewares.find((r) => r === m.handler))
				.map((m) => m.handler);

			RouteSpecificMiddlewares.forEach((r) => Route.middlewares.push(r));

			this.application[Route.method](Route.route, ...Route.middlewares, Route.handler);
		});

		this.logger.info(
			`ApplicationRouteRegistry: Registered ${routes.length} Route(s) in ${RouteRegisterStopwatch.stop().toString()}`
		);
	}

	private async loadApplicationEvents(): Promise<void> {
		const events = findHandlers(this.paths.events as string);

		this.logger.info('ApplicationEventRegistry: Registering Events...');
		const EventRegisterStopwatch = new Stopwatch();

		for await (const [_index, value] of events.entries()) {
			const EventTimer = new Stopwatch();
			const Event = (await import(`file://${value}`)).Event as {
				new (): { registerApplicationEvent: (registry: Registry) => ApplicationListener };
			};

			const RegisteredEvent = new Event().registerApplicationEvent(this.registry);

			this.logger.info(
				`ApplicationEventRegistry: Registered Event: "${RegisteredEvent.getApplicationEvent().event}" in ${EventTimer.stop().toString()}`
			);
		}

		this.logger.info(
			`ApplicationEventRegistry: Registered ${events.length} Event(s) in ${EventRegisterStopwatch.stop().toString()}`
		);
	}

	private async loadApplicationMiddlewares(): Promise<void> {
		const middlewares = findHandlers(this.paths.middlewares as string);

		this.logger.info('ApplicationMiddlewareRegistry: Registering Middlewares...');
		const MiddlewareRegisterStopwatch = new Stopwatch();

		for await (const [_index, value] of middlewares.entries()) {
			const MiddlewareTimer = new Stopwatch();
			const Middleware = (await import(`file://${value}`)).Middleware as {
				new (): { registerApplicationMiddleware: (registry: Registry) => ApplicationMiddleware };
			};

			const RegisteredMiddleware = new Middleware().registerApplicationMiddleware(this.registry);

			this.logger.info(
				`ApplicationMiddlewareRegistry: Registered Middleware: "${RegisteredMiddleware.getApplicationMiddleware().middleware}" in ${MiddlewareTimer.stop().toString()} - Runs on all Routes: ${RegisteredMiddleware.getApplicationMiddleware().runsOnAllRoutes}`
			);
		}

		this.registry.getMiddlewares().forEach((Middleware) => {
			if (Middleware.runsOnAllRoutes) this.application.use(Middleware.handler);
		});

		this.logger.info(
			`ApplicationMiddlewareRegistry: Registered ${middlewares.length} Middleware(s) in ${MiddlewareRegisterStopwatch.stop().toString()}`
		);
	}

	/**
	 * Start the Jova Server, begin listening to a port & its incoming requests.
	 *
	 * @public
	 * @async
	 * @param {?(string | number)} [port]
	 * @param {?boolean} [allowPortIncrement]
	 * @example
	 * const server = new JovaServer();
	 *
	 * await server.listen(3000); // Without port increment
	 * @example
	 * const server = new JovaServer({ port: 3000 });
	 *
	 * await server.listen();
	 * @example
	 * const server = new JovaServer();
	 *
	 * await server.listen(3000, true); // With port increment
	 * @returns {Promise<void>}
	 */
	public async listen(port?: string | number, allowPortIncrement?: boolean): Promise<void> {
		try {
			if (!port) port = this.port;

			const inUse = await this.checkFreePort(port, allowPortIncrement)
				.then(() => false)
				.catch(() => true);

			if (inUse)
				throw new Error(
					'Specified port is already in use, allowPortIncrement is disabled so the server will not create any new ports.',
					{ cause: 'PORT_IN_USE' }
				);

			await this.loadJovaResources();

			await this.loadApplicationEvents().catch((err) => {
				this.logger.fatal('ApplicationEventRegistry: Error during listener processing:', err);
				this.release(ApplicationEvent.ERROR, err);
				process.exit(1);
			});

			await this.loadApplicationMiddlewares().catch((err) => {
				this.logger.fatal('ApplicationMiddlewareRegistry: Error during middleware processing:', err);
				this.release(ApplicationEvent.ERROR, err);
				process.exit(1);
			});

			await this.loadApplicationRoutes().catch((err) => {
				this.logger.fatal('ApplicationRouteRegistry: Error during route processing:', err);
				this.release(ApplicationEvent.ERROR, err);
				process.exit(1);
			});

			this.application.listen(port, () => {
				this.logger.info(
					`Application: HTTP Server now serving on port ${port} with: ${this.registry.getRoutes().length} route(s) ${this.registry.getMiddlewares().length + (this.middlewares?.length || 0)} middleware(s) ${this.registry.getEvents().length} event listener(s)`
				);
				this.release(ApplicationEvent.READY);
			});
		} catch (error) {
			this.logger.fatal('ApplicationError: Error during server startup:', error);
			this.release(ApplicationEvent.ERROR, error);
			process.exit(1);
		}
	}

	/**
	 * Run a Jova test server, starts up and shuts back down returning an optional 0 exit code for success or 1 for error.
	 *
	 * @public
	 * @async
	 * @param {?(string | number)} [port]
	 * @param {?true} [exit]
	 * @returns {Promise<void>}
	 */
	public async test(port: string | number, exit?: true): Promise<void> {
		try {
			if (!port) port = this.port;

			this.logger.warn(
				'ApplicationTest: MAKE SURE DEPLOYMENT TESTING TAKES PLACE BEFORE PRODUCTION DEPLOYMENTS IF USED.'
			);
			this.logger.warn('ApplicationTest: Running test deployment, prepare for any errors.');
			this.logger.warn(
				'ApplicationTest: The server will start up and instantly shut back down, returning an error or success.'
			);

			port = await this.checkFreePort(port, true);

			await this.loadJovaResources();

			await this.loadApplicationEvents().catch((err) => {
				this.logger.fatal('ApplicationEventRegistry: Error during listener processing:', err);
				this.release(ApplicationEvent.ERROR, err);
				process.exit(1);
			});

			await this.loadApplicationMiddlewares().catch((err) => {
				this.logger.fatal('ApplicationMiddlewareRegistry: Error during middleware processing:', err);
				this.release(ApplicationEvent.ERROR, err);
				process.exit(1);
			});

			await this.loadApplicationRoutes().catch((err) => {
				this.logger.fatal('ApplicationRouteRegistry: Error during route processing:', err);
				this.release(ApplicationEvent.ERROR, err);
				process.exit(1);
			});

			const app = this.application.listen(port, () => {
				this.logger.info(
					`Application: Test HTTP Server now serving on port ${port} with: ${this.registry.getRoutes().length} route(s) ${this.registry.getMiddlewares().length + (this.middlewares?.length || 0)} middleware(s) ${this.registry.getEvents().length} event listener(s)`
				);
				this.release(ApplicationEvent.READY);
			});

			// TODO Add a route ping system soon

			this.registry.flush();
			this.logger.warn('ApplicationTest: Flushed registries!');
			this.logger.warn('ApplicationTest: Closing test server...');
			app.close();

			if (exit) {
				this.logger.warn('ApplicationTest: Exit on finish was set to true, exiting...');
				process.exit(0);
			}
			return;
		} catch (error) {
			this.logger.warn('ApplicationTest: Error during server test:', error);
			this.release(ApplicationEvent.ERROR, error);
			process.exit(1);
		}
	}
}

export {
	ApplicationEvent,
	NextFunction as ApplicationNextFunction,
	Registry as ApplicationRegistry,
	Request as ApplicationRequest,
	Response as ApplicationResponse,
	JovaServer,
};
