import {
	ApplicationNextFunction,
	ApplicationRequest,
	ApplicationResponse,
	MiddlewareController,
	MiddlewareOptions,
} from '@bracketed/jova.js/types';

import { ApplyHandlerOptions } from '@bracketed/jova.js/decorators';
import { Handlers } from '@bracketed/jova.js/utilities';

@ApplyHandlerOptions<Handlers.Options>({
	type: Handlers.Type.MIDDLEWARE,
	enabled: true,
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
		next: ApplicationNextFunction
	): Promise<ApplicationResponse | void> {
		this.logger.info('Example Middleware: successfully parsed through middleware!');
		return next();
	}
}
