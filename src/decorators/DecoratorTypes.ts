import type { EventController, MiddlewareController, RouteController } from '../types/index';

/**
 * @name Options
 * @description Decorative options for Handlers, customise the behaviour of a specific handler.
 *
 * @module Decorators
 * @public
 * @interface
 */
export type HandlerOptions = AutoTypeOptions | NonAutoTypeOptions;

interface BaseOptions {
	/**
	 * @name enabled
	 * @description
	 * Enable or disable a handler so it does not get ran or processed at runtime.
	 *
	 * @default true
	 * @type boolean
	 * @public
	 */
	enabled?: boolean;
}

interface AutoTypeOptions extends BaseOptions {
	/**
	 * @name type
	 * @description
	 * The type of handler this is, all handlers default to
	 * ```typescript
	 * Handlers.Type.AUTO
	 * ```
	 *
	 * @public
	 * @type Handlers.Type
	 */
	type?: HandlerType.AUTO | 'auto';
	/**
	 * @name targetClass
	 * @description
	 * Supply the target handler this decorator is associated with, this is REQUIRED should `type` not be `Handlers.Type.AUTO`.
	 *
	 * @type Controller
	 * @public
	 */
	handler?: HandlerController;
}

interface NonAutoTypeOptions extends BaseOptions {
	/**
	 * @name type
	 * @description
	 * The type of handler this is, all handlers default to
	 * ```typescript
	 * Handlers.Type.AUTO
	 * ```
	 *
	 * @public
	 * @type Handlers.Type
	 */
	type: Exclude<HandlerType, HandlerType.AUTO> | 'route' | 'middleware' | 'event';
	/**
	 * @name targetClass
	 * @description
	 * Supply the target handler this decorator is associated with, this is REQUIRED should `type` not be `Handlers.Type.AUTO`.
	 *
	 * @type Controller
	 * @public
	 */
	handler: HandlerController;
}

/**
 * @name HandlerController
 * @description A dynamic type for all controllers.
 *
 * @module Decorators
 * @public
 * @type HandlerController
 */
export type HandlerController = typeof MiddlewareController | typeof EventController | typeof RouteController;

/**
 * @name Type
 * @description Decorative options for Handlers, customise the type of a specific handler.
 *
 * @module Decorators
 * @public
 * @enum Type
 */
export enum HandlerType {
	/**
	 * @name Route
	 * @description Decorative options for Handlers, set a handler to be read as a route.
	 *
	 * @public
	 * @type string
	 */
	ROUTE = 'route',
	/**
	 * @name Middleware
	 * @description Decorative options for Handlers, set a handler to be read as a middleware.
	 *
	 * @public
	 * @type string
	 */
	MIDDLEWARE = 'middleware',
	/**
	 * @name Event
	 * @description Decorative options for Handlers, set a handler to be read as a event.
	 *
	 * @public
	 * @type string
	 */
	EVENT = 'event',
	/**
	 * @name Auto
	 * @description Decorative options for Handlers, set a handler to be read automatically, or for default exports.
	 *
	 * @public
	 * @type string
	 */
	AUTO = 'auto',
}
