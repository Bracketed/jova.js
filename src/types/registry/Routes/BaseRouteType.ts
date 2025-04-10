import { Logger } from '@bracketed/logger';
import { HandlerType } from '../../../decorators/index';
import { container, type Container } from '../../../shared/index';
import {
	type ApplicationRegistry,
	type ApplicationRequest,
	type ApplicationResponse,
	ApplicationRoute,
	HttpStatus,
	type LoggerOptions,
} from '../../index';

/**
 * @name RouteController
 * @description The Route Controller, The base class for `Route` which is used in routing files.
 * @module Types
 * @class RouteController
 */
export class RouteController {
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
	 * **Prefixed automatically with `ApplicationRoute`.**
	 * @constant
	 * @readonly
	 */
	protected readonly logger: Logger;
	/**
	 * @name type
	 * @description
	 * The type for the `RouteController` class, this is for when processing controllers marked with a `AUTO` type in deployment.
	 * @constant
	 * @readonly
	 * @public
	 * @type string
	 */
	public readonly type: HandlerType = HandlerType.ROUTE;

	constructor(logger: LoggerOptions) {
		this.logger = new Logger({ ...logger, prefix: 'ApplicationRoute' });

		this.run = this.run.bind(this);
	}

	/**
	 * @name run()
	 * @description
	 * The run function for this route, this function cannot be redefined to use another name, but only the content within the function.
	 *
	 * Placeholder run function if nothing is defined:
	 *
	 * @example
	 * return response
	 * 		.status(HttpStatus.NotImplemented)
	 * 		.json({ message: 'Route handler not implemented, server is unable to handle request.' });
	 *
	 * @public
	 * @param request
	 * @param response
	 * @function
	 */
	public run(
		_request: ApplicationRequest,
		response: ApplicationResponse
	): Promise<ApplicationResponse | void | any> | ApplicationResponse | void | any {
		return response
			.status(HttpStatus.NotImplemented)
			.json({ message: 'Route handler not implemented, server is unable to handle request.' });
	}

	/**
	 * @name registerApplicationRoutes()
	 * @description
	 * The register function for this route, configure your route in this.
	 *
	 * There are __NO DEFAULTS__ for this function, if nothing is set, the register function when the Jova server is started will fail.
	 *
	 * @public
	 * @param registry
	 * @function
	 */
	public registerApplicationRoutes(_registry: ApplicationRegistry): ApplicationRoute {
		throw new Error('Config required on routes.');
	}
}
