import {
	ApplicationNextFunction,
	ApplicationRequest,
	ApplicationResponse,
	MiddlewareController,
	MiddlewareOptions,
} from '@bracketed/jova.js/types';

import { ApplyHandlerOptions, HandlerOptions, HandlerType } from '@bracketed/jova.js/decorators';

@ApplyHandlerOptions<HandlerOptions>({
	type: HandlerType.MIDDLEWARE,
	enabled: true,
	handler: Middleware,
})
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
		next?: ApplicationNextFunction
	): Promise<ApplicationResponse | void> {
		this.logger.info('Example Middleware: successfully parsed through middleware!');
		return next!();
	}
}
