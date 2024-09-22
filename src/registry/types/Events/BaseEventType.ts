import { Logger } from '@bracketed/logger';
import { Express } from 'express';
import { ApplicationListener, ApplicationRegistry } from '../../../types/index.js';
import { UtilitiesType } from '../../../utilities/index.js';

export class EventController {
	public readonly application: Express;
	public readonly logger: Logger;
	public readonly utilities: UtilitiesType;

	constructor(application: Express, logger: Logger, utilities: UtilitiesType) {
		this.application = application;
		this.logger = logger;
		this.utilities = utilities;
	}

	public run(..._args: any[]): Promise<any | void> | any | void {
		return;
	}

	public registerApplicationEvent(_registry: ApplicationRegistry): ApplicationListener {
		throw new Error('Config required on events.');
	}
}
