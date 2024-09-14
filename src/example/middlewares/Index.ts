import {
	ApplicationMiddleware,
	ApplicationNextFunction,
	ApplicationRegistry,
	ApplicationRequest,
	ApplicationResponse,
} from '../../index.js';

export class Middleware {
	public registerApplicationMiddleware(registry: ApplicationRegistry): ApplicationMiddleware {
		return registry.registerApplicationMiddleware((middleware) =>
			middleware //
				.setMiddlewareName('middleware')
				.setHandler(this.run)
				.runOnAllRoutes(false)
		);
	}

	public async run(
		_request: ApplicationRequest,
		_response: ApplicationResponse,
		next: ApplicationNextFunction
	): Promise<ApplicationResponse | void> {
		return next();
	}
}
