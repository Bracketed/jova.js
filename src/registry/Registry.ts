import { Logger } from '@bracketed/logger';
import { Stopwatch } from '@sapphire/stopwatch';
import { Express } from 'express';
import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';
import { Methods } from 'src/types/http/HTTPRequestMethods.js';
import { JovaPathSettings } from '../types/config/jovaPathOptions.js';
import { ApplicationEvent } from '../types/JovaEvents.js';
import { ApplicationListener } from './types/Events/AppEventType.js';
import { EventHandler } from './types/Events/EventHandlerType.js';
import { ApplicationMiddleware } from './types/Middlewares/AppMiddlewareType.js';
import { MiddlewareHandler } from './types/Middlewares/MiddlewareHandlerType.js';
import { ApplicationRoute } from './types/Routes/AppRouteType.js';
import { RouteHandler } from './types/Routes/RouteHandlerType.js';

interface RegistryOptions {
	basePath?: string;
	paths?: JovaPathSettings;
	logger?: Logger;
	application: Express;
}

function readdirSyncRecursive(directory: string): string[] {
	let fileList: string[] = [];

	const files = fs.readdirSync(directory);

	for (const file of files) {
		const filePath = path.join(directory, file);
		const stat = fs.statSync(filePath);

		if (stat.isDirectory()) {
			fileList = fileList.concat(readdirSyncRecursive(filePath));
		} else {
			if (!(filePath.endsWith('.js') || filePath.endsWith('.ts'))) continue;
			fileList.push(filePath);
		}
	}

	return fileList;
}

/**
 * The Registry class, this allows the Jova Server to register, use and manage its content.
 *
 * @export
 * @class Registry
 * @typedef {Registry}
 */
export class Registry {
	private readonly routes: ApplicationRoute[] = [];
	private readonly events: ApplicationListener[] = [];
	private readonly middlewares: ApplicationMiddleware[] = [];
	private readonly basePath: string;
	private readonly paths: JovaPathSettings;
	private readonly logger: Logger;
	private readonly application: Express;

	/**
	 * Creates Registry a instance.
	 *
	 * @constructor
	 * @param {RegistryOptions} options
	 */
	constructor(options: RegistryOptions) {
		this.application = options.application;
		this.logger = options.logger || new Logger();
		this.basePath = options.basePath || '';
		this.paths = {
			events: options.paths?.events || 'events',
			middlewares: options.paths?.middlewares || 'middlewares',
			routes: options.paths?.events || 'routes',
		};
	}

	/**
	 * Register an app route to the registry, does not work if the Jova App has already been initialised, but will work if the app has not.
	 *
	 * @public
	 * @param {(route: ApplicationRoute) => ApplicationRoute} configureRoute
	 * @example
	 * return registry.registerApplicationRoute((route) =>
	 *		route //
	 *			.setRouteName('')
	 *			.setMethod(Methods.GET)
	 *			.setHandler(this.run)
	 *	);
	 * @returns {ApplicationRoute}
	 */
	public registerApplicationRoute(configureRoute: (route: ApplicationRoute) => ApplicationRoute): ApplicationRoute {
		const Route = new ApplicationRoute(this);
		this.routes.push(configureRoute(Route));
		return Route;
	}

	/**
	 * Register an app event to the registry, does not work if the Jova App has already been initialised, but will work if the app has not.
	 *
	 * @public
	 * @param {(route: ApplicationListener) => ApplicationListener} configureEvent
	 * @example
	 * 	return registry.registerApplicationEvent((event) =>
	 *		event //
	 *			.setEventType(ApplicationEvent.READY)
	 *			.setHandler(this.run)
	 *	);
	 * @returns {ApplicationListener}
	 */
	public registerApplicationEvent(
		configureEvent: (event: ApplicationListener) => ApplicationListener
	): ApplicationListener {
		const Listener = new ApplicationListener();
		this.events.push(configureEvent(Listener));
		return Listener;
	}

	/**
	 * Register an app middleware to the registry, does not work if the Jova App has already been initialised, but will work if the app has not.
	 *
	 * @public
	 * @param {(middleware: ApplicationMiddleware) => ApplicationMiddleware} configureMiddleware
	 * @example
	 * 	return registry.registerApplicationMiddleware((middleware) =>
	 *		middleware //
	 *			.setMiddlewareName('middleware')
	 *			.setHandler(this.run)
	 *			.runOnAllRoutes(false)
	 *	);
	 * @returns {ApplicationMiddleware}
	 */
	public registerApplicationMiddleware(
		configureMiddleware: (middleware: ApplicationMiddleware) => ApplicationMiddleware
	): ApplicationMiddleware {
		const Middleware = new ApplicationMiddleware();
		this.middlewares.push(configureMiddleware(Middleware));
		return Middleware;
	}

	/**
	 * Release an event to the event listeners.
	 *
	 * @public
	 * @param {ApplicationEvent} event
	 * @param {...any[]} args
	 * @returns {void}
	 */
	public emit(event: ApplicationEvent, ...args: any[]): void {
		this.getEvents().forEach((eventListener) => {
			if (eventListener.event === event || eventListener.event === ApplicationEvent.ALL)
				eventListener.handler(...args);
		});
	}

	/**
	 * Gets all the routes currently attached to the registry.
	 *
	 * @public
	 * @returns {{ route: string; method: Methods; handler: RouteHandler; middlewares: MiddlewareHandler[]; }[]}
	 */
	public getRoutes(): {
		route: string;
		method: Methods;
		handler: RouteHandler;
		middlewares: MiddlewareHandler[];
	}[] {
		return this.routes.map((routeInstance) => {
			const route = routeInstance.getApplicationRoute();
			const middlewares = this.middlewares.map((m) => m.getApplicationMiddleware().handler);

			return {
				route: (this.basePath || route.basePathOverride) + route.route,
				method: route.method,
				handler: route.handler,
				middlewares: [...middlewares, ...route.middlewares],
			};
		});
	}

