import { Logger } from '@bracketed/logger';
import { HandlerType } from '../../../decorators/index';
import { container, type Container } from '../../../shared/index';
import { ApplicationEvent, type EventListenerOptions, type LoggerOptions } from '../../index';

/**
 * @name EventController
 * @description The Event Controller, The base class for `Event` which is used in event files.
 * @module Types
 * @class EventController
 */
export class EventController {
	/**
	 * @name container
	 * @description The process container.
	 * @constant
	 * @readonly
	 */
	protected readonly container: Container = container;
	/**
	 * @name Logger
	 * @description
	 * The Logger for event files.
	 *
	 * **Prefixed automatically with `ApplicationEvent`.**
	 * @readonly
	 * @constant
	 */
	protected readonly logger: Logger;
	/**
	 * @name type
	 * @description The type for the `EventController` class, this is for when processing controllers marked with a `AUTO` type in deployment.
	 * @readonly
	 * @constant
	 * @type string
	 */
	public readonly type: HandlerType = HandlerType.EVENT;

	constructor(logger: LoggerOptions) {
		this.logger = new Logger({ ...logger, prefix: 'ApplicationEvent' });

		this.run = this.run.bind(this);
	}

	/**
	 * @name run()
	 *
	 * @description
	 * The run function for this event, this function cannot be redefined to use another name, but only the content within the function.
	 *
	 * For listeners listening on `ApplicationEvent.ALL`, the first parameter is the event that was emitted, followed by any argument for that event.
	 *
	 * Placeholder run function if nothing is defined:
	 *
	 * @example
	 * return;
	 *
	 * @public
	 * @function
	 */
	public run(..._args: any[]): Promise<any | void> | any | void {
		return;
	}

	/**
	 * @name setApplicationEventOptions()
	 *
	 * @description
	 * Set the details for this event.
	 *
	 * @example
	 * // Default Event Config
	 * return {
	 * 		type: ApplicationEvent.ALL,
	 * };
	 *
	 * @public
	 * @function
	 */
	public setApplicationEventOptions(): EventListenerOptions {
		return {
			type: ApplicationEvent.ALL,
		};
	}
}
