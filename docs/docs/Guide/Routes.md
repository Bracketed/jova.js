# Routes

Put your route handlers into the `/routes` directory of your Jova application.

## Route Handler Boilerplates

```ts
// ESM
// ./routes/Route.ts
import {
	ApplicationRegistry,
	ApplicationRequest,
	ApplicationResponse,
	ApplicationRoute,
	Methods,
} from '@bracketed/jova.js/types';

export class Route {
	public registerApplicationRoute(registry: ApplicationRegistry): ApplicationRoute {
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
```

```ts
// CJS
// ./routes/Route.ts
const {
	ApplicationRegistry,
	ApplicationRequest,
	ApplicationResponse,
	ApplicationRoute,
	Methods,
} = require('@bracketed/jova.js/types');

export class Route {
	public registerApplicationRoute(registry: ApplicationRegistry): ApplicationRoute {
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
```
