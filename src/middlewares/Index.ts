import * as Express from 'express';
import { Registry } from '../registry/Registry.js';
import { AppMiddleware as ApplicationMiddleware } from '../registry/types/Middlewares/AppMiddlewareType.js';

export class Middleware {
	public registerApplicationMiddlewares(registry: Registry): ApplicationMiddleware {
		return registry.registerApplicationMiddleware((middleware) =>
			middleware //
				.setMiddlewareName('middleware')
				.setHandler(this.run)
				.runOnAllRoutes(false)
		);
	}

	public async run(
		_request: Express.Request,
		_response: Express.Response,
		next: Express.NextFunction
	): Promise<Express.Response | void> {
		return next();
	}
}
