import { Express, Locals } from '@bracketed/express';
import { Logger } from '@bracketed/logger';
import { ApplicationEvent, EventListenerOptions } from '../../../types/index.js';
import { UtilitiesType } from '../../../utilities/index.js';

/**
 * The Event Controller, The base class for `Event` which is used in event files.
 *
 * @class EventController
 */
export class EventController {
	/**
	 * The Express Application at the origin of the Jova Server.
	 */
	protected readonly application: Express;
	/**
	 * The Logger at the origin of the Jova Server.
	 */
	protected readonly logger: Logger;
	/**
	 * Utilities for routes.
	 */
	protected readonly utilities: UtilitiesType;
	/**
	 * The Locals defined in JovaServer.
	 */
	protected readonly container: Record<string, any> & Locals;

	constructor(
		application: Express,
		container: Record<string, any> & Locals,
		logger: Logger,
		utilities: UtilitiesType
	) {
		this.application = application;
		this.logger = logger;
		this.utilities = utilities;
		this.container = container;

		this.run = this.run.bind(this);
	}

	/**
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
	 */
	public run(..._args: any[]): Promise<any | void> | any | void {
		return;
	}

	/**
	 * Set the details for this event.
	 *
	 * @example
	 * // Default Event Config
	 * return {
	 * 		type: ApplicationEvent.ALL,
	 * };
	 *
	 * @public
	 */
	public setApplicationEventOptions(): EventListenerOptions {
		return {
			type: ApplicationEvent.ALL,
		};
	}
}
