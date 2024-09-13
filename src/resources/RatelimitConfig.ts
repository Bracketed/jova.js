import { Express } from 'express';
import rateLimit from 'express-rate-limit';
import { Redis } from 'ioredis';
import RedisStore from 'rate-limit-redis';
import { RatelimitConfig } from '../types/config/rateLimitOptionsObject.js';

export const loadApplicationRatelimitConfiguration = (application: Express, config: RatelimitConfig | undefined) => {
	if (config) {
		let database: RedisStore | undefined;

		if (config.ratelimitDatabase) {
			const Client = new Redis(config.ratelimitDatabase);
			database = new RedisStore({
				// @ts-expect-error - Known issue: the `call` function is not present in @types/ioredis
				sendCommand: (...args: string[]) => Client.call(...args),
			});
		}

		application.use(
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
	}
};
