import express, { type Express } from '@bracketed/express';
import { Logger } from '@bracketed/logger';
import { EventEmitter } from 'node:events';

import { Handlers } from './handlers/index';

import { parseRootData } from './utilities/Path/root';
import * as tcp from './utilities/port-in-use';

import {
	ApplicationEvent,
	type CorsOptions,
	EventController,
	type JovaCustomOption,
	type JovaPathSettings$1,
	type JovaServerOptions,
	type JovaSettings,
	JovaSettingsTable,
	MiddlewareController,
	type MiddlewareHandler,
	type RatelimitConfig,
	RouteController,
} from './types/index';

import { Registry as ApplicationRegistry } from './Registry';

import { BulkResourceLoader } from './resources/BulkResourceLoader';

/**
 * The Jova Server Class.
 *
 * @class JovaServer
 * @module Core
 * @extends EventEmitter
 */
export class JovaServer extends EventEmitter {
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
	private readonly paths: JovaPathSettings$1;

	private readonly middlewares: Array<MiddlewareHandler> | undefined;
	private readonly ratelimitConf: RatelimitConfig | undefined;
	private readonly settings: JovaSettings | undefined;
	private readonly customOptions: Array<JovaCustomOption> | undefined;
	private readonly corsOptions: CorsOptions | undefined;

	/**
	 * The application registry, contains all the routes, middlewares and event handlers.
	 *
	 * @class ApplicationRegistry
	 * @public
	 * @readonly
	 * @type ApplicationRegistry
	 */
	public readonly registry: ApplicationRegistry;

	/**
	 * The current working directory of the project, this references the the folder of which the server is being ran from.
	 *
	 * @public
	 * @readonly
	 * @type string
	 */
	public readonly cwd: string;

