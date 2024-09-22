import express, { Express } from '@bracketed/express';
import { Logger } from '@bracketed/logger';
import { Stopwatch } from '@sapphire/stopwatch';
import { EventEmitter } from 'node:events';
import fs from 'node:fs';
import path from 'node:path';
import tcp from 'tcp-port-used';

import * as utilities from './utilities/index.js';

import {
	ApplicationEvent,
	ApplicationRegistry,
	CorsOptions,
	EventController,
	JovaCustomOption,
	JovaPathSettings,
	JovaServerOptions,
	JovaSettings,
	JovaSettingsTable,
	MiddlewareController,
	MiddlewareHandler,
	RatelimitConfig,
	RouteController,
} from './types/index.js';

import { loadApplicationCorsConfiguration } from './resources/CorsConfig.js';
import { loadApplicationCustomConfiguration } from './resources/CustomOptionsConfig.js';
import { loadApplicationEventsMiddlewareConfiguration } from './resources/EventsConfig.js';
import { loadApplicationMiddlewaresConfiguration } from './resources/MiddlewaresConfig.js';
import { loadApplicationRatelimitConfiguration } from './resources/RatelimitConfig.js';
import { loadApplicationSettingsConfiguration } from './resources/SettingsConfig.js';

function recursiveSearchInDir(targetDirName: string, currentDir: string): string | null {
	const files = fs.readdirSync(currentDir);

	for (const file of files) {
		const fullPath = path.join(currentDir, file);
		const stat = fs.statSync(fullPath);

		if (file === 'node_modules') continue;
		if (stat.isDirectory() && file === targetDirName) return fullPath;

		if (stat.isDirectory()) {
			const result = recursiveSearchInDir(targetDirName, fullPath);
			if (result) return result;
		}
	}

	return null;
}

function findDirUpward(targetDirName: string, startDir: string): string | null {
	let currentDir = path.resolve(startDir);

	while (currentDir !== path.parse(currentDir).root) {
		const result: string | null = recursiveSearchInDir(targetDirName, currentDir);
		if (result) return result;
		currentDir = path.dirname(currentDir);
	}

	return null;
}

