import { ApplicationNextFunction, ApplicationRequest, ApplicationResponse } from '../../../index.js';
import { MiddlewareHandler } from './MiddlewareHandlerType.js';

/**
 * An Application Middleware.
 *
 * @export
 * @class AppMiddleware
 * @typedef {AppMiddleware}
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
	 * @param {string} name
	 * @default undefined // If no name is set or is set to "", runsOnAllRoutes will default to true and make it a global middleware.
	 * @example this.setMiddlewareName('authorisationMiddleware')
	 * @returns {this}
	 */
	public setMiddlewareName(name: string): this {
		if (name === '') return this;
		this.middleware = name;
		return this;
	}

	/**
	 * Set the callback function for your middleware.
	 *
	 * @public
	 * @param {MiddlewareHandler} handler
	 * @default // Blank Handler
	 * @example this.setHandler(this.run)
	 * @returns {this}
	 */
	public setHandler(handler: MiddlewareHandler): this {
		this.handler = handler;
		return this;
	}

	/**
	 * Determine if this middleware is a globally running middleware across your application, or local to any route that specifically uses it.
	 *
	 * @public
	 * @param {boolean} active
	 * @default false // Updates to true if setMiddlewareName is unset.
	 * @example this.runOnAllRoutes(false)
	 * @returns {this}
	 */
	public runOnAllRoutes(active: boolean): this {
		this.runsOnAllRoutes = active;
		return this;
	}

	/**
	 * Gets the Middleware's Details.
	 *
	 * @public
	 * @returns {{ middleware: string; handler: MiddlewareHandler; runsOnAllRoutes: boolean; }}
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
