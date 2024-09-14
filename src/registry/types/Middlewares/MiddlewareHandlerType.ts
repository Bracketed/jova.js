import { ApplicationNextFunction, ApplicationRequest, ApplicationResponse } from '../../../index.js';

export type MiddlewareHandler = (
	req: ApplicationRequest,
	res: ApplicationResponse,
	next: ApplicationNextFunction
) => ApplicationResponse | Promise<ApplicationResponse | void> | void;
