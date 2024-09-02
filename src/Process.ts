import express from 'express';
import { rateLimit } from 'express-rate-limit';
import dotenv from 'dotenv';
import { loadApplicationRoutes } from '#root/Registry';
import { Logger } from '#root/Logger';

dotenv.config();

export const ratelimits = {
	request: rateLimit({
		windowMs: 1 * 60 * 1000,
		limit: 100,
		standardHeaders: 'draft-6',
		legacyHeaders: false,
		message: 'Request limit reached.',
	}),
};

Logger.info('Connecting to database...');

const application = express();

application.disable('x-powered-by');

Logger.info(`Starting HTTP server on port: ${process.env.PORT || 3000}`);
loadApplicationRoutes(application)
	.then(() =>
		application.listen(process.env.PORT || 3000, () => {
			Logger.info(`HTTP Server now serving on port: ${process.env.PORT || 3000}`);
		})
	)
	.catch((err) => {
		Logger.fatal('Error during route processing:', err);
	});
