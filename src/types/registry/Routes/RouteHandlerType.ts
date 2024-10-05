import { ApplicationRequest, ApplicationResponse } from '../../index.js';

export type RouteHandler = (
	req: ApplicationRequest,
	res: ApplicationResponse
) => ApplicationResponse | Promise<ApplicationResponse | void> | void;
