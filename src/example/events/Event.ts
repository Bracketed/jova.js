import { ApplicationEvent, EventController, EventListenerOptions } from '../../types/index.js';

export class Event extends EventController {
	public override setApplicationEventOptions(): EventListenerOptions {
		return {
			type: ApplicationEvent.ALL,
		};
	}

	public override async run(_e: ApplicationEvent, ..._args: any[]) {
		return;
	}
}
