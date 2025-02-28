import 'reflect-metadata';
import { Handlers } from '../handlers/index';

/**
 * @name GetHandlerOptions
 * @description Apply options get options from a handler.
 *
 * @module Decorators
 * @private
 */
export function getHandlerOptions(target: any): Handlers.Options {
	const options: Handlers.Options = {
		type: Handlers.Type.AUTO,
		enabled: true,
	};

	const decoratedOptions: Handlers.Options = Reflect.getMetadata('handler:options', target);

	//console.log(decoratedOptions);

	if (decoratedOptions.enabled === false) options.enabled = false;
	if (decoratedOptions.type !== undefined || decoratedOptions.type !== Handlers.Type.AUTO)
		options.type = decoratedOptions.type;

	return options;
}
