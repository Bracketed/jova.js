import { ApplicationEvent } from '../../jova/Events.js';

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
