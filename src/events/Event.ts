import { JovaEvent } from 'src/types/JovaEvents.js';
import { Registry } from '../registry/Registry.js';
import { AppEvent as ApplicationEvent } from '../registry/types/Events/AppEventType.js';

export class Event {
	public registerApplicationEvent(registry: Registry): ApplicationEvent {
		return registry.registerApplicationEvent((event) =>
			event //
				.setEventType(JovaEvent.READY)
				.setHandler(this.run)
				.setOnce(false)
		);
	}

	public async run() {
		return;
	}
}
