import { Logger, type Logger as LoggerType } from '@bracketed/logger';
import type { LoggerOptions } from '../types';
import { ResourceLoader } from './ResourceLoader';

interface Resource {
	name: string;
	arguments: Array<any>;
}

export interface BulkResourceLoaderOptions {
	logger: LoggerOptions;
	tasks: Array<Resource>;
}

export class BulkResourceLoader {
	private readonly logger: LoggerType;
	private readonly array: Array<Resource>;
	private readonly options: LoggerOptions;

	constructor(options: BulkResourceLoaderOptions) {
		this.array = options.tasks;
		this.logger = new Logger({ ...options.logger, prefix: 'ApplicationResourceLoader' });
		this.options = options.logger;
	}

	public async load() {
		let Loaded: number = 0;

		this.logger.info(`Loading ${this.array.length} resources...`);

		for await (const [_index, task] of this.array.entries()) {
			const Loader = new ResourceLoader({
				logger: this.options,
			});
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
