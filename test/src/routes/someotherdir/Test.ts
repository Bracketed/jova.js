import {
	ApplicationRegistry,
	ApplicationRequest,
	ApplicationResponse,
	ApplicationRoute,
	Methods,
	RouteController,
} from '@bracketed/jova.js/types';

import { ApplyHandlerOptions, HandlerOptions, HandlerType } from '@bracketed/jova.js/decorators';

@ApplyHandlerOptions<HandlerOptions>({
	type: HandlerType.ROUTE,
	enabled: true,
	handler: Route,
})
export class Route extends RouteController {
	public override registerApplicationRoutes(registry: ApplicationRegistry): ApplicationRoute {
		return registry.registerApplicationRoutes((route) =>
			route //
				.setMethod(Methods.GET)
				.setRouteParameters(['param1', 'param2'])
		);
	}

	public override async run(
		request: ApplicationRequest,
		response: ApplicationResponse
	): Promise<ApplicationResponse | void> {
		this.logger.info('Recieved request for', request.baseUrl);
		return response.status(200).json({ message: 'Hello World!' });
	}
}
