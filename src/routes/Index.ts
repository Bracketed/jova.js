import { ApplicationRoute, Registry, Methods } from '#root/Registry';
import * as Express from 'express';

export class Route {
	public registerApplicationRoutes(registry: Registry): ApplicationRoute {
		return registry.registerAppRoute((route) =>
			route //
				.setRoute('')
				.setMethod(Methods.GET)
				.setHandler(this[Methods.GET].bind(this))
		);
	}

	public async [Methods.GET](
		_request: Express.Request,
		response: Express.Response
	): Promise<Express.Response | void> {
		return response.status(200).json({ message: 'Hello World!' });
	}
}
