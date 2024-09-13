import * as Express from 'express';

export type RouteHandler = (
	req: Express.Request,
	res: Express.Response
) => Express.Response | Promise<Express.Response | void> | void;
