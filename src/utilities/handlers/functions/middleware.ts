import type { MiddlewareController } from '../../../types/index';
import type { Stopwatch } from '../../stopwatch';
import { HandlerFunction } from '../function';

export class MiddlewareRegisterFunction extends HandlerFunction {
	public override async run(Middleware: MiddlewareController, Clock: Stopwatch) {
		const MiddlewareConfig = Middleware.setApplicationMiddlewareOptions();
		const MiddlewareInfo = this.registry.registerApplicationMiddleware((middleware) =>
			middleware //
				.setMiddlewareName(MiddlewareConfig.middlewareName)
				.setHandler(Middleware.run)
				.runOnAllRoutes(MiddlewareConfig.runsOnAllRoutes || false)
		);

		if (MiddlewareConfig.runsOnAllRoutes) {
			this.application.use(Middleware.run);
			this.logger.info(
				`ApplicationRegistry: Middleware "${MiddlewareConfig.middlewareName}" was deployed to all routes.`
			);
		}

		return {
			message: `Registered Middleware: "${MiddlewareInfo.getApplicationMiddleware().middleware}" in ${Clock.stop().toString()} - Runs on all Routes: ${MiddlewareInfo.getApplicationMiddleware().runsOnAllRoutes}`,
		};
	}
}
