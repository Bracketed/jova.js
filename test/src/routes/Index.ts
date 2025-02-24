import {
	ApplicationRegistry,
	ApplicationRequest,
	ApplicationResponse,
	ApplicationRoute,
	Methods,
	RouteController,
} from '@bracketed/jova.js/types';

export class Route extends RouteController {
	public override registerApplicationRoutes(registry: ApplicationRegistry): ApplicationRoute {
		return registry.registerApplicationRoutes((route) =>
			route //
				.setRouteName('')
				.setMethod(Methods.GET)
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
