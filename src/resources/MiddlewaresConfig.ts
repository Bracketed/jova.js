import { Express } from '@bracketed/express';
import { Logger } from '@bracketed/logger';
import { MiddlewareHandler } from '../types/index.js';

export const loadApplicationMiddlewaresConfiguration = (
	application: Express,
	logger: Logger,
	middlewares: Array<MiddlewareHandler> | undefined
) => {
	if (!middlewares) return;

	middlewares.forEach((m) => {
		application.use(m);
		logger.info(
			`ApplicationMiddlewareRegistry: Registered Instance-set middleware, "${m.name}" - Runs on all Routes: true`
		);
	});
};
