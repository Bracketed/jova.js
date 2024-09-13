import * as Express from 'express';
import { Methods } from '../../../types/http/HTTPRequestMethods.js';
import { Registry } from '../../Registry.js';
import { MiddlewareHandler } from '../Middlewares/MiddlewareHandlerType.js';
import { RouteHandler } from './RouteHandlerType.js';

export class AppRoute {
	private registry: Registry;
	private route: string = '';
	private method: Methods = Methods.GET;
	private handler: RouteHandler = async (_req: Express.Request, _res: Express.Response) => {};
	private middlewares: Array<MiddlewareHandler> = [];
	private requiredHeaders: string[] = [];
	private basePathOverride: string | null = null;

	constructor(registry: Registry) {
		this.registry = registry;
	}

	public setRouteName(route: string): this {
		this.route = route;
		return this;
	}

	public setMethod(method: Methods): this {
		this.method = method;
		return this;
	}

	public setHandler(handler: RouteHandler): this {
		this.handler = handler;
		return this;
	}

	public setRouteMiddlewares(middlewares: Array<string>): this {
		const Middlewares = this.registry.getMiddlewares();
		const Mapped = Middlewares.map((middleware) => {
			if (
				middlewares.find((middlewareTitle) => middlewareTitle === middleware.middleware) &&
				!middleware.runsOnAllRoutes
			)
				return middleware.handler;

			return;
		}).filter((middleware) => middleware !== undefined);

		this.middlewares = Mapped;
		return this;
	}

	public setRequiredHeaders(headers: string[]): this {
		this.requiredHeaders = headers;
		return this;
	}

	public useBasePathOverride(basePath: string): this {
		this.basePathOverride = basePath;
		return this;
	}

	private checkHeadersMiddleware: MiddlewareHandler = (
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

	public getApplicationRoute() {
		return {
			route: this.route,
			method: this.method,
			handler: this.handler,
			middlewares: [...this.middlewares, this.checkHeadersMiddleware],
			basePathOverride: this.basePathOverride,
		};
	}
}
