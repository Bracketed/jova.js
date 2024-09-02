import { Middleware } from './MiddlewareType.js';
import { RouteHandler } from './RouteHandlerType.js';
import { Methods } from '../types/RouteTypes.js';
import * as Express from 'express';

export class AppRoute {
	private route: string = '';
	private method: Methods = Methods.GET;
	private handler: RouteHandler = async (_req: Express.Request, _res: Express.Response) => {};
	private middlewares: Middleware[] = [];
	private requiredHeaders: string[] = [];
	private basePathOverride: string | null = null;

	setRoute(route: string): this {
		this.route = route;
		return this;
	}

	setMethod(method: Methods): this {
		this.method = method;
		return this;
	}

	setHandler(handler: RouteHandler): this {
		this.handler = handler;
		return this;
	}

	setRouteMiddlewares(middlewares: Middleware[]): this {
		this.middlewares = middlewares;
		return this;
	}

	setRequiredHeaders(headers: string[]): this {
		this.requiredHeaders = headers;
		return this;
	}

	useBasePathOverride(basePath: string): this {
		this.basePathOverride = basePath;
		return this;
	}

	private checkHeadersMiddleware: Middleware = (
		req: Express.Request,
		res: Express.Response,
		next: Express.NextFunction
	) => {
		const missingHeaders = this.requiredHeaders.filter((header) => !req.headers[header.toLowerCase()]);
		if (missingHeaders.length > 0) {
			return res.status(400).json({ message: `Missing headers: ${missingHeaders.join(', ')}` });
		}
		return next();
	};

	getRoute() {
		return {
			route: this.route,
			method: this.method,
			handler: this.handler,
			middlewares: [...this.middlewares, this.checkHeadersMiddleware],
			basePathOverride: this.basePathOverride,
		};
	}
}
