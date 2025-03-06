import type { Express } from '@bracketed/express';
import { Logger } from '@bracketed/logger';
import type { Registry } from '../Registry';
import type { LoggerOptions } from '../types/index';

export interface BaseResourceOptions {
	application?: Express;
	registry?: Registry;
	logger?: LoggerOptions;
}

export class BaseResourceLoader {
	protected readonly application?: Express;
	protected readonly logger: Logger;
	protected readonly registry?: Registry;

	constructor(options: BaseResourceOptions = {}) {
		this.application = options.application ?? undefined;
		this.registry = options.registry ?? undefined;
		this.logger = new Logger({ ...options.logger, prefix: 'ApplicationResourceRegistry' });

		this.load = this.load.bind(this);
	}

	public async load(..._args: any[]): Promise<void | undefined> {
		this.logger.warn('Unimplemented resource ran.');
		return undefined;
	}
}
