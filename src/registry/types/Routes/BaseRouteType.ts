import { Express, Locals } from '@bracketed/express';
import { Logger } from '@bracketed/logger';
import {
	ApplicationRegistry,
	ApplicationRequest,
	ApplicationResponse,
	ApplicationRoute,
	HttpStatus,
} from '../../../types/index.js';
import { UtilitiesType } from '../../../utilities/index.js';

/**
 * The Route Controller, The base class for `Route` which is used in routing files.
 *
 * @class RouteController
 */
export class RouteController {
	/**
	 * The Express Application at the origin of the Jova Server.
	 */
	protected readonly application: Express;
	/**
	 * The Logger at the origin of the Jova Server.
	 */
	protected readonly logger: Logger;
	/**
	 * Utilities for routes.
	 */
	protected readonly utilities: UtilitiesType;
	/**
	 * The Locals defined in JovaServer.
	 */
	protected readonly container: Record<string, any> & Locals;

	constructor(
		application: Express,
		container: Record<string, any> & Locals,
		logger: Logger,
		utilities: UtilitiesType
	) {
		this.application = application;
		this.logger = logger;
		this.utilities = utilities;
		this.container = container;

		this.run = this.run.bind(this);
	}

	/**
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
	 */
	public run(
		_request: ApplicationRequest,
		response: ApplicationResponse
	): Promise<ApplicationResponse | void> | ApplicationResponse | void {
		return response
			.status(HttpStatus.NotImplemented)
			.json({ message: 'Route handler not implemented, server is unable to handle request.' });
	}

	/**
	 * The register function for this route, configure your route in this.
	 *
	 * There are __NO DEFAULTS__ for this function, if nothing is set, the register function when the Jova server is started will fail.
	 *
	 * @public
	 * @param registry
	 */
	public registerApplicationRoutes(_registry: ApplicationRegistry): ApplicationRoute {
		throw new Error('Config required on routes.');
	}
}
