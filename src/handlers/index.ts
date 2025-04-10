import { Logger, type Logger as LoggerType } from '@bracketed/logger';
import { Stopwatch } from '@sapphire/stopwatch';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { getHandlerOptions, HandlerType, type HandlerController, type HandlerOptions } from '../decorators/index';
import { container } from '../shared/index';
import type { JovaRequiredPathSettings, LoggerOptions, RegisterFunctionContext } from '../types/index';
import { resolvePath } from '../utilities/path';
import type { HandlerFunction } from './BaseHandlerFunction';

interface Options {
	logger: LoggerOptions;
	paths: JovaRequiredPathSettings;
}

/**
 * @name Handler
 * @description Decorative content options and customisability for Handlers, customise the behaviour of a specific handler.
 *
 * __Usage of decorators in `jova.js` is unfinished and enabling/disabling handlers is currently only available!__
 *
 * @public
 * @module Core
 * @class Handler
 */
export class Handlers {
	private readonly logger: LoggerType;
	private readonly loggerOptions: LoggerOptions;
	private readonly paths: JovaRequiredPathSettings;

	constructor(options: Options) {
		this.paths = options.paths;
		this.logger = new Logger({ ...options.logger, prefix: 'ApplicationRegistry' });
		this.loggerOptions = options.logger;
	}

	private getFiles(dir: string, regex: RegExp): Array<URL> {
		if (!fs.existsSync(dir)) return [];

		let results: Array<URL> = [];

		const list = fs.readdirSync(dir);

		list.forEach((file) => {
			const filePath = path.join(dir, file);
			const stat = fs.statSync(filePath);

			if (stat && stat.isDirectory()) results = results.concat(this.getFiles(filePath, regex));
			else if (regex.test(file)) results.push(pathToFileURL(filePath));
		});

		return results;
	}

	public async register() {
		const Functions = await Promise.all(
			this.getFiles(
				path.resolve(import.meta.dirname, resolvePath('functions')),
				/^(?!.*\.d\.(ts|mts|cts)$).*\.(js|jsx|ts|tsx|mjs|mts|cjs|cts)$/
			).map(async (fp) => {
				const module = await import(fp.href);
				const info = path.parse(fileURLToPath(fp));

				const RegisterFunction = module[`${info.name}RegisterFunction`] as new (
					loggerOptions: LoggerOptions
				) => HandlerFunction;

				return {
					function: new RegisterFunction(this.loggerOptions),
					name: info.name.toLocaleLowerCase(),
				};
			})
		);

		const handlers: Array<URL> = [
			...this.getFiles(
				path.resolve(container.cwd, this.paths.routes),
				/^(?!.*\.d\.(ts|mts|cts)$).*\.(js|jsx|ts|tsx|mjs|mts|cjs|cts)$/
			),
			...this.getFiles(
				path.resolve(container.cwd, this.paths.events),
				/^(?!.*\.d\.(ts|mts|cts)$).*\.(js|jsx|ts|tsx|mjs|mts|cjs|cts)$/
			),
			...this.getFiles(
				path.resolve(container.cwd, this.paths.middlewares),
				/^(?!.*\.d\.(ts|mts|cts)$).*\.(js|jsx|ts|tsx|mjs|mts|cjs|cts)$/
			),
		];

		if (handlers.length === 0) return this.logger.info('No handlers found.');

		this.logger.info(`Registering ${handlers.length} handlers...`);
		const RegisterStopwatch = new Stopwatch();
		let Registered: number = 0;
		let Failed: number = 0;

		const Imports: Array<RegisterFunctionContext> = (
			await Promise.all(
				handlers.map(async (url) => {
					const module = await import(url.href);

					let defaultExport: HandlerController | any | undefined = module.default ?? undefined;
					let firstExport: HandlerController | any | undefined = Object.values(module)[0] ?? undefined;

					if (typeof firstExport !== 'function') firstExport = undefined;
					if (typeof defaultExport !== 'function') defaultExport = undefined;

					const targetExport: HandlerController | undefined = defaultExport ?? firstExport;

					const decorators = targetExport
						? getHandlerOptions(targetExport)
						: ({ type: HandlerType.AUTO, enabled: true, handler: undefined } as HandlerOptions);

					const definedExport: HandlerController | undefined =
						decorators.type !== HandlerType.AUTO ? decorators.handler : undefined;

					const name = path.parse(fileURLToPath(url)).name.toLocaleLowerCase();

					return {
						name: name,
						import: definedExport ?? targetExport ?? undefined,
						clock: new Stopwatch(),
						decorators: decorators,
						url: url,
						data: path.parse(fileURLToPath(url)),
						path: fileURLToPath(url),
					};
				})
			)
		)
			.filter((i) => i.decorators.enabled === true)
			.filter((i) => i.import !== undefined);

		if (handlers.length !== Imports.length)
			this.logger.warn('Some handlers were omitted from queueing due to being explicitly disabled.');
		this.logger.info(`Queued ${Imports.length} handler(s) for deployment!`);

		for await (const [index, Module] of Imports.entries()) {
			try {
				const Handler = new Module.import!(this.loggerOptions);
				const deployer = Functions.find((f) => f.name === Module.decorators.type || f.name === Handler.type);

				if (!deployer) {
					Module.clock.stop();
					Failed += 1;
					this.logger.warn(
						`Application handler at index ${index} was not deployed due to a missing register function.`
					);
					continue;
				} else
					this.logger.info(
						`Found deployment ${deployer.name} handler from definition ${Module.decorators.type ?? Handler.type}`
					);

				const stats = await deployer.function.run(Handler, Module);

				if (!stats) {
					Module.clock.stop();
					Failed += 1;
					this.logger.warn(
						`Application handler at index ${index} was not deployed due to a missing entry class.`
					);
					continue;
				}

				this.logger.info(stats.message);
				Registered += 1;
			} catch (error) {
				Failed += 1;
				this.logger.warn(
					`Application handler at index ${index} was not deployed due to process error, failed in ${Module.clock.stop().toString()}\n`,
					error
				);
			}
		}

		this.logger.info(`Registered ${Registered} handlers in ${RegisterStopwatch.stop().toString()}`);
		if (handlers.length - Failed !== Registered)
			this.logger.warn(
				'Some handlers were not registered due to errors or missing content in the registering process.'
			);
	}
}
