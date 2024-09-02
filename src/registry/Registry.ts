import { AppRoute } from './AppRouteType.js';
import { Middleware } from './MiddlewareType.js';

interface RegistryOptions {
	basePath?: string;
	middlewares?: Middleware[];
}

export class Registry {
	private routes: AppRoute[] = [];
	private defaultMiddlewares: Middleware[] = [];
	private basePath: string;

	constructor(options: RegistryOptions = {}) {
		this.basePath = options.basePath || '';
		this.defaultMiddlewares = options.middlewares || [];
	}

	setDefaultMiddlewares(middlewares: Middleware[]): void {
		this.defaultMiddlewares = middlewares;
	}

	setBasePath(basePath: string): void {
		this.basePath = basePath;
	}

	registerAppRoute(configureRoute: (route: AppRoute) => AppRoute) {
		const Route = new AppRoute();
		this.routes.push(configureRoute(Route));
		return Route;
	}

	getRoutes() {
		return this.routes.map((routeInstance) => {
			const { route: routePath, method, handler, middlewares, basePathOverride } = routeInstance.getRoute();

			return {
				route: (this.basePath || basePathOverride) + routePath,
				method,
				handler,
				middlewares: [...this.defaultMiddlewares, ...middlewares],
			};
		});
	}
}
