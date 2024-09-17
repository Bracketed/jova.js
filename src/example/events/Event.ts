import { ApplicationEvent, ApplicationListener, ApplicationRegistry } from '../../types/index.js';

export class Event {
	public registerApplicationEvent(registry: ApplicationRegistry): ApplicationListener {
		return registry.registerApplicationEvent((event) =>
			event //
				.setEventType(ApplicationEvent.ALL)
				.setHandler(this.run)
		);
	}

	public async run(e: ApplicationEvent, ...args: any[]) {
		console.log('Event Hit:', e);
		console.log(...args);
		return;
	}
}
