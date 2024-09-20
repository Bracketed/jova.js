import {
	ApplicationEvent,
	ApplicationListener,
	ApplicationMiddleware,
	ApplicationRoute,
	EventHandler,
	Methods,
	MiddlewareHandler,
	RouteHandler,
} from '../types/index.js';

interface RegistryOptions {
	basePath?: string;
}

/**
 * The Registry class, this allows the Jova Server to register, use and manage its content.
 *
 
 * @class Registry
 */
export class Registry {
	private readonly routes: ApplicationRoute[] = [];
	private readonly events: ApplicationListener[] = [];
	private readonly middlewares: ApplicationMiddleware[] = [];
	private readonly basePath: string;

	/**
	 * Creates Registry a instance.
	 *
	 * @param options
	 */
	constructor(options: RegistryOptions) {
		this.basePath = options.basePath || '';
	}

	/**
	 * Register an app route to the registry, does not work if the Jova App has already been initialised, but will work if the app has not.
	 *
	 * @public
	 * @param configureRoute
	 * @example
	 * return registry.registerApplicationRoute((route) =>
	 *		route //
	 *			.setRouteName('')
	 *			.setMethod(Methods.GET)
	 *			.setHandler(this.run)
	 *	);
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
	 * @param configureEvent
	 * @example
	 * 	return registry.registerApplicationEvent((event) =>
	 *		event //
	 *			.setEventType(ApplicationEvent.READY)
	 *			.setHandler(this.run)
	 *	);
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
	 * @param configureMiddleware
	 * @example
	 * 	return registry.registerApplicationMiddleware((middleware) =>
	 *		middleware //
	 *			.setMiddlewareName('middleware')
	 *			.setHandler(this.run)
	 *			.runOnAllRoutes(false)
	 *	);
	 */
	public registerApplicationMiddleware(
		configureMiddleware: (middleware: ApplicationMiddleware) => ApplicationMiddleware
	): ApplicationMiddleware {
		const Middleware = new ApplicationMiddleware();
		this.middlewares.push(configureMiddleware(Middleware));
		return Middleware;
	}

	/**
	 * Gets all the routes currently attached to the registry.
	 *
	 * @public
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
				route: (route.basePathOverride || this.basePath) + route.route,
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
	 * Clear all registries.
	 *
	 * @public
	 */
	public flush(): void {
		this.middlewares.length = 0;
		this.routes.length = 0;
		this.events.length = 0;
	}
}
