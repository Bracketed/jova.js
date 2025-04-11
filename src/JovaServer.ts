import { Logger } from '@bracketed/logger';
import express from 'express';
import type { Options } from 'express-rate-limit';
import { EventEmitter } from 'node:events';
import fs from 'node:fs';
import path from 'node:path';

import { Handlers } from './handlers/index';

import { container } from './shared/Container';

import { loadResourceConfigOptions } from './utilities/loadRC';
import { extend } from './utilities/middlewares/Extend';
import { getProjectRoot } from './utilities/path';
import * as tcp from './utilities/port-in-use';

import {
	ApplicationEvent,
	type ApplicationRequestHandler,
	type CorsOptions,
	type JovaCustomOption,
	type JovaRequiredPathSettings,
	type JovaServerOptions,
	type JovaSettings,
	JovaSettingsOptions,
	type LoggerOptions,
	type ServeStaticConfig,
} from './types/index';

import { Registry as ApplicationRegistry } from './Registry';

import { BulkResourceLoader } from './resources/BulkResourceLoader';

/**
 * @name Server
 * @description
 * The Jova Server Class.
 *
 * @class JovaServer
 * @module Core
 * @extends EventEmitter
 */
export class JovaServer extends EventEmitter {
	private readonly port: number;
	private readonly basePath: string;
	private readonly paths: JovaRequiredPathSettings = {
		events: 'events',
		middlewares: 'middlewares',
		routes: 'routes,',
	};
	private readonly middlewares: Array<ApplicationRequestHandler> | undefined;
	private readonly ratelimitConf: Partial<Options> | undefined;
	private readonly settings: JovaSettings | undefined;
	private readonly customOptions: Array<JovaCustomOption> | undefined;
	private readonly corsOptions: CorsOptions | undefined;
	private readonly root: string = getProjectRoot();
	private readonly loggerOptions: LoggerOptions;

	constructor(options: JovaServerOptions = {}) {
		super();

		if (!this.root)
			throw new Error('Unable to find project root, are you executing Jova.js from the correct file/directory?', {
				cause: 'Unable to find package.json',
			});

		container.logger = new Logger({ ...(options.logger ?? {}), prefix: 'Application' });
		container.logger.info('Checking for Resource Config and updating options...');
		options = { ...options, ...loadResourceConfigOptions(options.customrc) };
		container.logger.info('Options updated with Resource Config!');

		this.loggerOptions = options.logger ?? ({} satisfies LoggerOptions);
		this.basePath = options.basePath || '';
		this.port = Number(options.port) || 3000;
		this.middlewares = options.middlewares || undefined;
		this.ratelimitConf = options.ratelimiting || undefined;
		this.settings = options.settings || undefined;
		this.customOptions = options.customOptions || undefined;
		this.corsOptions = options.cors || undefined;
		this.paths = {
			events: options.paths?.events || 'events',
			middlewares: options.paths?.middlewares || 'middlewares',
			routes: options.paths?.routes || 'routes',
		};

		if (this.port >= 65354)
			throw new Error('Specified port is too high.', {
				cause: 'AUTO_PORT_MAXED',
			});

		container.express.use(extend);
		container.registry = new ApplicationRegistry({
			basePath: this.basePath,
		});

		const staticConfiguredDir = options.static?.dir || 'static';
		const staticConfiguredOptions = options.static?.options || ({} satisfies ServeStaticConfig);
		const staticDir = path.resolve(container.cwd, staticConfiguredDir);
		const rootStaticDir = path.resolve(this.root, staticConfiguredDir);

		if (fs.existsSync(staticDir)) {
			const serveStatic = express.static(staticDir, staticConfiguredOptions as any);
			container.express.use(serveStatic as unknown as ApplicationRequestHandler);
			container.logger.info(`Static file serving was enabled at ${staticConfiguredDir}`);
		} else if (fs.existsSync(rootStaticDir)) {
			const serveStatic = express.static(rootStaticDir, staticConfiguredOptions as any);
			container.express.use(serveStatic as unknown as ApplicationRequestHandler);
			container.logger.info(`Static file serving was enabled at ${staticConfiguredDir}`);
		}

		Object.defineProperty(this, 'listen', {
			value: this.listen,
			writable: false,
			configurable: false,
		});

		process.on('uncaughtException', (error: Error) => {
			container.logger?.fatal('Uncaught Exception:', error);
			this.release(ApplicationEvent.ERROR, error);
		});

		process.on('unhandledRejection', (reason: unknown) => {
			container.logger?.fatal('Unhandled Rejection:', reason);
			this.release(ApplicationEvent.ERROR, reason);
		});

		container.jova = this;
	}

