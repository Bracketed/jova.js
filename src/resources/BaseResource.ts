import type { Express } from '@bracketed/express';
import { Logger } from '@bracketed/logger';
import type { Registry } from '../Registry';

export interface BaseResourceOptions {
	application?: Express;
	registry?: Registry;
}

export class BaseResourceLoader {
	protected readonly application?: Express;
	protected readonly logger: Logger = new Logger({ prefix: 'ApplicationResourceRegistry' });
	protected readonly registry?: Registry;

	constructor(options: BaseResourceOptions = {}) {
		this.application = options.application ?? undefined;
		this.registry = options.registry ?? undefined;

		this.load = this.load.bind(this);
	}

	public async load(..._args: any[]): Promise<void | undefined> {
		this.logger.warn('Unimplemented resource ran.');
		return undefined;
	}
}
