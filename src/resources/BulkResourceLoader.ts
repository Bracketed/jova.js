import type { Express } from '@bracketed/express';
import { Logger, type Logger as LoggerType } from '@bracketed/logger';
import type { Registry } from '../Registry';
import { ResourceLoader } from './ResourceLoader';

export interface BulkResourceLoaderOptions {
	application: Express;
	registry: Registry;
	tasks: Array<{ name: string; arguments: Array<any> }>;
}

export class BulkResourceLoader {
	private readonly logger: LoggerType = new Logger({ prefix: 'ApplicationResourceLoader' });
	private readonly application: Express;
	private readonly registry: Registry;
	private readonly array: Array<{ name: string; arguments: Array<any> }>;

	constructor(options: BulkResourceLoaderOptions) {
		this.application = options.application;
		this.registry = options.registry;
		this.array = options.tasks;
	}

	public async load() {
		let Loaded: number = 0;

		this.logger.info(`Loading ${this.array.length} resources...`);

		for await (const [_index, task] of this.array.entries()) {
			const Loader = new ResourceLoader({ application: this.application, registry: this.registry });
			const ResourceLoadedStatus = await Loader.loadResource(task.name.toLowerCase());

			if (ResourceLoadedStatus === false) continue;

			try {
				await Loader.runResourceLoader(...task.arguments);
			} catch {
				this.logger.warn(
					`Resource "${task.name}" failed to load, an error occured while the resource was running.`
				);
				continue;
			}

			Loaded += 1;
		}

		this.logger.info(`Loaded ${Loaded} out of ${this.array.length} resources!`);
		if (Loaded !== this.array.length)
			this.logger.warn('Some resources were not loaded due to errors during the run process or were not found.');

		return Loaded;
	}
}
