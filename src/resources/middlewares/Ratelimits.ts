import { Redis } from 'ioredis';
import type { RatelimitConfig } from '../../types/index';
import rateLimit from '../../utilities/limiter/index';
import RedisStore from '../../utilities/redis-limiter/index';
import { Stopwatch } from '../../utilities/stopwatch';
import { BaseResourceLoader } from '../BaseResource';

export class ResourceLoader extends BaseResourceLoader {
	public override async load(config: RatelimitConfig | undefined) {
		if (!config) return;

		const MiddlewareRegisterStopwatch = new Stopwatch();
		let database: RedisStore | undefined;

		if (config.ratelimitDatabase)
			try {
				this.logger.info(`Connecting to Redis...`);

				const Client = new Redis(config.ratelimitDatabase);
				if (config.ratelimitDatabase.lazyConnect) await Client.connect();

				this.logger.info(`Connected to Redis server successfully!`);

				database = new RedisStore({
					// @ts-expect-error - Known issue: the `call` function is not present in @types/ioredis
					sendCommand: (...args: string[]) => Client.call(...args),
				});
			} catch (e) {
				this.logger.fatal('REDIS ERROR:', e);
				return this.logger.error(
					`Failed to register middleware "ratelimiter" - Middleware registry failed in ${MiddlewareRegisterStopwatch.stop().toString()}, failed to connect to database.`
				);
			}

		if (!database)
			return this.logger.error(
				`Failed to register middleware "ratelimiter" - Middleware registry failed in ${MiddlewareRegisterStopwatch.stop().toString()}, failed to connect to database.`
			);

		this.application?.use(
			rateLimit({
				windowMs: config.refreshTime || undefined,
				limit: config.requestLimitAmount || 20,
				message: config.requestLimitMessage || 'Too many requests, please try again later.',
				passOnStoreError: config.allowOnInternalError || undefined,
				statusCode: config.requestLimitCode || undefined,
				handler: config.requestLimitHandler || undefined,
				skipFailedRequests: !config.countFailedRequests || undefined,
				store: database,
				standardHeaders: true,
				legacyHeaders: true,
			})
		);

		this.logger.info(
			`Registered Built-in Middleware: "ratelimiter" in ${MiddlewareRegisterStopwatch.stop().toString()} - Runs on all Routes: true`
		);
	}
}
