import { Logger } from '@bracketed/logger';
import { HandlerType } from '../../../decorators/index';
import { type Container } from '../../../shared/index';
import type {
	ApplicationNextFunction,
	ApplicationRequest,
	ApplicationResponse,
	LoggerOptions,
	MiddlewareOptions,
} from '../../index';
import { container } from './../../../shared/Container';

/**
 * @name MiddlewareController
 * @description The Middleware Controller, The base class for `Middleware` which is used in middleware files.
 * @module Types
 * @class MiddlewareController
 */
export class MiddlewareController {
	/**
	 * @name container
	 * @description The process container.
	 * @constant
	 * @readonly
	 */
	protected container: Container = container;
	/**
	 * @name Logger
	 * @description
	 * The Logger at the origin of the Jova Server.
	 *
	 * **Prefixed automatically with `ApplicationEvent`.**
	 * @constant
	 * @readonly
	 */
	protected readonly logger: Logger;
	/**
	 * @name type
	 * @description
	 * The type for the `MiddlewareController` class, this is for when processing controllers marked with a `AUTO` type in deployment.
	 * @constant
	 * @readonly
	 * @public
	 * @type string
	 */
	public readonly type: HandlerType = HandlerType.MIDDLEWARE;

	constructor(logger: LoggerOptions) {
		this.logger = new Logger({ ...logger, prefix: 'ApplicationMiddleware' });

		this.run = this.run.bind(this);
	}

	/**
	 * @name run()
	 * @description
	 * The run function for this middleware, this function cannot be redefined to use another name, but only the content within the function.
	 *
	 * Placeholder run function if nothing is defined:
	 *
	 * @example
	 * return next();
	 *
	 * @public
	 * @param request
	 * @param response
	 * @param next
	 * @function
	 */
	public run(
		_request: ApplicationRequest,
		_response: ApplicationResponse,
		next?: ApplicationNextFunction
	): Promise<ApplicationResponse | void | any> | ApplicationResponse | void | any {
		return next!();
	}

	/**
	 * @name setApplicationMiddlewareOptions()
	 * @description Set the details for this middleware.
	 * @public
	 * @function
	 */
	public setApplicationMiddlewareOptions(): MiddlewareOptions {
		return {};
	}
}
