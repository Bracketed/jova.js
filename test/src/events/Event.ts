import { ApplyHandlerOptions } from '@bracketed/jova.js/decorators';
import { ApplicationEvent, EventController, EventListenerOptions } from '@bracketed/jova.js/types';
import { Handlers } from '@bracketed/jova.js/utilities';

@ApplyHandlerOptions<Handlers.Options>({
	type: Handlers.Type.EVENT,
	enabled: true,
})
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
