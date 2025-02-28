import 'reflect-metadata';
import { Handlers } from '../handlers/index';

function createClassDecorator<TFunction extends (...args: any[]) => void>(fn: TFunction): ClassDecorator {
	return fn;
}

/**
 * Apply options to a handler.
 *
 * @public
 * @param options
 * @example
 * import { ApplicationRegistry, ApplicationRequest, ApplicationResponse, ApplicationRoute, Methods, RouteController } from '@bracketed/jova.js/types';
 * import { Handlers } from '@bracketed/jova.js';
 * import { ApplyHandlerOptions } from '@bracketed/jova.js/decorators';
 *
 * ⁣@ApplyHandlerOptions<Handlers.Options>({
 * 	type: Handlers.Type.ROUTE,
 * 	enabled: true,
 * })
 * export class Route extends RouteController {
 * 	public override registerApplicationRoutes(registry: ApplicationRegistry): ApplicationRoute {
 * 		return registry.registerApplicationRoutes((route) =>
 * 			route //
 * 				.setRouteName('')
 * 				.setMethod(Methods.GET)
 * 		);
 * 	}
 *
 * 	public override async run(request: ApplicationRequest, response: ApplicationResponse): Promise<ApplicationResponse | void> {
 * 		this.logger.info('Recieved request for', request.baseUrl);
 * 		return response.status(200).json({ message: 'Hello World!' });
 * 	}
 * }
 */
export function ApplyHandlerOptions<T extends Handlers.Options>(options: T): ClassDecorator {
	return createClassDecorator((target) => {
		Reflect.defineMetadata('handler:options', options, target);
	});
}
