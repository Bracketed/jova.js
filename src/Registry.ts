import {
	ApplicationListener,
	ApplicationMiddleware,
	ApplicationRoute,
	type Event,
	type Middleware,
	type RegistryOptions,
	type Route,
} from './types/index';

/**
 * @name Registry
 * @description The Registry class, this allows the Jova Server to register, use and manage its content.
 *
 * @module Core
 * @private
 * @class Registry
 */
export class Registry {
	private readonly routes: Array<ApplicationRoute> = [];
	private readonly events: Array<ApplicationListener> = [];
	private readonly middlewares: Array<ApplicationMiddleware> = [];
	private readonly basePath: string;

	constructor(options: RegistryOptions) {
		this.basePath = options.basePath || '';

		Object.defineProperty(this, 'registerApplicationRoutes', {
			value: this.registerApplicationRoutes,
			writable: false,
			configurable: false,
		});

		Object.defineProperty(this, 'registerApplicationEvent', {
			value: this.registerApplicationEvent,
			writable: false,
			configurable: false,
		});

		Object.defineProperty(this, 'registerApplicationMiddleware', {
			value: this.registerApplicationMiddleware,
			writable: false,
			configurable: false,
		});

		Object.defineProperty(this, 'getRoutes', {
			value: this.getRoutes,
			writable: false,
			configurable: false,
		});

		Object.defineProperty(this, 'getEvents', {
			value: this.getEvents,
			writable: false,
			configurable: false,
		});

		Object.defineProperty(this, 'getMiddlewares', {
			value: this.getMiddlewares,
			writable: false,
			configurable: false,
		});
	}

	/**
	 * @name registerApplicationRoutes()
	 * @description
	 * Register an app route to the registry, does not work if the Jova App has already been initialised, but will work if the app has not.
	 *
	 * @public
	 * @param configureRoute
	 * @example
	 * return registry.registerApplicationRoutes((route) =>
	 *		route //
	 *			.setRouteName('')
	 *			.setMethod(Methods.GET)
	 *	);
	 * @function
	 */
	public registerApplicationRoutes(configureRoute: (route: ApplicationRoute) => ApplicationRoute): ApplicationRoute {
		const Route = new ApplicationRoute();
		this.routes.push(configureRoute(Route));
		return Route;
	}

	/**
	 * @name registerApplicationEvent()
	 * @description
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
	 * @function
	 */
	public registerApplicationEvent(
		configureEvent: (event: ApplicationListener) => ApplicationListener
	): ApplicationListener {
		const Listener = new ApplicationListener();
		this.events.push(configureEvent(Listener));
		return Listener;
	}

	/**
	 * @name registerApplicationMiddleware()
	 * @description
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
	 * @function
	 */
	public registerApplicationMiddleware(
		configureMiddleware: (middleware: ApplicationMiddleware) => ApplicationMiddleware
	): ApplicationMiddleware {
		const Middleware = new ApplicationMiddleware();
		this.middlewares.push(configureMiddleware(Middleware));
		return Middleware;
	}

	/**
	 * @name getRoutes()
	 * @description
	 * Gets all the routes currently attached to the registry.
	 *
	 * @public
	 * @function
	 */
	public getRoutes(): Array<Route> {
		return this.routes.map((routeInstance) => {
			const route = routeInstance.getApplicationRoute();
			const middlewares = this.middlewares.map((m) => m.getApplicationMiddleware().handler);

			return {
				// why did i not add this sooner...? (2.0 added)
				route: ((route.basePathOverride || this.basePath) + route.route).replace(/\\/g, '/'),
				method: route.method,
				middlewares: [...middlewares, ...route.middlewares],
			};
		});
	}

	/**
	 * @name getEvents()
	 * @description
	 * Gets all the routes currently attached to the registry.
	 *
	 * @public
	 * @function
	 */
	public getEvents(): Array<Event> {
		return this.events.map((eventInstance) => {
			const event = eventInstance.getApplicationEvent();

			return {
				event: event.event,
				handler: event.handler,
			};
		});
	}

	/**
	 * @name getMiddlewares()
	 * @description
	 * Gets all the middlewares currently attached to the registry.
	 *
	 * @public
	 * @function
	 */
	public getMiddlewares(): Array<Middleware> {
		return this.middlewares.map((middlewaresInstance) => {
			const middleware = middlewaresInstance.getApplicationMiddleware();

			return {
				middleware: middleware.middleware,
				handler: middleware.handler,
				runsOnAllRoutes: middleware.runsOnAllRoutes,
			};
		});
	}
}
