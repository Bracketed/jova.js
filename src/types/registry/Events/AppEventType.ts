import { ApplicationEvent, EventHandler } from '../../index.js';

/**
 * An Application Event Listener.
 *
 
 * @class ApplicationListener
 */
export class ApplicationListener {
	private type: ApplicationEvent | undefined;
	private handler: EventHandler = async (..._args: any[]) => {};

	/**
	 * Set the event type for the event listener.
	 *
	 * @public
	 * @param type
	 * @example this.setEventType(ApplicationEvent.ALL)
	 * @default ApplicationEvent.ALL
	 */
	public setEventType(type: ApplicationEvent): this {
		this.type = type;
		return this;
	}

	/**
	 * Set the handler callback for the event listener.
	 *
	 * @public
	 * @param handler
	 * @example this.setHandler(this.run)
	 */
	public setHandler(handler: EventHandler): this {
		this.handler = handler;
		return this;
	}

	/**
	 * Gets the Event Listener's Details.
	 *
	 * @public
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
