import type { Express } from '@bracketed/express';
import { Logger, type Logger as LoggerType } from '@bracketed/logger';
import fs from 'node:fs';
import path from 'node:path';
import type { Registry } from '../Registry';
import type { LoggerOptions } from '../types';
import { resolvePath } from '../utilities/Path/path';
import { BaseResourceLoader, type BaseResourceOptions } from './BaseResource';

export interface ResourceLoaderOptions {
	application: Express;
	registry: Registry;
	logger: LoggerOptions;
}

export class ResourceLoader {
	private readonly logger: LoggerType;
	private readonly application: Express;
	private readonly registry: Registry;

	private resource = new BaseResourceLoader();

	constructor(options: ResourceLoaderOptions) {
		this.application = options.application;
		this.registry = options.registry;
		this.logger = new Logger({ ...options.logger, prefix: 'ApplicationResourceLoader' });
	}

	public async loadResource(name: string): Promise<this | boolean> {
		const resourcesDirectoryPath = path.resolve(import.meta.dirname, resolvePath('middlewares'));

		if (!fs.existsSync(resourcesDirectoryPath)) return this;

		const middlewares = this.getFiles(
			resourcesDirectoryPath,
			/^(?!.*\.d\.(ts|mts|cts)$).*\.(js|jsx|ts|tsx|mjs|mts|cjs|cts)$/
		);

		const resourcePath = middlewares.find((m) => path.parse(m).name.toLowerCase() === name.toLowerCase());
		if (!resourcePath) {
			this.logger.warn(`Unable to find resource: "${name}"`);
			return false;
		}

		const resourceImport = await import(`file://${resourcePath}`);

		const ResourceLoader = resourceImport['ResourceLoader'] as new (
			options: BaseResourceOptions
		) => BaseResourceLoader;

		this.resource = new ResourceLoader({ application: this.application, registry: this.registry });

		return this;
	}

	public runResourceLoader = async (...args: any[]) => await this.resource.load(...args);

	private getFiles(dir: string, regex: RegExp): Array<string> {
		let results: Array<string> = [];

		const list = fs.readdirSync(dir);

		list.forEach((file) => {
			const filePath = path.join(dir, file);
			const stat = fs.statSync(filePath);

			if (stat && stat.isDirectory()) results = results.concat(this.getFiles(filePath, regex));
			else if (regex.test(file)) results.push(filePath);
		});

		return results;
	}
}
