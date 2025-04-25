import type {
	ApplicationNextFunction,
	ApplicationRequest,
	ApplicationRequestHandler,
	ApplicationResponse,
} from '../../index';

/**
 * @name ApplicationMiddleware
 * @description An Application Middleware.
 * @module Types
 * @class AppMiddleware
 */
export class ApplicationMiddleware {
	private middleware: string | undefined;
	private handler: ApplicationRequestHandler = async (
		_req: ApplicationRequest,
		_res: ApplicationResponse,
		_next?: ApplicationNextFunction
	) => {};
	private runsOnAllRoutes: boolean = false;

	constructor() {
		Object.defineProperty(this, 'setMiddlewareName', {
			value: this.setMiddlewareName,
			writable: false,
			configurable: false,
		});

		Object.defineProperty(this, 'setName', {
			value: this.setName,
			writable: false,
			configurable: false,
		});

		Object.defineProperty(this, 'setHandler', {
			value: this.setHandler,
			writable: false,
			configurable: false,
		});

		Object.defineProperty(this, 'runOnAllRoutes', {
			value: this.runOnAllRoutes,
			writable: false,
			configurable: false,
		});

		Object.defineProperty(this, 'getApplicationMiddleware', {
			value: this.getApplicationMiddleware,
			writable: false,
			configurable: false,
		});
	}

	/**
	 * @name setMiddlewareName()
	 * @deprecated Use `middleware.setName()` instead.
	 */
	public setMiddlewareName(name: string | undefined): Omit<this, 'setName' | 'setMiddlewareName'> {
		if (name === '' || !name) return this;
		this.middleware = name;
		return this as Omit<this, 'setName' | 'setMiddlewareName'>;
	}

	/**
	 * @name setName()
	 * @description Set the name of your middleware, this is used to enable the middleware in certain routes.
	 *
	 * @public
	 * @param name
	 * @default undefined // If no name is set or is set to "", runsOnAllRoutes will default to true and make it a global middleware.
	 * @example this.setName('authorisationMiddleware')
	 * @function
	 */
	public setName(name: string | undefined): Omit<this, 'setName' | 'setMiddlewareName'> {
		if (name === '' || !name) return this;
		this.middleware = name;
		return this as Omit<this, 'setName' | 'setMiddlewareName'>;
	}

	/**
	 * @name setHandler()
	 * @description Set the callback function for your middleware.
	 *
	 * @public
	 * @param handler
	 * @default // Blank Handler
	 * @example this.setHandler(this.run)
	 * @function
	 */
	public setHandler(handler: ApplicationRequestHandler): this {
		this.handler = handler;
		return this;
	}

	/**
	 * @name runOnAllRoutes()
	 * @description
	 * Determine if this middleware is a globally running middleware across your application, or local to any route that specifically uses it.
	 *
	 * @public
	 * @param active
	 * @default false // Updates to true if setMiddlewareName is unset.
	 * @example this.runOnAllRoutes(false)
	 * @function
	 */
	public runOnAllRoutes(active: boolean): this {
		this.runsOnAllRoutes = active;
		return this;
	}

	/**
	 * @name getApplicationMiddleware()
	 * @description Gets the Middleware's Details.
	 * @function
	 * @public
	 */
	public getApplicationMiddleware(): {
		middleware: string | undefined;
		handler: ApplicationRequestHandler;
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
