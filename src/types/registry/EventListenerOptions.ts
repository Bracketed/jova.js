import { ApplicationEvent } from '../jova/Events';

/**
 * Event Listener Options.
 *
 * @interface
 */
export interface EventListenerOptions {
	/**
	 * The event Listener type.
	 *
	 * @type {ApplicationEvent}
	 */
	type: ApplicationEvent;
}
