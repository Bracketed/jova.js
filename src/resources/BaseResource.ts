import { Logger } from '@bracketed/logger';
import type { Express } from 'express';
import type { Registry } from '../Registry';
import { container } from '../shared/index';
import type { LoggerOptions } from '../types/index';

export interface BaseResourceOptions {
	logger?: LoggerOptions;
}

export class BaseResourceLoader {
	protected readonly application?: Express = container.express;
	protected readonly logger: Logger;
	protected readonly registry?: Registry = container.registry;

	constructor(options: BaseResourceOptions = {}) {
		this.logger = new Logger({ ...options.logger, prefix: 'ApplicationResourceRegistry' });

		this.load = this.load.bind(this);
	}

	public async load(..._args: any[]): Promise<void | undefined> {
		this.logger.warn('Unimplemented resource ran.');
		return undefined;
	}
}
