import { ApplicationEvent, type EventHandler } from '../../index';

/**
 * @name ApplicationListener
 * @description An Application Event Listener configuration object.
 * @module Types
 * @class ApplicationListener
 */
export class ApplicationListener {
	private type: ApplicationEvent | 'mount' | 'error' | 'any' | 'route' | 'ready' = ApplicationEvent.ALL;
	private handler: EventHandler = async (..._args: any[]) => {};

	constructor() {
		Object.defineProperty(this, 'setEventType', {
			value: this.setEventType,
			writable: false,
			configurable: false,
		});

		Object.defineProperty(this, 'setType', {
			value: this.setType,
			writable: false,
			configurable: false,
		});

		Object.defineProperty(this, 'setHandler', {
			value: this.setHandler,
			writable: false,
			configurable: false,
		});

		Object.defineProperty(this, 'getApplicationEvent', {
			value: this.getApplicationEvent,
			writable: false,
			configurable: false,
		});
	}

	/**
	 * @name setEventType
	 * @deprecated Use `event.setType()` instead.
	 */
	public setEventType(type: ApplicationEvent | 'mount' | 'error' | 'any' | 'route' | 'ready'): this {
		this.type = type;
		return this;
	}

	/**
	 * @name setType
	 * @description Set the event type for the event listener.
	 *
	 * @public
	 * @function
	 * @param type
	 * @example this.setType(ApplicationEvent.ALL)
	 * @default ApplicationEvent.ALL
	 */
	public setType(type: ApplicationEvent | 'mount' | 'error' | 'any' | 'route' | 'ready'): this {
		this.type = type;
		return this;
	}

	/**
	 * @name setHandler
	 * @description Set the handler callback for the event listener.
	 *
	 * @public
	 * @function
	 * @param handler
	 * @example this.setHandler(this.run)
	 */
	public setHandler(handler: EventHandler): this {
		this.handler = handler;
		return this;
	}

	/**
	 * @name getApplicationEvent
	 * @description Gets the Event Listener's Details.
	 *
	 * @function
	 * @public
	 */
	public getApplicationEvent(): {
		event: ApplicationEvent | 'mount' | 'error' | 'any' | 'route' | 'ready';
		handler: EventHandler;
	} {
		return {
			event: this.type,
			handler: this.handler,
		};
	}
}
