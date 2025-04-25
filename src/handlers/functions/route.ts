import path from 'node:path';
import { container } from '../../shared/index';
import type { RegisterFunctionContext, RouteController } from '../../types/index';
import { HandlerFunction } from '../BaseHandlerFunction';

export class RegisterFunction extends HandlerFunction {
	public override async run(Module: RouteController, Context: RegisterFunctionContext) {
		const RouteInformation = Module.registerApplicationRoutes(container.registry!).getApplicationRoute();

		const Middlewares = container
			.registry!.getMiddlewares()
			.filter((m) => m.runsOnAllRoutes === false && RouteInformation.middlewares.find((r) => r === m.handler))
			.map((m) => m.handler);

		Middlewares.forEach((r) => RouteInformation.middlewares.push(r));

		const TrimmedCWD: string = Context.path.slice(container.cwd.length + '\\routes'.length).replace(/^\/+/, '');
		const TrimmedDIR: string = path.dirname(TrimmedCWD).replace(/\\/g, '/');

		const params = RouteInformation.params
			.map((p) => {
				const isOptional = p.endsWith('?');
				const paramName = p.replace(/\?$/, '');
				const clean = paramName.replace(/^:/, '');

				return `:${clean}${isOptional ? '?' : ''}`;
			})
			.join('/');
		const fixedParams = params.length !== 0 ? '/' + params : '';
		const name = Context.name === 'index' ? '' : Context.name;
		const segment = RouteInformation.route
			? RouteInformation.route === 'index' || RouteInformation.route === '' || RouteInformation.route === '/'
				? ''
				: RouteInformation.route
			: name;
		const routePath =
			'/' +
			(TrimmedDIR + '/' + segment.toString().replace(/\\/g, '/'))
				.replace(/\/+/g, '/')
				.replace(/^\/+/, '')
				.replace(/\/+$/, '');

		try {
			const route = container.express.route(routePath + fixedParams);

			route[RouteInformation.method](...Middlewares, Module.run);
			return {
				message: `Route "${routePath + fixedParams}" (${RouteInformation.method.toUpperCase()}) was registered and deployed with ${Middlewares.length} route-specific middlewares in ${Context.clock.stop().toString()}`,
			};
		} catch (error) {
			this.logger.warn(error);
			return undefined;
		}
	}
}
