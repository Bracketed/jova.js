import { ApplicationNextFunction, ApplicationRequest, ApplicationResponse } from '../../../index.js';
import { Methods } from '../../../types/http/HTTPRequestMethods.js';
import { Registry } from '../../Registry.js';
import { MiddlewareHandler } from '../Middlewares/MiddlewareHandlerType.js';
import { RouteHandler } from './RouteHandlerType.js';

/**
 * Description placeholder
 *
 * @export
 * @class ApplicationRoute
 * @typedef {ApplicationRoute}
 */
export class ApplicationRoute {
	private registry: Registry;
	private route: string = '';
	private method: Methods = Methods.ALL;
	private handler: RouteHandler = async (_req: ApplicationRequest, _res: ApplicationResponse) => {};
	private middlewares: Array<MiddlewareHandler> = [];
	private requiredHeaders: string[] = [];
	private basePathOverride: string | null = null;

	/**
	 * Creates an instance of ApplicationRoute.
	 *
	 * @constructor
	 * @param {Registry} registry
	 */
	constructor(registry: Registry) {
		this.registry = registry;
	}

	/**
	 * Set the route name.
	 *
	 * This works with parameters too, works with anything that can go into the first perameter of a request handler.
	 *
	 * @public
	 * @param {string} route
	 * @default '' // Default route is just the root
	 * @example this.setRouteName('/api/astronauts')
	 * @returns {this}
	 */
	public setRouteName(route: string): this {
		this.route = route;
		return this;
	}

	/**
	 * Set the method of your route.
	 *
	 * @public
	 * @param {Methods} method
	 * @default Methods.ALL // Accepts any request on any method
	 * @example this.setMethod(Methods.GET)
	 * @returns {this}
	 */
	public setMethod(method: Methods): this {
		this.method = method;
		return this;
	}

	/**
	 * Set the handler for your route, this handles incoming requests for the method defined with `setMethod`.
	 *
	 * @public
	 * @param {RouteHandler} handler
	 * @default // Default is an empty handler instance.
	 * @example this.setHandler(this.run)
	 * @returns {this}
	 */
	public setHandler(handler: RouteHandler): this {
		this.handler = handler;
		return this;
	}

	/**
	 * Set the middlewares for your route.
	 *
	 * Includes all globally running middlewares by default.
	 *
	 * Define these middlewares using your `middlewares` dir.
	 *
	 * @public
	 * @param {Array<string>} middlewares
	 * @default [] // No middlewares by default or no middlewares with middlewares running on all routes.
	 * @example this.setRouteMiddlewares(['authorisationMiddleware'])
	 * @returns {this}
	 */
	public setRouteMiddlewares(middlewares: Array<string>): this {
		const Middlewares = this.registry.getMiddlewares();
		const Mapped = Middlewares.map((middleware) => {
			if (
				middlewares.find((middlewareTitle) => middlewareTitle === middleware.middleware) &&
				!middleware.runsOnAllRoutes
			)
				return middleware.handler;

			return;
		}).filter((middleware) => middleware !== undefined);

		this.middlewares = Mapped;
		return this;
	}

	/**
	 * Set required headers for your route, this enables a route-specific middleware for managing required headers.
	 *
	 * @public
	 * @param {string[]} headers
	 * @default [] // No required headers.
	 * @example this.setRequiredHeaders(['Authorisation', 'Cookie'])
	 * @returns {this}
	 */
	public setRequiredHeaders(headers: string[]): this {
		this.requiredHeaders = headers;
		return this;
	}

	/**
	 * Enable the override for the `basePath` option in the `JovaServer` instance config.
	 *
	 * @public
	 * @param {string} basePath
	 * @default null // Use default basePath of '', also means disabled.
	 * @example this.useBasePathOverride('/api/iss')
	 * @returns {this}
	 */
	public useBasePathOverride(basePath: string): this {
		this.basePathOverride = basePath;
		return this;
	}

	private checkHeadersMiddleware: MiddlewareHandler = (
		req: ApplicationRequest,
		res: ApplicationResponse,
		next: ApplicationNextFunction
	): void | ApplicationResponse<any, Record<string, any>> => {
		const missingHeaders = this.requiredHeaders.filter((header) => !req.headers[header.toLowerCase()]);
		if (!(missingHeaders.length === 0)) {
			return res.status(400).json({ message: `Missing headers: ${missingHeaders.join(', ')}` });
		}
		return next();
	};

	/**
	 * Gets the Routes's Details.
	 *
	 * @public
	 * @returns {{ route: string; method: Methods; handler: RouteHandler; middlewares: {}; basePathOverride: string; }}
	 */
	public getApplicationRoute(): {
		route: string;
		method: Methods;
		handler: RouteHandler;
		middlewares: MiddlewareHandler[];
		basePathOverride: string | null;
	} {
		return {
			route: this.route,
			method: this.method,
			handler: this.handler,
			middlewares: [...this.middlewares, this.checkHeadersMiddleware],
			basePathOverride: this.basePathOverride,
		};
	}
}
