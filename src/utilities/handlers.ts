import { type Logger as LoggerType, Logger } from '@bracketed/logger';
import fs from 'node:fs';
import path from 'node:path';
import type { ApplicationStats } from 'src/types';
import { resolvePath } from './Path/path';
import { Stopwatch } from './stopwatch';

export class Handler {
	private readonly cwd: string;
	private readonly logger: LoggerType = new Logger();
	private handlers: Array<string> = [];

	constructor(cwd: string) {
		this.cwd = cwd;
	}

	public loadHandlers(handlerType: string) {
		const handlerDirectoryPath = path.resolve(this.cwd, resolvePath(handlerType));

		if (!fs.existsSync(handlerDirectoryPath)) return this;
		this.handlers.concat(this.getFiles(handlerDirectoryPath, /\.(js|jsx|ts|tsx)$/));

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

	public async register(
		type: string,
		callback: (Module: any, Clock: Stopwatch) => Promise<ApplicationStats | undefined>
	) {
		this.logger.info(`ApplicationRegistry: Registering ${type}...`);
		const RegisterStopwatch = new Stopwatch();
		let Registered: number = 0;

		for await (const [index, value] of this.handlers.entries()) {
			try {
				const Clock = new Stopwatch();
				const Module = await import(`file://${value}`);

				const stats = await callback(Module, Clock)
					.then((v) => {
						if (!v) {
							this.logger.warn(
								`ApplicationRegistry: Application ${type} handler at index ${index} was not deployed due to a missing entry class.`
							);
							return undefined;
						}

						return v;
					})
					.catch((e) => {
						this.logger.warn(
							`ApplicationRegistry: Application ${type} handler at index ${index} was not deployed due to process error:`,
							e
						);
						return undefined;
					});

				if (!stats) continue;

				this.logger.info(`ApplicationRegistry: ${stats.message}`);
				Registered += 1;
			} catch (error) {
				this.logger.warn(
					`ApplicationRegistry: Application ${type} handler at index ${index} was not deployed due to process error:`,
					error
				);
			}
		}

		this.logger.info(
			`ApplicationRegistry: Registered ${Registered} ${type} in ${RegisterStopwatch.stop().toString()}`
		);
		if (this.handlers.length !== Registered)
			this.logger.warn(
				`ApplicationRegistry: Some ${type.toLowerCase()} were not registered due to errors or missing content in the registering process.`
			);
	}
}
