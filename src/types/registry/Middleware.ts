import type { ApplicationRequestHandler } from '../index';

export interface Middleware {
	middleware: string | undefined;
	handler: ApplicationRequestHandler;
	runsOnAllRoutes: boolean;
}
