import { container } from '../../shared/index';
import type { EventController, RegisterFunctionContext } from '../../types/index';
import { HandlerFunction } from '../BaseHandlerFunction';

export class RegisterFunction extends HandlerFunction {
	public override async run(Event: EventController, Context: RegisterFunctionContext) {
		const EventConfig = Event.setApplicationEventOptions();
		const EventInfo = container.registry!.registerApplicationEvent((event) =>
			event //
				.setEventType(EventConfig.type)
				.setHandler(Event.run)
		);

		return {
			message: `Registered Event: "${EventInfo.getApplicationEvent().event}" in ${Context.clock.stop().toString()}`,
		};
	}
}
