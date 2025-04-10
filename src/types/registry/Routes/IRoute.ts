import type { ApplicationPathParameters, ApplicationRequestHandler, Methods } from '../../index';

export interface IRoute {
	route: ApplicationPathParameters | undefined;
	method: Methods | 'options' | 'head' | 'put' | 'all' | 'delete' | 'post' | 'get';
	middlewares: Array<ApplicationRequestHandler>;
	basePathOverride: string | null;
	params: Array<string>;
}
