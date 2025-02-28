import type { ParamsDictionary, Query } from '@bracketed/express/serve-static';
import type { ParsedQs } from 'qs';
import type { ApplicationNextFunction, ApplicationRequest, ApplicationResponse } from '..';

interface Handler<
	P = ParamsDictionary,
	ResBody = any,
	ReqBody = any,
	ReqQuery = ParsedQs,
	LocalsObj extends Record<string, any> = Record<string, any>,
> {
	(
		req: ApplicationRequest<P, ResBody, ReqBody, ReqQuery, LocalsObj>,
		res: ApplicationResponse<ResBody, LocalsObj>,
		next: ApplicationNextFunction
	): void;
}

export interface RequestHandler<
	P = ParamsDictionary,
	ResBody = any,
	ReqBody = any,
	ReqQuery = Query,
	Locals extends Record<string, any> = Record<string, any>,
> extends Handler<P, ResBody, ReqBody, ReqQuery, Locals> {}
