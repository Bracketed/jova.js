import { ApplicationEvent, ApplicationListener, ApplicationRegistry } from '../..';

export class Event {
	public registerApplicationEvent(registry: ApplicationRegistry): ApplicationListener {
		return registry.registerApplicationEvent((event) =>
			event //
				.setEventType(ApplicationEvent.READY)
				.setHandler(this.run)
		);
	}

	public async run() {
		return;
	}
}
