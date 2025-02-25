import {
	ApplicationNextFunction,
	ApplicationRequest,
	ApplicationResponse,
	MiddlewareController,
	MiddlewareOptions,
} from '@bracketed/jova.js/types';

export class Middleware extends MiddlewareController {
	public override setApplicationMiddlewareOptions(): MiddlewareOptions {
		return {
			middlewareName: 'middleware',
			runsOnAllRoutes: true,
		};
	}

	public override async run(
		_request: ApplicationRequest,
		_response: ApplicationResponse,
		next: ApplicationNextFunction
	): Promise<ApplicationResponse | void> {
		this.logger.info('Example Middleware: successfully parsed through middleware!');
		return next();
	}
}
