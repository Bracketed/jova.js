import { Logger } from '@bracketed/logger';
import { Stopwatch } from '@sapphire/stopwatch';
import { Express } from 'express';
import rateLimit from 'express-rate-limit';
import { Redis } from 'ioredis';
import RedisStore from 'rate-limit-redis';
import { RatelimitConfig } from '../types/index.js';

export const loadApplicationRatelimitConfiguration = async (
	application: Express,
	logger: Logger,
	config: RatelimitConfig | undefined
) => {
	if (!config) return;

	const MiddlewareRegisterStopwatch = new Stopwatch();
	let database: RedisStore | undefined;

	if (config.ratelimitDatabase)
		try {
			logger.info(`ApplicationIORedis: Connecting to Redis...`);

			const Client = new Redis(config.ratelimitDatabase);
			if (config.ratelimitDatabase.lazyConnect) await Client.connect();

			logger.info(`ApplicationIORedis: Connected to Redis server successfully!`);

			database = new RedisStore({
				// @ts-expect-error - Known issue: the `call` function is not present in @types/ioredis
				sendCommand: (...args: string[]) => Client.call(...args),
			});
		} catch (e) {
			logger.fatal('ApplicationIORedis: ERROR:', e);
			return logger.error(
				`ApplicationMiddlewareRegistry: Failed to register middleware "ratelimiter" - Middleware registry failed in ${MiddlewareRegisterStopwatch.stop().toString()}, failed to connect to database.`
			);
		}

	if (!database)
		return logger.error(
			`ApplicationMiddlewareRegistry: Failed to register middleware "ratelimiter" - Middleware registry failed in ${MiddlewareRegisterStopwatch.stop().toString()}, failed to connect to database.`
		);

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

	logger.info(
		`ApplicationMiddlewareRegistry: Registered Middleware: "ratelimiter" in ${MiddlewareRegisterStopwatch.stop().toString()} - Runs on all Routes: true`
	);
};
