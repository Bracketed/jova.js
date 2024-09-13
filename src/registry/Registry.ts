import { JovaEvent } from 'src/types/JovaEvents.js';
import { AppEvent } from './types/Events/AppEventType.js';
import { AppMiddleware } from './types/Middlewares/AppMiddlewareType.js';
import { AppRoute } from './types/Routes/AppRouteType.js';

interface RegistryOptions {
	basePath?: string;
}

export class Registry {
	private readonly routes: AppRoute[] = [];
	private readonly events: AppEvent[] = [];
	private readonly middlewares: AppMiddleware[] = [];
	private readonly basePath: string;

	constructor(options: RegistryOptions = {}) {
		this.basePath = options.basePath || '';
	}

	public registerApplicationRoute(configureRoute: (route: AppRoute) => AppRoute) {
		const Route = new AppRoute(this);
		this.routes.push(configureRoute(Route));
		return Route;
	}

	public registerApplicationEvent(configureEvent: (route: AppEvent) => AppEvent) {
		const Listener = new AppEvent();
		this.events.push(configureEvent(Listener));
		return Listener;
	}

	public registerApplicationMiddleware(configureMiddleware: (middleware: AppMiddleware) => AppMiddleware) {
		const Middleware = new AppMiddleware();
		this.middlewares.push(configureMiddleware(Middleware));
		return Middleware;
	}

	public emit(event: JovaEvent, ...args: any[]) {
		this.events.forEach((eventListener) => {
			const listenerConfig = eventListener.getApplicationEvent();
			if (listenerConfig) if (listenerConfig.event === event) listenerConfig.handler(...args);
		});
	}

	public getRoutes() {
		return this.routes.map((routeInstance) => {
			const route = routeInstance.getApplicationRoute();

			return {
				route: (this.basePath || route.basePathOverride) + route.route,
				method: route.method,
				handler: route.handler,
				middlewares: [...this.middlewares, ...route.middlewares],
			};
		});
	}

	public getEvents() {
		const EventsWithTypes = this.events.filter((e) => e.getApplicationEvent() !== null);
		return EventsWithTypes.map((eventInstance) => {
			const event = eventInstance.getApplicationEvent();

			return {
				event: event!.event,
				once: event!.once,
				handler: event!.handler,
			};
		});
	}

	public getMiddlewares() {
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
