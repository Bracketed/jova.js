import type { RouteController } from '../../../types/index';
import type { Stopwatch } from '../../stopwatch';
import { HandlerFunction } from '../function';

export class RouteRegisterFunction extends HandlerFunction {
	public override async run(Module: RouteController, Clock: Stopwatch) {
		const RouteInformation = Module.registerApplicationRoutes(this.registry).getApplicationRoute();

		this.logger.info(
			`ApplicationRegistry: Registered Route: "${RouteInformation.route}" (${RouteInformation.method.toUpperCase()}) in ${Clock.stop().toString()}`
		);

		const Middlewares = this.registry
			.getMiddlewares()
			.filter((m) => m.runsOnAllRoutes === false && RouteInformation.middlewares.find((r) => r === m.handler))
			.map((m) => m.handler);

		Middlewares.forEach((r) => RouteInformation.middlewares.push(r));

		this.application[RouteInformation.method](RouteInformation.route, ...Middlewares, Module.run);

		return {
			message: `Route "${RouteInformation.route}" (${RouteInformation.method.toUpperCase()}) was deployed with ${Middlewares.length} route-specific middlewares.`,
		};
	}
}
