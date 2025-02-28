import type { Express } from '@bracketed/express';
import { type Logger as LoggerType, Logger } from '@bracketed/logger';
import fs from 'node:fs';
import path from 'node:path';
import { getHandlerOptions } from '../decorators/index';
import type { Registry } from '../Registry';
import type { ApplicationStats } from '../types/index';
import { resolvePath } from '../utilities/Path/path';
import { Stopwatch } from '../utilities/stopwatch';
import type { HandlerFunction } from './function';

export namespace Handlers {
	export enum Type {
		ROUTE = 'route',
		MIDDLEWARE = 'middleware',
		EVENT = 'event',
		AUTO = 'auto',
	}

	/**
	 * Decorative options for Handlers, customise the behaviour of a specific handler.
	 *
	 * __Usage of decorators in `jova.js` is unfinished and enabling/disabling handlers is currently only available!__
	 *
	 * @public
	 * @interface
	 */
	export interface Options {
		/**
		 * The type of handler this is, all handlers default to
		 * ```typescript
		 * Handlers.Type.AUTO
		 * ```
		 *
		 * This option does not do anything in `jova.js` as of current (1.6.2) and will be updated to have functionality in a future version.
		 *
		 * __Usage of decorators in `jova.js` is unfinished and enabling/disabling handlers is currently only available!__
		 *
		 * @public
		 */
		type?: Type;
		/**
		 * Enable or disable a handler so it does not get ran or processed at runtime.
		 *
		 * __Usage of decorators in `jova.js` is unfinished and enabling/disabling handlers is currently only available!__
		 * @default true
		 *
		 * @public
		 */
		enabled?: boolean;
	}

	interface HandlerOptions<T> {
		cwd: string;
		type: string;
		controllerType: new (...args: any[]) => T;
		application: Express;
		registry: Registry;
	}

	export class Handler<T> {
		private readonly cwd: string;
		private readonly logger: LoggerType = new Logger({ prefix: 'ApplicationRegistry' });
		private readonly type: string;
		private readonly controllerType: new (...args: any[]) => T;
		private readonly application: Express;
		private readonly registry: Registry;

		private deploy!: (..._args: any[]) => Promise<ApplicationStats | undefined>;
		private handlers: Array<string> = [];

		constructor(options: HandlerOptions<T>) {
			this.cwd = options.cwd;
			this.type = options.type;
			this.controllerType = options.controllerType;
			this.application = options.application;
			this.registry = options.registry;
		}

		public async setupDeployScript() {
			const functions = this.getFiles(
				path.resolve(import.meta.dirname, resolvePath('functions')),
				/^(?!.*\.d\.(ts|mts|cts)$).*\.(js|jsx|ts|tsx|mjs|mts|cjs|cts)$/
			);

			const Imports = functions.map(async (fp) => ({
				module: await import(`file://${fp}`),
				name: path.parse(fp).name,
			}));

			const Modules = await Promise.all(Imports);
			const Module = Modules.find(
				(m) => m.name === this.type.toLowerCase() && m.module[`${this.type}RegisterFunction`]
			);

			if (!Module) {
				this.logger.warn(
					`Unable to load function for event handler, type ${this.type} is not a valid function handler will be substituted for a blank handler.`
				);
				this.deploy = (..._args: any[]): Promise<any | void> | any | void => {
					return;
				};
			} else {
				const Handler = Module.module[`${this.type}RegisterFunction`] as new (
					...args: any[]
				) => HandlerFunction;

				this.deploy = new Handler(this.application, this.registry).run;
			}

			return this;
		}

		public loadHandlers(handlerType: string): this {
			const handlerDirectoryPath = path.resolve(this.cwd, resolvePath(handlerType));

			if (!fs.existsSync(handlerDirectoryPath)) return this;
			this.handlers = this.getFiles(
				handlerDirectoryPath,
				/^(?!.*\.d\.(ts|mts|cts)$).*\.(js|jsx|ts|tsx|mjs|mts|cjs|cts)$/
			);

			return this;
		}

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

		public async register(type: string) {
			if (this.handlers.length === 0) return this.logger.info(`Skipping ${type}...`);

			this.logger.info(`Registering ${type}...`);
			const RegisterStopwatch = new Stopwatch();
			let Registered: number = 0;
			let Ignored: number = 0;

			const Imports = this.handlers.map(async (path) => ({
				module: await import(`file://${path}`),
				clock: new Stopwatch(),
			}));

			const Modules = (await Promise.all(Imports))
				.filter((module) => module.module[this.type])
				.flatMap((module) => ({ module: module.module[this.type], clock: module.clock }))
				.filter((exported) => typeof exported.module === 'function');

			for await (const [index, Module] of Modules.entries()) {
				try {
					const options = getHandlerOptions(Module.module);

					//this.logger.info(options);

					if (options.enabled === false) {
						Ignored += 1;
						continue;
					}

					type ControllerType = typeof this.controllerType;
					const Controller = Module.module as new (...args: any[]) => ControllerType;

					const Handler = new Controller(this.application, this.registry);

					const stats = await this.deploy(Handler, Module.clock);

					if (!stats) {
						this.logger.warn(
							`Application ${type} handler at index ${index} was not deployed due to a missing entry class.`
						);
						continue;
					}

					this.logger.info(`${stats.message}`);
					Registered += 1;
				} catch (error) {
					this.logger.warn(
						`Application ${type} handler at index ${index} was not deployed due to process error:`,
						error
					);
				}
			}

			this.logger.info(`Registered ${Registered} ${type} in ${RegisterStopwatch.stop().toString()}`);
			if (this.handlers.length - Ignored !== Registered)
				this.logger.warn(
					`Some ${type.toLowerCase()} were not registered due to errors or missing content in the registering process.`
				);

			if (Ignored !== 0)
				this.logger.warn(
					`${Ignored} ${type.toLowerCase()} were disabled via decorators and were not registered.`
				);
		}
	}
}
