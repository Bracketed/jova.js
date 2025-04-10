import { ApplyHandlerOptions, HandlerOptions, HandlerType } from '@bracketed/jova.js/decorators';
import { ApplicationEvent, EventController, EventListenerOptions } from '@bracketed/jova.js/types';

@ApplyHandlerOptions<HandlerOptions>({
	type: HandlerType.AUTO,
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
