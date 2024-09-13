import * as Express from 'express';

export type MiddlewareHandler = (
	req: Express.Request,
	res: Express.Response,
	next: Express.NextFunction
) => Express.Response | Promise<Express.Response | void> | void;
