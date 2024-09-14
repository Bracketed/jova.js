import { Express, NextFunction, Request, Response } from 'express';
import { ApplicationEvent } from '../types/JovaEvents.js';

export const loadApplicationEventsMiddlewareConfiguration = (
	application: Express,
	emit: (Event: ApplicationEvent, ...args: any[]) => void | undefined
) => {
	application.use((r: Request, _r: Response, next: NextFunction) => {
		emit(ApplicationEvent.ROUTE, r);
		return next();
	});
};