	private release(Event: ApplicationEvent, ...args: any[]) {
		this.emit(Event, ...args);
		container.registry?.getEvents().forEach((eventListener) => {
			if (eventListener.event === Event) eventListener.handler(...args);
			else if (eventListener.event === ApplicationEvent.ALL) eventListener.handler(Event, ...args);
		});
	}

	private async checkFreePort(port: number, recursive?: boolean): Promise<number> {
		const InUse = await tcp
			.check(port)
			.then((p) => {
				if (p === true) return true;
				else return false;
			})
			.catch(() => false);

		if (InUse) {
			if (recursive === true) {
				container.logger?.warn(
					`JovaListener: Port ${port} is in use, attempting to open server with port ${port + 1}.`
				);
				return await this.checkFreePort(port + 1);
			} else throw new Error('Specified port is already in use.', { cause: 'PORT_IN_USE' });
		}

		return port;
	}

	/**
	 * @name App.any
	 * @description
	 * Alias for `all`.
	 *
	 * This method is like the standard methods, except it matches all HTTP verbs.
	 *
	 * @see {@link https://expressjs.com/en/5x/api.html#app.all Express Docs: Application.all()}
	 *
	 * @public
	 * @readonly
	 * @param path string
	 * @param callback any
	 */
	public readonly any = container.express.all;
	/**
	 * @name App.all
	 * @description
	 * Special-cased "all" method, applying the given route `path`, middleware, and callback to every HTTP method.
	 * This method is like the standard methods, except it matches all HTTP verbs.
	 *
	 * @see {@link https://expressjs.com/en/5x/api.html#app.all Express Docs: Application.all()}
	 *
	 * @public
	 * @param path string
	 * @param callback any
	 * @readonly
	 */
	public readonly all = container.express.all;

