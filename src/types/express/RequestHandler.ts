import type { ParamsDictionary, Query } from '@bracketed/express/serve-static';
import type { ApplicationNextFunction, ApplicationRequest, ApplicationResponse, ParsedQs } from '..';

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

/**
 * @name RequestHandler
 * @description Request handling for Jova.js routes.
 *
 * @module Types
 * @interface RequestHandler
 * @extends Handler
 */
export interface RequestHandler<
	P = ParamsDictionary,
	ResBody = any,
	ReqBody = any,
	ReqQuery = Query,
	Locals extends Record<string, any> = Record<string, any>,
> extends Handler<P, ResBody, ReqBody, ReqQuery, Locals> {}
