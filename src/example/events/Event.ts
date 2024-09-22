import { ApplicationEvent, ApplicationListener, ApplicationRegistry, EventController } from '../../types/index.js';

export class Event extends EventController {
	public override registerApplicationEvent(registry: ApplicationRegistry): ApplicationListener {
		return registry.registerApplicationEvent((event) =>
			event //
				.setEventType(ApplicationEvent.ALL)
				.setHandler(this.run)
		);
	}

	public override async run(_e: ApplicationEvent, ..._args: any[]) {
		console.log(this);
		return;
	}
}
