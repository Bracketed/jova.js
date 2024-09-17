import { ApplicationEvent, EventHandler } from '../../../types/index.js';

/**
 * An Application Event Listener.
 *
 
 * @class ApplicationListener
 * @typedef {ApplicationListener}
 */
export class ApplicationListener {
	private type: ApplicationEvent | undefined;
	private handler: EventHandler = async (..._args: any[]) => {};

	/**
	 * Set the event type for the event listener.
	 *
	 * @public
	 * @param {ApplicationEvent} type
	 * @example this.setEventType(ApplicationEvent.ALL)
	 * @default ApplicationEvent.ALL
	 * @returns {this}
	 */
	public setEventType(type: ApplicationEvent): this {
		this.type = type;
		return this;
	}

	/**
	 * Set the handler callback for the event listener.
	 *
	 * @public
	 * @param {EventHandler} handler
	 * @example this.setHandler(this.run)
	 * @returns {this}
	 */
	public setHandler(handler: EventHandler): this {
		this.handler = handler;
		return this;
	}

	/**
	 * Gets the Event Listener's Details.
	 *
	 * @public
	 * @returns {{ event: ApplicationEvent; handler: EventHandler; }}
	 */
	public getApplicationEvent(): {
		event: ApplicationEvent;
		handler: EventHandler;
	} {
		if (!this.type) this.type = ApplicationEvent.ALL;

		return {
			event: this.type,
			handler: this.handler,
		};
	}
}
