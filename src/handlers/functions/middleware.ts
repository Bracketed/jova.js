import { container } from '../../shared/index';
import type { MiddlewareController, RegisterFunctionContext } from '../../types/index';
import { HandlerFunction } from '../BaseHandlerFunction';

export class MiddlewareRegisterFunction extends HandlerFunction {
	public override async run(Middleware: MiddlewareController, Context: RegisterFunctionContext) {
		const MiddlewareConfig = Middleware.setApplicationMiddlewareOptions();
		const MiddlewareInfo = container.registry!.registerApplicationMiddleware((middleware) =>
			middleware //
				.setMiddlewareName(MiddlewareConfig.middlewareName)
				.setHandler(Middleware.run)
				.runOnAllRoutes(MiddlewareConfig.runsOnAllRoutes || false)
		);

		if (MiddlewareConfig.runsOnAllRoutes) {
			container.express.use(Middleware.run);
			this.logger.info(`Middleware "${MiddlewareConfig.middlewareName}" was deployed to all routes.`);
		}

		return {
			message: `Registered Middleware: "${MiddlewareInfo.getApplicationMiddleware().middleware}" in ${Context.clock.stop().toString()} - Runs on all Routes: ${MiddlewareInfo.getApplicationMiddleware().runsOnAllRoutes}`,
		};
	}
}
