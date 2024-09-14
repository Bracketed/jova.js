import { ApplicationEvent, ApplicationListener, ApplicationRegistry } from '../../index.js';

export class Event {
	public registerApplicationEvent(registry: ApplicationRegistry): ApplicationListener {
		return registry.registerApplicationEvent((event) =>
			event //
				.setEventType(ApplicationEvent.ALL)
				.setHandler(this.run)
		);
	}

	public async run(e: ApplicationEvent, ..._args: any[]) {
		console.log(e);
		return;
	}
}
