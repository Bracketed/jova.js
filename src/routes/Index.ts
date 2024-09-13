import * as Express from 'express';
import { Registry } from '../registry/Registry.js';
import { AppRoute as ApplicationRoute } from '../registry/types/Routes/AppRouteType.js';
import { Methods } from '../types/http/HTTPRequestMethods.js';

export class Route {
	public registerApplicationRoutes(registry: Registry): ApplicationRoute {
		return registry.registerApplicationRoute((route) =>
			route //
				.setRouteName('')
				.setMethod(Methods.GET)
				.setHandler(this[Methods.GET])
		);
	}

	public async [Methods.GET](
		_request: Express.Request,
		response: Express.Response
	): Promise<Express.Response | void> {
		return response.status(200).json({ message: 'Hello World!' });
	}
}
