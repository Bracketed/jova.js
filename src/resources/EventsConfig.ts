import { Express, NextFunction, Request, Response } from 'express';
import EventEmitter from 'node:events';
import { Registry } from 'src/registry/Registry.js';
import { ApplicationEvent } from '../types/JovaEvents.js';

export const loadApplicationEventsMiddlewareConfiguration = (
	application: Express,
	registry: Registry,
	emitter: EventEmitter
) => {
	application.use((r: Request, _r: Response, next: NextFunction) => {
		emitter.emit(ApplicationEvent.ROUTE, r);
		registry.getEvents().forEach((eventListener) => {
			if (eventListener.event === ApplicationEvent.ROUTE) eventListener.handler(r);
			else if (eventListener.event === ApplicationEvent.ALL) eventListener.handler(ApplicationEvent.ROUTE, r);
		});
		return next();
	});
};
