import {
	ApplicationRegistry,
	ApplicationRequest,
	ApplicationResponse,
	ApplicationRoute,
	Methods,
} from '../../types/index.js';

export class Route {
	public registerApplicationRoutes(registry: ApplicationRegistry): ApplicationRoute {
		return registry.registerApplicationRoute((route) =>
			route //
				.setRouteName('')
				.setMethod(Methods.GET)
				.setHandler(this.run)
		);
	}

	public async run(request: ApplicationRequest, response: ApplicationResponse): Promise<ApplicationResponse | void> {
		console.log('Recieved request for', request.baseUrl);
		return response.status(200).json({ message: 'Hello World!' });
	}
}