	/**
	 * @name App.get
	 * @description
	 * Contextual function.
	 *
	 * HTTP GET:
	 *
	 * Routes HTTP GET requests to the specified path with the specified callback functions.
	 *
	 * @see {@link https://expressjs.com/en/5x/api.html#app.get.method Express Docs: App.get (method)}
	 *
	 * @description
	 * Get Setting:
	 *
	 * Returns the value of name app setting, where name is one of the strings in the app settings table.
	 *
	 * @see {@link https://expressjs.com/en/5x/api.html#app.get Express Docs: App.get()}
	 *
	 * @public
	 * @param (http get) path string
	 * @param (http get) callback any
	 * @param (get setting) setting string | JovaSettingsOptions
	 * @readonly
	 */
	public readonly get = container.express.get;
	/**
	 * @name App.delete
	 * @description
	 * Contextual function.
	 *
	 * HTTP DELETE:
	 *
	 * Routes HTTP DELETE requests to the specified path with the specified callback functions.
	 *
	 * @see {@link https://expressjs.com/en/5x/api.html#app.delete Express Docs: Application.delete()}
	 *
	 * @public
	 * @param path string
	 * @param callback any
	 * @readonly
	 */
	public readonly delete = container.express.delete;
	/**
	 * @name App.param
	 * @description
	 * Add callback triggers to route parameters.
	 *
	 * @see {@link https://expressjs.com/en/5x/api.html#app.param Express Docs: Application.param()}
	 *
	 * @public
	 * @readonly
	 */
	public readonly param = container.express.param;
	/**
	 * @name App.post
	 * @description
	 * Routes HTTP POST requests to the specified path with the specified callback functions.
	 *
	 * @see {@link https://expressjs.com/en/5x/api.html#app.post Express Docs: Application.post()}
	 *
	 * @public
	 * @param path string
	 * @param callback any
	 * @readonly
	 */
	public readonly post = container.express.post;
	/**
	 * @name App.put
	 * @description
	 * Routes HTTP PUT requests to the specified path with the specified callback functions.
	 *
	 * @see {@link https://expressjs.com/en/5x/api.html#app.put Express Docs: Application.put()}
	 *
	 * @public
	 * @param path string
	 * @param callback any
	 * @readonly
	 */
	public readonly put = container.express.put;
	/**
	 * @name App.render
	 * @description
	 * Returns the rendered HTML of a view via the `callback` function.
	 * It accepts an optional parameter that is an object containing local variables for the view.
	 * It is like response.render(), except it cannot send the rendered view to the client on its own.
	 *
	 * @see {@link https://expressjs.com/en/5x/api.html#app.render Express Docs: Application.render()}
	 *
	 * @public
	 * @readonly
	 */
	public readonly render = container.express.render;
	/**
	 * @name App.route
	 * @description
	 * Returns an instance of a single route, which you can then use to handle HTTP verbs with optional middleware.
	 * Use `route` to avoid duplicate route names (and thus typo errors).
	 *
	 * @see {@link https://expressjs.com/en/5x/api.html#app.route Express Docs: Application.route()}
	 *
	 * @public
	 * @readonly
	 */
	public readonly route = container.express.route;

	/**
	 * @name App.head
	 * @description
	 * Routes HTTP HEAD requests to the specified path with the specified callback functions.
	 *
	 * @see {@link https://expressjs.com/en/5x/api.html#app.head Express Docs: Application.head()}
	 *
	 * [ NO DOCUMENTATION CURRENT ]
	 *
	 * @public
	 * @param path string
	 * @param callback any
	 * @readonly
	 */
	public readonly head = container.express.head;

	/**
	 * @name App.options
	 * @description
	 * Routes HTTP OPTIONS requests to the specified path with the specified callback functions.
	 *
	 * @see {@link https://expressjs.com/en/5x/api.html#app.options Express Docs: Application.options()}
	 *
	 * @public
	 * @param path string
	 * @param callback any
	 * @readonly
	 */
	public readonly options = container.express.options;

	/**
	 * @name App.use
	 * @description
	 * Mounts the specified middleware function or functions at the specified path:
	 * the middleware function is executed when the base of the requested path matches `path`.
	 *
	 * @see {@link https://expressjs.com/en/5x/api.html#app.use Express Docs: Application.use()}
	 *
	 * @public
	 * @param path string
	 * @param callback any
	 * @readonly
	 */
	public readonly use = container.express.use;

	/**
	 * @name App.middleware
	 * @description
	 * Mounts the specified middleware function or functions at the specified path:
	 * the middleware function is executed when the base of the requested path matches `path`.
	 *
	 * @see {@link https://expressjs.com/en/5x/api.html#app.use Express Docs: Application.use()}
	 *
	 * @public
	 * @param path string
	 * @param callback any
	 * @readonly
	 */
	public readonly middleware = container.express.use;

	/**
	 * @name App.set
	 * @description
	 * Assigns setting name to value.
	 * You may store any value that you want, but certain names can be used to configure the behavior of the server.
	 * These special names are listed in the app settings table.
	 *
	 * Calling application.set('foo', true) for a Boolean property is the same as calling application.enable('foo').
	 * Similarly, calling application.set('foo', false) for a Boolean property is the same as calling application.disable('foo').
	 *
	 * @see {@link https://expressjs.com/en/5x/api.html#app.set Express Docs: Application.set()}
	 *
	 * @public
	 * @param Name JovaSettingsOptions | string
	 * @param Value any
	 * @readonly
	 */
	public readonly set = (Name: JovaSettingsOptions | string, Value: any) =>
		container.express.set(Name as string, Value);

