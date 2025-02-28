import {
	ApplicationRegistry,
	ApplicationRequest,
	ApplicationResponse,
	ApplicationRoute,
	Methods,
	RouteController,
} from '@bracketed/jova.js/types';

import { Handlers } from '@bracketed/jova.js';
import { ApplyHandlerOptions } from '@bracketed/jova.js/decorators';

@ApplyHandlerOptions<Handlers.Options>({
	type: Handlers.Type.ROUTE,
	enabled: true,
})
export class Route extends RouteController {
	public override registerApplicationRoutes(registry: ApplicationRegistry): ApplicationRoute {
		return registry.registerApplicationRoutes((route) =>
			route //
				.setRouteName('test')
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
