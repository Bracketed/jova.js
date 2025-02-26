import type { EventController } from '../../../types/index';
import type { Stopwatch } from '../../stopwatch';
import { HandlerFunction } from '../function';

export class EventRegisterFunction extends HandlerFunction {
	public override async run(Event: EventController, Clock: Stopwatch) {
		const EventConfig = Event.setApplicationEventOptions();
		const EventInfo = this.registry.registerApplicationEvent((event) =>
			event //
				.setEventType(EventConfig.type)
				.setHandler(Event.run)
		);

		return {
			message: `Registered Event: "${EventInfo.getApplicationEvent().event}" in ${Clock.stop().toString()}`,
		};
	}
}
