import { ApplicationRequest, ApplicationResponse } from '../../../types/index.js';

export type RouteHandler = (
	req: ApplicationRequest,
	res: ApplicationResponse
) => ApplicationResponse | Promise<ApplicationResponse | void> | void;
