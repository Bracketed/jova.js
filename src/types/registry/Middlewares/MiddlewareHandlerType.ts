import type { ApplicationNextFunction, ApplicationRequest, ApplicationResponse } from '../../index';

export type MiddlewareHandler = (
	req: ApplicationRequest,
	res: ApplicationResponse,
	next: ApplicationNextFunction
) => ApplicationResponse | Promise<ApplicationResponse | void> | void;
