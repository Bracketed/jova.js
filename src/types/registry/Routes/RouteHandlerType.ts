import type { ApplicationRequest, ApplicationResponse } from '../../index';

export type RouteHandler = (
	req: ApplicationRequest,
	res: ApplicationResponse
) => ApplicationResponse | Promise<ApplicationResponse | void> | void;