function findHandlers(dir: string, startDir = process.cwd(), fileList: string[] = [], visitedDirs = new Set()) {
	const foundDir = findDirUpward(dir, startDir);

	if (!foundDir) {
		console.error(`Directory '${dir}' not found from '${startDir}' or any parent directories.`);
		return fileList;
	}

	const absoluteDir = path.resolve(foundDir);
	if (visitedDirs.has(absoluteDir)) return fileList;

	visitedDirs.add(absoluteDir);

	const files = fs.readdirSync(absoluteDir);

	files.forEach((file: string) => {
		const fullPath = path.join(absoluteDir, file);
		const stat = fs.statSync(fullPath);

		if (file === 'node_modules') return;

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
 * @extends EventEmitter
 */
class JovaServer extends EventEmitter {
	/**
	 * The port number defined by the Server Options or in the `listen` function.
	 *
	 * @public
	 * @readonly
	 * @example 3000
	 * @default 3000
	 * @type string | number
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
	 * @type ApplicationRegistry
	 */
	public readonly registry: ApplicationRegistry;
	private readonly application: Express = express();
	private readonly logger: Logger = new Logger();
	private readonly emitter: EventEmitter;

	/**
	 * Creates an instance of JovaServer.
	 *
	 * @param options
	 * @default undefined
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
		this.registry = new ApplicationRegistry({
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
	 
	 * @param port
	 * @param recursive
	 */
	public async checkFreePort(port: number | string, recursive?: boolean): Promise<number> {
		if (typeof port === 'string') port = Number(port);
		if (port >= 65354)
			throw new Error('Specified port is too high.', {
				cause: 'AUTO_PORT_MAXED',
			});

		const InUse = await tcp
			.check(port)
			.then((p) => {
				if (p === true) return true;
				else return false;
			})
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
	 * Contextual function.
	 *
	 * HTTP GET:
	 *
	 * Routes HTTP GET requests to the specified path with the specified callback functions.
	 *
	 * Source: http://expressjs.com/en/5x/api.html#app.get.method
	 *
	 * Get Setting:
	 *
	 * Returns the value of name app setting, where name is one of the strings in the app settings table.
	 *
	 * Source: https://expressjs.com/en/5x/api.html#app.get
	 *
	 * @public
	 * @param (http get) path string
	 * @param (http get) callback any
	 * @param (get setting) setting string | JovaSettingsTable
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

	/**
	 * Routes HTTP HEAD requests to the specified path with the specified callback functions.
	 *
	 * Source: http://expressjs.com/en/5x/api.html#app.head
	 *
	 * [ NO DOCUMENTATION CURRENT ]
	 *
	 * @public
	 * @param path string
	 * @param callback any
	 * @readonly
	 */
	public readonly head = this.application.head;

	/**
	 * Routes HTTP OPTIONS requests to the specified path with the specified callback functions.
	 *
	 * Source: http://expressjs.com/en/5x/api.html#app.options
	 *
	 * [ NO DOCUMENTATION CURRENT ]
	 *
	 * @public
	 * @param path string
	 * @param callback any
	 * @readonly
	 */
	public readonly options = this.application.options;

	/**
	 * Mounts the specified middleware function or functions at the specified path:
	 * the middleware function is executed when the base of the requested path matches `path`.
	 *
	 * Source: http://expressjs.com/en/5x/api.html#app.use
	 *
	 * @public
	 * @param path string
	 * @param callback any
	 * @readonly
	 */
	public readonly use = this.application.use;

	/**
	 * Mounts the specified middleware function or functions at the specified path:
	 * the middleware function is executed when the base of the requested path matches `path`.
	 *
	 * Source: http://expressjs.com/en/5x/api.html#app.use
	 *
	 * @public
	 * @param path string
	 * @param callback any
	 * @readonly
	 */
	public readonly middleware = this.application.use;

	/**
	 * Assigns setting name to value.
	 * You may store any value that you want, but certain names can be used to configure the behavior of the server.
	 * These special names are listed in the app settings table.
	 *
	 * Calling application.set('foo', true) for a Boolean property is the same as calling application.enable('foo').
	 * Similarly, calling application.set('foo', false) for a Boolean property is the same as calling application.disable('foo').
	 *
	 * Source: http://expressjs.com/en/5x/api.html#app.set
	 *
	 * @public
	 * @param Name JovaSettingsTable | string
	 * @param Value any
	 * @readonly
	 */
	public set(Name: JovaSettingsTable | string, Value: any): void {
		this.application.set(Name, Value);
	}

	/**
	 * Registers the given template engine `callback` as `ext`.
	 *
	 * Source: http://expressjs.com/en/5x/api.html#app.engine
	 *
	 * @public
	 * @param ext string
	 * @param callback (path: string, options: object, callback: (e: any, rendered?: string) => void) => void
	 * @readonly
	 */
	public readonly engine = this.application.engine;

	/**
	 * The `container` object has properties that are local variables within the application,
	 * and will be available in templates rendered with response.render.
	 *
	 * Once set, the value of `container` properties persist throughout the life of the application,
	 * in contrast with response.locals properties that are valid only for the lifetime of the request.
	 * You can access local variables in templates rendered within the application.
	 * This is useful for providing helper functions to templates, as well as application-level data.
	 * Local variables are available in middleware via `request.app.locals`.
	 *
	 * Source: http://expressjs.com/en/5x/api.html#app.locals
	 *
	 * @public
	 */
	public container = this.application.locals;

	/**
	 * The `locals` object has properties that are local variables within the application,
	 * and will be available in templates rendered with response.render.
	 *
	 * Once set, the value of `locals` properties persist throughout the life of the application,
	 * in contrast with response.locals properties that are valid only for the lifetime of the request.
	 * You can access local variables in templates rendered within the application.
	 * This is useful for providing helper functions to templates, as well as application-level data.
	 * Local variables are available in middleware via `request.app.locals`.
	 *
	 * Source: http://expressjs.com/en/5x/api.html#app.locals
	 *
	 * @public
	 */
	public locals = this.application.locals;

	/**
	 * Returns the canonical path of the application, a string.
	 *
	 * The behavior of this method can become very complicated in complex cases of mounted apps:
	 * it is usually better to use request.baseUrl to get the canonical path of the application.
	 *
	 * Source: http://expressjs.com/en/5x/api.html#app.path
	 *
	 * @public
	 * @readonly
	 */
	public readonly path = this.application.path;

	private async loadApplicationRoutes(): Promise<void> {
		const routes = findHandlers(this.paths.routes as string);

		this.logger.info('ApplicationRouteRegistry: Registering Routes...');
		const RouteRegisterStopwatch = new Stopwatch();

		for await (const [_index, value] of routes.entries()) {
			const RouteTimer = new Stopwatch();
			const RouteModule = await import(`file://${value}`);
			if (!RouteModule['Route'] || typeof RouteModule['Route'] !== 'function') continue;

			const Route = RouteModule.Route as new (...args: any[]) => RouteController;

			const RegisteredRoute = new Route(this.application, this.logger, {
				request: new utilities.request(),
				response: new utilities.response(),
			}).registerApplicationRoutes(this.registry);

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

			this.application[Route.method](Route.route, ...RouteSpecificMiddlewares, Route.handler);
			this.logger.info(
				`ApplicationRouteRegistry: Route "${Route.route}" (${Route.method.toUpperCase()}) was deployed with ${RouteSpecificMiddlewares.length} route-specific middlewares.`
			);
		});

		this.logger.info(
			`ApplicationRouteRegistry: Registered ${this.registry.getRoutes().length} Route(s) in ${RouteRegisterStopwatch.stop().toString()}`
		);
		if (!(routes.length === this.registry.getRoutes().length))
			this.logger.warn(
				'ApplicationRouteRegistry: Some routes were not registered due to errors or missing content in the registering process'
			);
	}

	private async loadApplicationEvents(): Promise<void> {
		const events = findHandlers(this.paths.events as string);

		this.logger.info(`ApplicationEventRegistry: Registering ${events.length} Events...`);
		const EventRegisterStopwatch = new Stopwatch();

		for await (const [_index, value] of events.entries()) {
			const EventTimer = new Stopwatch();
			const EventModule = await import(`file://${value}`);
			if (!EventModule['Event'] || typeof EventModule['Event'] !== 'function') continue;

			const Event = EventModule.Event as new (...args: any[]) => EventController;

			const RegisteredEvent = new Event(this.application, this.logger, {
				request: new utilities.request(),
				response: new utilities.response(),
			}).registerApplicationEvent(this.registry);

			this.logger.info(
				`ApplicationEventRegistry: Registered Event: "${RegisteredEvent.getApplicationEvent().event}" in ${EventTimer.stop().toString()}`
			);
		}

		this.logger.info(
			`ApplicationEventRegistry: Registered ${this.registry.getEvents().length} Event(s) in ${EventRegisterStopwatch.stop().toString()}`
		);
		if (!(events.length === this.registry.getEvents().length))
			this.logger.warn(
				'ApplicationEventRegistry: Some events were not registered due to errors or missing content in the registering process'
			);
	}

	private async loadApplicationMiddlewares(): Promise<void> {
		this.logger.info('ApplicationMiddlewareRegistry: Registering Middlewares...');

		await loadApplicationRatelimitConfiguration(this.application, this.logger, this.ratelimitConf);
		loadApplicationCorsConfiguration(this.application, this.logger, this.corsOptions);
		loadApplicationMiddlewaresConfiguration(this.application, this.logger, this.middlewares);
		loadApplicationEventsMiddlewareConfiguration(this.application, this.logger, this.registry, this.emitter);

		const middlewares = findHandlers(this.paths.middlewares as string);
		const MiddlewareRegisterStopwatch = new Stopwatch();

		for await (const [_index, value] of middlewares.entries()) {
			const MiddlewareTimer = new Stopwatch();
			const MiddlewareModule = await import(`file://${value}`);
			if (!MiddlewareModule['Middleware'] || typeof MiddlewareModule['Middleware'] !== 'function') continue;

			const Middleware = MiddlewareModule.Middleware as new (...args: any[]) => MiddlewareController;

			const RegisteredMiddleware = new Middleware(this.application, this.logger, {
				request: new utilities.request(),
				response: new utilities.response(),
			}).registerApplicationMiddleware(this.registry);

			this.logger.info(
				`ApplicationMiddlewareRegistry: Registered Middleware: "${RegisteredMiddleware.getApplicationMiddleware().middleware}" in ${MiddlewareTimer.stop().toString()} - Runs on all Routes: ${RegisteredMiddleware.getApplicationMiddleware().runsOnAllRoutes}`
			);
		}

		this.registry.getMiddlewares().forEach((Middleware) => {
			if (Middleware.runsOnAllRoutes) this.application.use(Middleware.handler);
		});

		this.logger.info(
			`ApplicationMiddlewareRegistry: Registered ${this.registry.getMiddlewares().length} + Built-in Middleware(s) in ${MiddlewareRegisterStopwatch.stop().toString()}`
		);
		if (!(middlewares.length === this.registry.getMiddlewares().length))
			this.logger.warn(
				'ApplicationMiddlewareRegistry: Some routes were not registered due to errors or missing content in the registering process'
			);
	}

	/**
	 * Start the Jova Server, begin listening to a port & its incoming requests.
	 *
	 * @public
	 
	 * @param port
	 * @param allowPortIncrement
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
	 */
	public async listen(port?: string | number, allowPortIncrement?: boolean): Promise<void> {
		this.logger.info(`Application: Starting new HTTP server on port ${port}...`);
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

			loadApplicationSettingsConfiguration(this.application, this.logger, this.settings);
			loadApplicationCustomConfiguration(this.application, this.logger, this.customOptions);

			this.logger.info();
			this.logger.info('-------------------- EVENT REGISTERING --------------------');
			await this.loadApplicationEvents().catch((err) => {
				this.logger.fatal('ApplicationEventRegistry: Error during listener processing:', err);
				this.release(ApplicationEvent.ERROR, err);
				process.exit(1);
			});

			this.logger.info();
			this.logger.info('-------------------- MIDDLEWARE REGISTERING --------------------');
			await this.loadApplicationMiddlewares().catch((err) => {
				this.logger.fatal('ApplicationMiddlewareRegistry: Error during middleware processing:', err);
				this.release(ApplicationEvent.ERROR, err);
				process.exit(1);
			});

			this.logger.info();
			this.logger.info('-------------------- ROUTE REGISTERING --------------------');
			await this.loadApplicationRoutes().catch((err) => {
				this.logger.fatal('ApplicationRouteRegistry: Error during route processing:', err);
				this.release(ApplicationEvent.ERROR, err);
				process.exit(1);
			});

			this.logger.info();
			this.application.listen(port, () => {
				this.logger.info(
					`Application: HTTP Server now serving on port ${port} with: ${this.registry.getRoutes().length} route(s), ${this.registry.getMiddlewares().length + (this.middlewares?.length || 0)} + Built-in middleware(s) and ${this.registry.getEvents().length} event listener(s)`
				);
				this.logger.info();
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
	 
	 * @param port
	 * @param exit
	 */
	public async testServerDeploy(port: string | number, exit?: true): Promise<void> {
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

			loadApplicationSettingsConfiguration(this.application, this.logger, this.settings);
			loadApplicationCustomConfiguration(this.application, this.logger, this.customOptions);

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
					`Application: Test HTTP Server now serving on port ${port} with: ${this.registry.getRoutes().length} route(s) ${this.registry.getMiddlewares().length + (this.middlewares?.length || 0)} + Built-in middleware(s) ${this.registry.getEvents().length} event listener(s)`
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

export { JovaServer };
