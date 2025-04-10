/**
 * @name MiddlewareOptions
 * @description Options for Middlewares.
 * @module Types
 * @interface MiddlewareOptions
 */
export interface MiddlewareOptions {
	/**
	 * @name middlewareName
	 * @description The name of the middleware, use this for middlewares that are selectively used in routes.
	 * @type string | undefined
	 */
	middlewareName?: string | undefined;
	/**
	 * @name runsOnAllRoutes
	 * @description Will this middleware be globally deployed?
	 * @type boolean | undefined
	 */
	runsOnAllRoutes?: boolean | undefined;
}
