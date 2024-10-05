/**
 * Options for Middlewares.
 *
 * @interface MiddlewareOptions
 */
export interface MiddlewareOptions {
	/**
	 * The name of the middleware, use this for middlewares that are selectively used in routes.
	 */
	middlewareName?: string | undefined;
	/**
	 * Will this middleware be globally deployed?
	 */
	runsOnAllRoutes?: boolean | undefined;
}
