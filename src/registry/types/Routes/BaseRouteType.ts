import { Logger } from '@bracketed/logger';
import { Express } from 'express';
import {
	ApplicationRegistry,
	ApplicationRequest,
	ApplicationResponse,
	ApplicationRoute,
	HttpStatus,
} from '../../../types/index.js';
import { UtilitiesType } from '../../../utilities/index.js';

export class RouteController {
	public readonly application: Express;
	public readonly logger: Logger;
	public readonly utilities: UtilitiesType;

	constructor(application: Express, logger: Logger, utilities: UtilitiesType) {
		this.application = application;
		this.logger = logger;
		this.utilities = utilities;

		this.run = this.run.bind(this);
	}

	public run(
		_request: ApplicationRequest,
		response: ApplicationResponse
	): Promise<ApplicationResponse | void> | ApplicationResponse | void {
		return response
			.status(HttpStatus.NotImplemented)
			.json({ message: 'Route handler not implemented, server is unable to handle request.' });
	}

	public registerApplicationRoutes(_registry: ApplicationRegistry): ApplicationRoute {
		throw new Error('Config required on routes.');
	}
}
