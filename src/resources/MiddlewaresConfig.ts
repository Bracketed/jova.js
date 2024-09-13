import { Express } from 'express';
import { MiddlewareHandler } from '../registry/types/Middlewares/MiddlewareHandlerType.js';

export const loadApplicationMiddlewaresConfiguration = (
	application: Express,
	middlewares: Array<MiddlewareHandler> | undefined
) => {
	if (!middlewares) return;

	middlewares.forEach((m) => application.use(m));
};
