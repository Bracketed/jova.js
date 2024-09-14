import {
	ApplicationRegistry,
	ApplicationRequest,
	ApplicationResponse,
	ApplicationRoute,
	Methods,
} from '../../index.js';

export class Route {
	public registerApplicationRoutes(registry: ApplicationRegistry): ApplicationRoute {
		return registry.registerApplicationRoute((route) =>
			route //
				.setRouteName('')
				.setMethod(Methods.GET)
				.setHandler(this.run)
		);
	}

	public async run(_request: ApplicationRequest, response: ApplicationResponse): Promise<ApplicationResponse | void> {
		return response.status(200).json({ message: 'Hello World!' });
	}
}