	/**
	 * Gets all the routes currently attached to the registry.
	 *
	 * @public
	 * @returns {{ event: ApplicationEvent; handler: EventHandler; }[}
	 */
	public getEvents(): {
		event: ApplicationEvent;
		handler: EventHandler;
	}[] {
		return this.events.map((eventInstance) => {
			const event = eventInstance.getApplicationEvent();

			return {
				event: event.event,
				handler: event.handler,
			};
		});
	}

	/**
	 * Gets all the middlewares currently attached to the registry.
	 *
	 * @public
	 * @returns {{ middleware: string | undefined; handler: MiddlewareHandler; runsOnAllRoutes: boolean; }[]}
	 */
	public getMiddlewares(): {
		middleware: string | undefined;
		handler: MiddlewareHandler;
		runsOnAllRoutes: boolean;
	}[] {
		return this.middlewares.map((middlewaresInstance) => {
			const middleware = middlewaresInstance.getApplicationMiddleware();

			return {
				middleware: middleware.middleware,
				handler: middleware.handler,
				runsOnAllRoutes: middleware.runsOnAllRoutes,
			};
		});
	}

	/**
	 * Loads the Application's Routes.
	 *
	 * @public
	 * @async
	 * @returns {Promise<void>}
	 */
	public async loadApplicationRoutes(): Promise<void> {
		const routes = readdirSyncRecursive(
			path.join(path.dirname(url.fileURLToPath(import.meta.url)), this.paths.routes as string)
		);

		this.logger.info('ApplicationRouteRegistry: Registering routes...');
		const RouteRegisterStopwatch = new Stopwatch();

		for await (const [_index, value] of routes.entries()) {
			const RouteTimer = new Stopwatch();
			const Route = (await import(`file://${value}`)).Route as {
				new (): { registerApplicationRoutes: (registry: Registry) => ApplicationRoute };
			};

			const RegisteredRoute = new Route().registerApplicationRoutes(this);

			this.logger.info(
				`ApplicationRouteRegistry: Registered Route: ${RegisteredRoute.getApplicationRoute().route} (${RegisteredRoute.getApplicationRoute().method.toUpperCase()}) in ${RouteTimer.stop().toString()}`
			);
		}

		this.getRoutes().forEach((Route) => {
			const RouteSpecificMiddlewares = this.getMiddlewares()
				.filter((m) => m.runsOnAllRoutes === false && Route.middlewares.find((r) => r === m.handler))
				.map((m) => m.handler);

			this.application[Route.method](
				Route.route,
				...[...Route.middlewares, ...RouteSpecificMiddlewares],
				Route.handler
			);
		});

		this.logger.info(
			`ApplicationRouteRegistry: Registered ${routes.length} route(s) in ${RouteRegisterStopwatch.stop().toString()}`
		);
	}

	/**
	 * Loads the Application's Event Listeners.
	 *
	 * @public
	 * @async
	 * @returns {Promise<void>}
	 */
	public async loadApplicationEvents(): Promise<void> {
		const events = readdirSyncRecursive(
			path.join(path.dirname(url.fileURLToPath(import.meta.url)), this.paths.events as string)
		);

		this.logger.info('ApplicationEventRegistry: Registering Events...');
		const EventRegisterStopwatch = new Stopwatch();

		for await (const [_index, value] of events.entries()) {
			const EventTimer = new Stopwatch();
			const Event = (await import(`file://${value}`)).Event as {
				new (): { registerApplicationEvent: (registry: Registry) => ApplicationListener };
			};

			const RegisteredEvent = new Event().registerApplicationEvent(this);

			this.logger.info(
				`ApplicationEventRegistry: Registered Event: ${RegisteredEvent.getApplicationEvent().event} in ${EventTimer.stop().toString()}`
			);
		}

		this.logger.info(
			`ApplicationEventRegistry: Registered ${events.length} event(s) in ${EventRegisterStopwatch.stop().toString()}`
		);
	}

	/**
	 * Loads the Application's Middlewares.
	 *
	 * @public
	 * @async
	 * @returns {Promise<void>}
	 */
	public async loadApplicationMiddlewares(): Promise<void> {
		const middlewares = readdirSyncRecursive(
			path.join(path.dirname(url.fileURLToPath(import.meta.url)), this.paths.middlewares as string)
		);

		this.logger.info('ApplicationMiddlewareRegistry: Registering middlewares...');
		const MiddlewareRegisterStopwatch = new Stopwatch();

		for await (const [_index, value] of middlewares.entries()) {
			const MiddlewareTimer = new Stopwatch();
			const Middleware = (await import(`file://${value}`)).Middleware as {
				new (): { registerApplicationMiddleware: (registry: Registry) => ApplicationMiddleware };
			};

			const RegisteredMiddleware = new Middleware().registerApplicationMiddleware(this);

			this.logger.info(
				`ApplicationMiddlewareRegistry: Registered Middleware: ${RegisteredMiddleware.getApplicationMiddleware().middleware} in ${MiddlewareTimer.stop().toString()} - Runs on all Routes: ${RegisteredMiddleware.getApplicationMiddleware().runsOnAllRoutes}`
			);
		}

		this.getMiddlewares().forEach((Middleware) => {
			if (Middleware.runsOnAllRoutes) this.application.use(Middleware.handler);
		});

		this.logger.info(
			`ApplicationMiddlewareRegistry: Registered ${middlewares.length} middleware(s) in ${MiddlewareRegisterStopwatch.stop().toString()}`
		);
	}
}
