import {
	ApplicationNextFunction,
	ApplicationRequest,
	ApplicationResponse,
	MiddlewareHandler,
} from '../../../types/index.js';

/**
 * An Application Middleware.
 *
 * @class AppMiddleware
 */
export class ApplicationMiddleware {
	private middleware: string | undefined;
	private handler: MiddlewareHandler = async (
		_req: ApplicationRequest,
		_res: ApplicationResponse,
		_next: ApplicationNextFunction
	) => {};
	private runsOnAllRoutes: boolean = false;

	/**
	 * Set the name of your middleware, this is used to enable the middleware in certain routes.
	 *
	 * @public
	 * @param name
	 * @default undefined // If no name is set or is set to "", runsOnAllRoutes will default to true and make it a global middleware.
	 * @example this.setMiddlewareName('authorisationMiddleware')
	 */
	public setMiddlewareName(name: string | undefined): this {
		if (name === '' || !name) return this;
		this.middleware = name;
		return this;
	}

	/**
	 * Set the callback function for your middleware.
	 *
	 * @public
	 * @param handler
	 * @default // Blank Handler
	 * @example this.setHandler(this.run)
	 */
	public setHandler(handler: MiddlewareHandler): this {
		this.handler = handler;
		return this;
	}

	/**
	 * Determine if this middleware is a globally running middleware across your application, or local to any route that specifically uses it.
	 *
	 * @public
	 * @param active
	 * @default false // Updates to true if setMiddlewareName is unset.
	 * @example this.runOnAllRoutes(false)
	 */
	public runOnAllRoutes(active: boolean): this {
		this.runsOnAllRoutes = active;
		return this;
	}

	/**
	 * Gets the Middleware's Details.
	 *
	 * @public
	 */
	public getApplicationMiddleware(): {
		middleware: string | undefined;
		handler: MiddlewareHandler;
		runsOnAllRoutes: boolean;
	} {
		let runsOnAllRoutes = this.runsOnAllRoutes;
		if (!this.middleware) runsOnAllRoutes = true;

		return {
			middleware: this.middleware,
			handler: this.handler,
			runsOnAllRoutes: runsOnAllRoutes,
		};
	}
}
