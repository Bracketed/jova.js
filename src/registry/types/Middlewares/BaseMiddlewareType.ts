import { Logger } from '@bracketed/logger';
import { Express } from 'express';
import {
	ApplicationMiddleware,
	ApplicationNextFunction,
	ApplicationRegistry,
	ApplicationRequest,
	ApplicationResponse,
} from '../../../types/index.js';
import { UtilitiesType } from '../../../utilities/index.js';

export class MiddlewareController {
	public readonly application: Express;
	public readonly logger: Logger;
	public readonly utilities: UtilitiesType;

	constructor(application: Express, logger: Logger, utilities: UtilitiesType) {
		this.application = application;
		this.logger = logger;
		this.utilities = utilities;
	}

	public run(
		_request: ApplicationRequest,
		_response: ApplicationResponse,
		next: ApplicationNextFunction
	): Promise<ApplicationResponse | void> | ApplicationResponse | void {
		return next();
	}

	public registerApplicationMiddleware(_registry: ApplicationRegistry): ApplicationMiddleware {
		throw new Error('Config required on middlewares.');
	}
}
