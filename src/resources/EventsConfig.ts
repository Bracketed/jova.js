import type { Express, NextFunction, Request, Response } from '@bracketed/express';
import { Logger } from '@bracketed/logger';
import EventEmitter from 'node:events';
import { ApplicationEvent, type ApplicationRegistry } from '../types/index';

export const loadApplicationEventsMiddlewareConfiguration = (
	application: Express,
	logger: Logger,
	registry: ApplicationRegistry,
	emitter: EventEmitter
) => {
	const Events = registry.getEvents();

	if (Events.length === 0) return;

	application.use((r: Request, _r: Response, next: NextFunction) => {
		emitter.emit(ApplicationEvent.ROUTE, r);
		Events.forEach((eventListener) => {
			if (eventListener.event === ApplicationEvent.ROUTE) eventListener.handler(r);
			else if (eventListener.event === ApplicationEvent.ALL) eventListener.handler(ApplicationEvent.ROUTE, r);
		});
		return next();
	});
	logger.info('ApplicationRegistry: Routing event Middleware listeners were set up!');
};
