import * as Express from 'express';
import { MiddlewareHandler } from './MiddlewareHandlerType.js';

export class AppMiddleware {
	private middleware: string | undefined;
	private handler: MiddlewareHandler = async (
		_req: Express.Request,
		_res: Express.Response,
		_next: Express.NextFunction
	) => {};
	private runsOnAllRoutes: boolean = false;

	public setMiddlewareName(name: string): this {
		this.middleware = name;
		return this;
	}

	public setHandler(handler: MiddlewareHandler): this {
		this.handler = handler;
		return this;
	}

	public runOnAllRoutes(active: boolean): this {
		this.runsOnAllRoutes = active;
		return this;
	}

	public getApplicationMiddleware() {
		let runsOnAllRoutes = this.runsOnAllRoutes;
		if (!this.middleware) runsOnAllRoutes = true;

		return {
			middleware: this.middleware,
			handler: this.handler,
			runsOnAllRoutes: runsOnAllRoutes,
		};
	}
}
