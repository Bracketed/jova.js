import {
	ApplicationMiddleware,
	ApplicationNextFunction,
	ApplicationRegistry,
	ApplicationRequest,
	ApplicationResponse,
	MiddlewareController,
} from '../../types/index.js';

export class Middleware extends MiddlewareController {
	public override registerApplicationMiddleware(registry: ApplicationRegistry): ApplicationMiddleware {
		return registry.registerApplicationMiddleware((middleware) =>
			middleware //
				.setMiddlewareName('middleware')
				.setHandler(this.run)
				.runOnAllRoutes(false)
		);
	}

	public override async run(
		_request: ApplicationRequest,
		_response: ApplicationResponse,
		next: ApplicationNextFunction
	): Promise<ApplicationResponse | void> {
		this.logger.info('Connected to middleware!');
		return next();
	}
}
