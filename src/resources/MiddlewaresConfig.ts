import { Logger } from '@bracketed/logger';
import { Express } from 'express';
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
