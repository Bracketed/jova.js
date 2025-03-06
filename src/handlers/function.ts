import type { Express } from '@bracketed/express';
import { Logger } from '@bracketed/logger';
import type { Registry } from '../Registry';
import type { ApplicationStats, LoggerOptions } from '../types/index';

export class HandlerFunction {
	protected readonly application: Express;
	protected readonly logger: Logger;
	protected readonly registry: Registry;

	constructor(application: Express, registry: Registry, logger: LoggerOptions) {
		this.application = application;
		this.logger = new Logger({ ...logger, prefix: 'ApplicationRegistry' });
		this.registry = registry;

		this.run = this.run.bind(this);
	}

	public async run(..._args: any[]): Promise<ApplicationStats | undefined> {
		return undefined;
	}
}
