import { container } from '../../../shared';
import {
	Methods,
	type ApplicationNextFunction,
	type ApplicationPathParameters,
	type ApplicationRegistry,
	type ApplicationRequest,
	type ApplicationRequestHandler,
	type ApplicationResponse,
} from '../../index';
import type { IRoute } from './IRoute';

/**
 * @name ApplicationRoute
 * @description An Application Route.
 * @module Types
 * @class ApplicationRoute
 */
export class ApplicationRoute {
	private registry: ApplicationRegistry = container.registry!;
	private route: ApplicationPathParameters | undefined = undefined;
	private method: Methods | 'options' | 'head' | 'put' | 'all' | 'delete' | 'post' | 'get' = Methods.ALL;
	private middlewares: Array<ApplicationRequestHandler> = [];
	private requiredHeaders: Array<string> = [];
	private basePathOverride: string | null = null;
	private parameters: Array<string> = [];

	constructor() {
		Object.defineProperty(this, 'setRouteName', {
			value: this.setRouteName,
			writable: false,
			configurable: false,
		});

		Object.defineProperty(this, 'setRouteParameters', {
			value: this.setRouteParameters,
			writable: false,
			configurable: false,
		});

		Object.defineProperty(this, 'addParameter', {
			value: this.addParameter,
			writable: false,
			configurable: false,
		});

		Object.defineProperty(this, 'setMethod', {
			value: this.setMethod,
			writable: false,
			configurable: false,
		});

		Object.defineProperty(this, 'setRouteMiddlewares', {
			value: this.setRouteMiddlewares,
			writable: false,
			configurable: false,
		});

		Object.defineProperty(this, 'setRequiredHeaders', {
			value: this.setRequiredHeaders,
			writable: false,
			configurable: false,
		});

		Object.defineProperty(this, 'useBasePathOverride', {
			value: this.useBasePathOverride,
			writable: false,
			configurable: false,
		});

		Object.defineProperty(this, 'checkHeadersMiddleware', {
			value: this.checkHeadersMiddleware,
			writable: false,
			configurable: false,
		});

		Object.defineProperty(this, 'getApplicationRoute', {
			value: this.getApplicationRoute,
			writable: false,
			configurable: false,
		});
	}

	/**
	 * @name setRouteName()
	 * @description
	 * Set the route name.
	 *
	 * This works with parameters too, works with anything that can go into the first perameter of a request handler.
	 *
	 * @public
	 * @param route
	 * @default // Default route is just the file name
	 * @example this.setRouteName('/api/astronauts')
	 * @function
	 */
	public setRouteName(route: ApplicationPathParameters): this {
		this.route = route;
		return this;
	}

	/**
	 * @name setRouteParameters()
	 * @description
	 * Set the route parameters.
	 *
	 * Adds parameters to a route name. These are parsed into the route name as they would be used in express, e.g:
	 *
	 * `route/:param1/:param2` from `['param1', 'param2']`
	 *
	 * @public
	 * @param params
	 * @default []
	 * @example this.setRouteParameters(['type', 'somethingelse', 'another thing'])
	 * @function
	 */
	public setRouteParameters(params: Array<string>): this {
		this.parameters = params;
		return this;
	}

	/**
	 * @name addParameter()
	 * @description
	 * Adds a route param to the current param set, this can be cleared/reset by `route.setRouteParameters()`.
	 *
	 * @public
	 * @param params
	 * @default []
	 * @example this.addParameter('type')
	 * @function
	 */
	public addParameter(param: string): this {
		this.parameters.push(param);
		return this;
	}

	/**
	 * @name setMethod()
	 * @description Set the method of your route.
	 *
	 * @public
	 * @param method
	 * @default Methods.ALL // Accepts any request on any method
	 * @example this.setMethod(Methods.GET)
	 * @function
	 */
	public setMethod(method: Methods | 'options' | 'head' | 'put' | 'all' | 'delete' | 'post' | 'get'): this {
		this.method = method;
		return this;
	}

	/**
	 * @name setRouteMiddlewares()
	 * @description
	 * Set the middlewares for your route.
	 *
	 * Includes all globally running middlewares by default.
	 *
	 * Define these middlewares using your `middlewares` dir.
	 *
	 * @public
	 * @param middlewares
	 * @default [] // No middlewares by default or no middlewares with middlewares running on all routes.
	 * @example this.setRouteMiddlewares(['authorisationMiddleware'])
	 * @function
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
	 * @name setRequiredHeaders()
	 * @description
	 * Set required headers for your route, this enables a route-specific middleware for managing required headers.
	 *
	 * @public
	 * @param headers
	 * @default [] // No required headers.
	 * @example this.setRequiredHeaders(['Authorisation', 'Cookie'])
	 * @function
	 */
	public setRequiredHeaders(headers: string[]): this {
		this.requiredHeaders = headers;
		return this;
	}

	/**
	 * @name useBasePathOverride()
	 * @description
	 * Enable the override for the `basePath` option in the `JovaServer` instance config.
	 *
	 * @public
	 * @param basePath
	 * @default null // Use default basePath of '', also means disabled.
	 * @example this.useBasePathOverride('/api/iss')
	 * @function
	 */
	public useBasePathOverride(basePath: string): this {
		this.basePathOverride = basePath;
		return this;
	}

	private checkHeadersMiddleware: ApplicationRequestHandler = (
		req: ApplicationRequest,
		res: ApplicationResponse,
		next?: ApplicationNextFunction
	): void | any | Promise<void | any> => {
		const missingHeaders = this.requiredHeaders.filter((header) => !req.headers[header.toLowerCase()]);
		if (!(missingHeaders.length === 0)) {
			return res.status(400).json({ message: `Missing headers: ${missingHeaders.join(', ')}` });
		}
		return next!();
	};

	/**
	 * @name getApplicationRoute()
	 * @description
	 * Gets the Routes's Details.
	 *
	 * @public
	 * @function
	 */
	public getApplicationRoute(): IRoute {
		return {
			route: this.route,
			method: this.method,
			middlewares: [...this.middlewares, this.checkHeadersMiddleware],
			basePathOverride: this.basePathOverride,
			params: this.parameters,
		};
	}
}
