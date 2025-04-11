import { Stopwatch } from '@sapphire/stopwatch';
import { rateLimit, type Options } from 'express-rate-limit';
import type { ApplicationRequestHandler } from '../../types/index';
import { BaseResourceLoader } from '../BaseResource';

export class ResourceLoader extends BaseResourceLoader {
	public override async load(config: Partial<Options> | undefined) {
		if (!config) return;

		const MiddlewareRegisterStopwatch = new Stopwatch();

		this.application!.use(rateLimit(config) as unknown as ApplicationRequestHandler);

		this.logger.info(
			`Registered Built-in Middleware: "ratelimiter" in ${MiddlewareRegisterStopwatch.stop().toString()} - Runs on all Routes: true`
		);
	}
}
