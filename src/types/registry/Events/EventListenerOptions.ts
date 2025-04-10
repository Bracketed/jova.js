import { ApplicationEvent } from '../../jova/Events';

/**
 * @name EventListenerOptions
 * @description Event Listener Options.
 * @module Types
 * @interface
 */
export interface EventListenerOptions {
	/**
	 * @name type
	 * @description
	 * The event Listener type.
	 *
	 * @type {ApplicationEvent}
	 */
	type: ApplicationEvent | 'mount' | 'error' | 'any' | 'route' | 'ready';
}
