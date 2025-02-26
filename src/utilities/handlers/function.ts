import type { Express, Locals } from '@bracketed/express';
import { Logger } from '@bracketed/logger';
import type { Registry } from '../../Registry';
import type { ApplicationStats } from '../../types/index';

export class HandlerFunction {
	protected readonly application: Express;
	protected readonly logger: Logger;
	protected readonly container: Record<string, any> & Locals;
	protected readonly registry: Registry;

	constructor(application: Express, registry: Registry, container: Record<string, any> & Locals, logger: Logger) {
		this.application = application;
		this.logger = logger;
		this.container = container;
		this.registry = registry;

		this.run = this.run.bind(this);
	}

	public async run(..._args: any[]): Promise<ApplicationStats | undefined> {
		return undefined;
	}
}
