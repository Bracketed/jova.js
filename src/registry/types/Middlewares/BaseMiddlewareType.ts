import { Express, Locals } from '@bracketed/express';
import { Logger } from '@bracketed/logger';
import {
	ApplicationNextFunction,
	ApplicationRequest,
	ApplicationResponse,
	MiddlewareOptions,
} from '../../../types/index.js';
import { UtilitiesType } from '../../../utilities/index.js';

/**
 * The Middleware Controller, The base class for `Middleware` which is used in middleware files.
 *
 * @class MiddlewareController
 */
export class MiddlewareController {
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
	 */
	public run(
		_request: ApplicationRequest,
		_response: ApplicationResponse,
		next: ApplicationNextFunction
	): Promise<ApplicationResponse | void> | ApplicationResponse | void {
		return next();
	}

	/**
	 * Set the details for this middleware.
	 *
	 * @public
	 */
	public setApplicationMiddlewareOptions(): MiddlewareOptions {
		return {};
	}
}
