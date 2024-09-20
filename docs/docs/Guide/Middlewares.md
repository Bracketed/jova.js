# Middlewares

Put your middlewares into the `/middlewares` directory of your Jova application.

## Middleware Boilerplates

```ts
// ESM
// ./middlewares/Middleware.ts
import {
	ApplicationMiddleware,
	ApplicationNextFunction,
	ApplicationRegistry,
	ApplicationRequest,
	ApplicationResponse,
} from '@bracketed/jova.js/types';

export class Middleware {
	public registerApplicationMiddleware(registry: ApplicationRegistry): ApplicationMiddleware {
		return registry.registerApplicationMiddleware((middleware) =>
			middleware //
				.setMiddlewareName('middleware')
				.setHandler(this.run)
				.runOnAllRoutes(false)
		);
	}

	public async run(
		_request: ApplicationRequest,
		_response: ApplicationResponse,
		next: ApplicationNextFunction
	): Promise<ApplicationResponse | void> {
		console.log('Connected to middleware!');
		return next();
	}
}
```

```ts
// CJS
// ./middlewares/Middleware.ts
const {
	ApplicationMiddleware,
	ApplicationNextFunction,
	ApplicationRegistry,
	ApplicationRequest,
	ApplicationResponse,
} = require('@bracketed/jova.js/types');

export class Middleware {
	public registerApplicationMiddleware(registry: ApplicationRegistry): ApplicationMiddleware {
		return registry.registerApplicationMiddleware((middleware) =>
			middleware //
				.setMiddlewareName('middleware')
				.setHandler(this.run)
				.runOnAllRoutes(false)
		);
	}

	public async run(
		_request: ApplicationRequest,
		_response: ApplicationResponse,
		next: ApplicationNextFunction
	): Promise<ApplicationResponse | void> {
		console.log('Connected to middleware!');
		return next();
	}
}
```
