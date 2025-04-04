import 'reflect-metadata';
import { Handlers } from '../handlers/index';

/**
 * @name GetHandlerOptions
 * @description Apply options get options from a handler.
 *
 * @module Decorators
 * @private
 */
export function getHandlerOptions(target: any): Handlers.Options | undefined {
	const decoratedOptions: Handlers.Options | undefined = Reflect.getMetadata('handler:options', target);

	if (!decoratedOptions) return undefined;

	const options: Handlers.Options = {
		type: Handlers.Type.AUTO,
		enabled: true,
	};

	//console.log(decoratedOptions);

	if (decoratedOptions.enabled === false) options.enabled = false;
	if (decoratedOptions.type !== undefined || decoratedOptions.type !== Handlers.Type.AUTO)
		options.type = decoratedOptions.type;

	return options;
}
