import { type HandlerOptions, HandlerType } from './DecoratorTypes';

const handlerMetadata = new WeakMap<Function, HandlerOptions>();

/**
 * @name SetHandlerOptions
 * @description Set the options for a handler.
 *
 * @module Decorators
 * @function
 * @private
 */
export function setHandlerOptions<T extends HandlerOptions>(target: Function, options: T): void {
	handlerMetadata.set(target, options);
}

/**
 * @name GetHandlerOptions
 * @description Get options from a handler.
 *
 * @module Decorators
 * @function
 * @private
 */
export function getHandlerOptions<T extends HandlerOptions>(target: Function): T {
	const Metadata = handlerMetadata.get(target) as T | undefined;

	const defaults = {
		type: HandlerType.AUTO,
		enabled: true,
		handler: undefined,

		...Metadata,
	} as T;

	return defaults;
}