	/**
	 * @name App.engine
	 * @description
	 * Registers the given template engine `callback` as `ext`.
	 *
	 * @see {@link https://expressjs.com/en/5x/api.html#app.engine Express Docs: Application.engine()}
	 *
	 * @public
	 * @param ext string
	 * @param callback (path: string, options: object, callback: (e: any, rendered?: string) => void) => void
	 * @readonly
	 */
	public readonly engine = container.express.engine;

	/**
	 * @name App.locals
	 * @description
	 * The `locals` object has properties that are local variables within the application,
	 * and will be available in templates rendered with response.render.
	 *
	 * Once set, the value of `locals` properties persist throughout the life of the application,
	 * in contrast with response.locals properties that are valid only for the lifetime of the request.
	 * You can access local variables in templates rendered within the application.
	 * This is useful for providing helper functions to templates, as well as application-level data.
	 * Local variables are available in middleware via `request.app.locals`.
	 *
	 * @see {@link https://expressjs.com/en/5x/api.html#app.locals Express Docs: Application.locals}
	 *
	 * locals is also a property of the `container` object.
	 *
	 * @public
	 */
	public locals = container.express.locals;

	/**
	 * @name App.path
	 * @description
	 * Returns the canonical path of the application, a string.
	 *
	 * The behavior of this method can become very complicated in complex cases of mounted apps:
	 * it is usually better to use request.baseUrl to get the canonical path of the application.
	 *
	 * @see {@link https://expressjs.com/en/5x/api.html#app.path Express Docs: Application.path()}
	 *
	 * @public
	 * @readonly
	 */
	public readonly path = container.express.path;

	/**
	 * @name App.listen
	 * @description
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
	public readonly listen = async (
		port: string | number | undefined = this.port,
		allowPortIncrement?: boolean
	): Promise<void> => {
		port = Number(port);
		if (port >= 65354)
			throw new Error('Specified port is too high.', {
				cause: 'AUTO_PORT_MAXED',
			});

		container.logger?.info(`Starting new HTTP server on port ${port}...`);

		try {
			const inUse = await this.checkFreePort(port, allowPortIncrement)
				.then(() => false)
				.catch(() => true);

			if (inUse)
				throw new Error(
					'Specified port is already in use, allowPortIncrement is disabled so the server will not create any new ports.',
					{ cause: 'PORT_IN_USE' }
				);

			const resourceCount = await new BulkResourceLoader({
				logger: this.loggerOptions,
				tasks: [
					{ name: 'Ratelimits', arguments: [this.ratelimitConf] },
					{ name: 'CORS', arguments: [this.corsOptions] },
					{ name: 'Middlewares', arguments: [this.middlewares] },
					{ name: 'Events', arguments: [this] },
					{ name: 'Settings', arguments: [this.settings] },
					{ name: 'CustomOptions', arguments: [this.customOptions] },
				],
			}).load();

			await new Handlers({
				logger: this.loggerOptions,
				paths: this.paths,
			})
				.register()
				.catch((err) => {
					container.logger?.fatal('Error during handler processing:', err);
					this.release(ApplicationEvent.ERROR, err);
					process.exit(1);
				});

			container.logger?.info();
			container.express.listen(port, () => {
				container.logger?.info(
					`HTTP Server now serving on port ${port} with: ${container.registry?.getRoutes().length} route(s), ${container.registry!.getMiddlewares().length + (this.middlewares?.length || 0)} + ${resourceCount} Built-in middleware(s) and ${container.registry?.getEvents().length} event listener(s)`
				);
				this.release(ApplicationEvent.READY);
			});
		} catch (error) {
			container.logger?.fatal('Error during server startup:', error);
			this.release(ApplicationEvent.ERROR, error);
			process.exit(1);
		}
	};
}