	private readonly application: Express = express();
	private readonly logger: Logger = new Logger({ prefix: 'Application' });
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
			routes: options.paths?.routes || 'routes',
		};

		this.emitter = new EventEmitter();
		this.registry = new ApplicationRegistry({
			basePath: this.basePath,
		});

		this.cwd = parseRootData().root;

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
			this.logger.fatal('Uncaught Exception:', error);
			this.release(ApplicationEvent.ERROR, error);
		});

		process.on('unhandledRejection', (reason: unknown) => {
			this.logger.fatal('Unhandled Rejection:', reason);
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
	 * @see {@link https://expressjs.com/en/5x/api.html#app.all Express Docs: Application.all()}
	 *
	 * @public
	 * @readonly
	 * @param path string
	 * @param callback any
	 */
	public readonly any = this.application.all;
	/**
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
	public readonly all = this.application.all;

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
	 * @param (get setting) setting string | JovaSettingsTable
	 * @readonly
	 */
	public readonly get = this.application.get;
	/**
	 * Routes HTTP DELETE requests to the specified path with the specified callback functions.
	 *
	 * @see {@link https://expressjs.com/en/5x/api.html#app.delete Express Docs: Application.delete()}
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
	 * @see {@link https://expressjs.com/en/5x/api.html#app.param Express Docs: Application.param()}
	 *
	 * @public
	 * @readonly
	 */
	public readonly param = this.application.param;
	/**
	 * Routes HTTP POST requests to the specified path with the specified callback functions.
	 *
	 * @see {@link https://expressjs.com/en/5x/api.html#app.post Express Docs: Application.post()}
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
	 * @see {@link https://expressjs.com/en/5x/api.html#app.put Express Docs: Application.put()}
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
	 * @see {@link https://expressjs.com/en/5x/api.html#app.render Express Docs: Application.render()}
	 *
	 * @public
	 * @readonly
	 */
	public readonly render = this.application.render;
	/**
	 * Returns an instance of a single route, which you can then use to handle HTTP verbs with optional middleware.
	 * Use `route` to avoid duplicate route names (and thus typo errors).
	 *
	 * @see {@link https://expressjs.com/en/5x/api.html#app.route Express Docs: Application.route()}
	 *
	 * @public
	 * @readonly
	 */
	public readonly route = this.application.route;

	/**
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
	public readonly head = this.application.head;

	/**
	 * Routes HTTP OPTIONS requests to the specified path with the specified callback functions.
	 *
	 * @see {@link https://expressjs.com/en/5x/api.html#app.options Express Docs: Application.options()}
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
	 * @see {@link https://expressjs.com/en/5x/api.html#app.use Express Docs: Application.use()}
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
	 * @see {@link https://expressjs.com/en/5x/api.html#app.use Express Docs: Application.use()}
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
	 * @see {@link https://expressjs.com/en/5x/api.html#app.set Express Docs: Application.set()}
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
	 * @see {@link https://expressjs.com/en/5x/api.html#app.engine Express Docs: Application.engine()}
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
	 * Local variables are available in middleware via `request.app.locals` or `this.container`.
	 *
	 * @see {@link https://expressjs.com/en/5x/api.html#app.locals Express Docs: Application.locals}
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
	 * @see {@link https://expressjs.com/en/5x/api.html#app.locals Express Docs: Application.locals}
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
	 * @see {@link https://expressjs.com/en/5x/api.html#app.path Express Docs: Application.path()}
	 *
	 * @public
	 * @readonly
	 */
	public readonly path = this.application.path;

	private async loadApplicationRoutes(): Promise<void> {
		await (
			await new Handlers.Handler({
				application: this.application,
				registry: this.registry,
				cwd: this.cwd,
				type: 'Route',
				controllerType: RouteController,
			}).setupDeployScript()
		)
			.loadHandlers(this.paths.routes)
			.register('Routes');
	}

	private async loadApplicationEvents(): Promise<void> {
		await (
			await new Handlers.Handler({
				application: this.application,
				registry: this.registry,
				cwd: this.cwd,
				type: 'Event',
				controllerType: EventController,
			}).setupDeployScript()
		)
			.loadHandlers(this.paths.events)
			.register('Events');
	}

	private async loadApplicationMiddlewares(): Promise<void> {
		this.logger.info('Registering Built-in Middlewares...');

		await new BulkResourceLoader({
			application: this.application,
			registry: this.registry,
			tasks: [
				{ name: 'Ratelimits', arguments: [this.ratelimitConf] },
				{ name: 'CORS', arguments: [this.corsOptions] },
				{ name: 'Middlewares', arguments: [this.middlewares] },
				{ name: 'Events', arguments: [this.emitter] },
			],
		}).load();

		await (
			await new Handlers.Handler({
				cwd: this.cwd,
				type: 'Middleware',
				application: this.application,
				registry: this.registry,
				controllerType: MiddlewareController,
			}).setupDeployScript()
		)
			.loadHandlers(this.paths.middlewares)
			.register('Middlewares');
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
		this.logger.info(`Starting new HTTP server on port ${port}...`);

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

			const resourceCount = await new BulkResourceLoader({
				application: this.application,
				registry: this.registry,
				tasks: [
					{ name: 'Settings', arguments: [this.settings] },
					{ name: 'CustomOptions', arguments: [this.customOptions] },
				],
			}).load();

			await this.loadApplicationEvents().catch((err) => {
				this.logger.fatal('Error during listener processing:', err);
				this.release(ApplicationEvent.ERROR, err);
				process.exit(1);
			});

			await this.loadApplicationMiddlewares().catch((err) => {
				this.logger.fatal('Error during middleware processing:', err);
				this.release(ApplicationEvent.ERROR, err);
				process.exit(1);
			});

			await this.loadApplicationRoutes().catch((err) => {
				this.logger.fatal('Error during route processing:', err);
				this.release(ApplicationEvent.ERROR, err);
				process.exit(1);
			});

			this.logger.info();
			this.application.listen(port, () => {
				this.logger.info(
					`HTTP Server now serving on port ${port} with: ${this.registry.getRoutes().length} route(s), ${this.registry.getMiddlewares().length + (this.middlewares?.length || 0)} + ${resourceCount} Built-in middleware(s) and ${this.registry.getEvents().length} event listener(s)`
				);
				this.release(ApplicationEvent.READY);
			});
		} catch (error) {
			this.logger.fatal('Error during server startup:', error);
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

			this.logger.warn('MAKE SURE DEPLOYMENT TESTING TAKES PLACE BEFORE PRODUCTION DEPLOYMENTS IF USED.');
			this.logger.warn('Running test deployment, prepare for any errors.');
			this.logger.warn('The server will start up and instantly shut back down, returning an error or success.');

			port = await this.checkFreePort(port, true);

			const resourceCount = await new BulkResourceLoader({
				application: this.application,
				registry: this.registry,
				tasks: [
					{ name: 'Settings', arguments: [this.settings] },
					{ name: 'CustomOptions', arguments: [this.customOptions] },
				],
			}).load();

			await this.loadApplicationEvents().catch((err) => {
				this.logger.fatal('Error during listener processing:', err);
				this.release(ApplicationEvent.ERROR, err);
				process.exit(1);
			});

			await this.loadApplicationMiddlewares().catch((err) => {
				this.logger.fatal('Error during middleware processing:', err);
				this.release(ApplicationEvent.ERROR, err);
				process.exit(1);
			});

			await this.loadApplicationRoutes().catch((err) => {
				this.logger.fatal('Error during route processing:', err);
				this.release(ApplicationEvent.ERROR, err);
				process.exit(1);
			});

			const app = this.application.listen(port, () => {
				this.logger.info(
					`Test HTTP Server now serving on port ${port} with: ${this.registry.getRoutes().length} route(s) ${this.registry.getMiddlewares().length + (this.middlewares?.length || 0)} + ${resourceCount} Built-in middleware(s) ${this.registry.getEvents().length} event listener(s)`
				);
				this.release(ApplicationEvent.READY);
			});

			this.registry.flush();
			this.logger.warn('Flushed registries!');
			this.logger.warn('Closing test server...');
			app.close();

			if (exit) {
				this.logger.warn('Exit on finish was set to true, exiting...');
				process.exit(0);
			}
			return;
		} catch (error) {
			this.logger.warn('Error during server test:', error);
			this.release(ApplicationEvent.ERROR, error);
			process.exit(1);
		}
	}
}
