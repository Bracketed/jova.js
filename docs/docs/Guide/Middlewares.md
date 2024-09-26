# Middlewares

Put your middlewares into the `/middlewares` directory of your Jova application.

## Middleware Boilerplates

```ts
// ESM
// ./middlewares/Middleware.ts
import {
	ApplicationNextFunction,
	ApplicationRequest,
	ApplicationResponse,
	MiddlewareController,
	MiddlewareOptions,
} from '@bracketed/jova.js/types';

export class Middleware extends MiddlewareController {
	public override setApplicationMiddlewareOptions(): MiddlewareOptions {
		return {
			middlewareName: 'middleware',
			runsOnAllRoutes: true,
		};
	}

	public override async run(
		_request: ApplicationRequest,
		_response: ApplicationResponse,
		next: ApplicationNextFunction
	): Promise<ApplicationResponse | void> {
		this.logger.info('Connected to middleware!');
		return next();
	}
}
```

```ts
// CJS
// ./middlewares/Middleware.ts
const {
	ApplicationNextFunction,
	ApplicationRequest,
	ApplicationResponse,
	MiddlewareController,
	MiddlewareOptions,
} = require('@bracketed/jova.js/types');

export class Middleware extends MiddlewareController {
	public override setApplicationMiddlewareOptions(): MiddlewareOptions {
		return {
			middlewareName: 'middleware',
			runsOnAllRoutes: true,
		};
	}

	public override async run(
		_request: ApplicationRequest,
		_response: ApplicationResponse,
		next: ApplicationNextFunction
	): Promise<ApplicationResponse | void> {
		this.logger.info('Connected to middleware!');
		return next();
	}
}
```
