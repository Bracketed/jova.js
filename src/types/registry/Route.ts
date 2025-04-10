import type { ApplicationRequestHandler, Methods } from '../index';

export interface Route {
	route: string;
	method: Methods | 'options' | 'head' | 'put' | 'all' | 'delete' | 'post' | 'get';
	middlewares: Array<ApplicationRequestHandler>;
}
