import { JovaEvent } from 'src/types/JovaEvents.js';
import { EventHandler } from './EventHandlerType.js';

export class AppEvent {
	private type: JovaEvent | undefined;
	private once: boolean = false;
	private handler: EventHandler = async (..._args: any[]) => {};

	public setEventType(type: JovaEvent): this {
		this.type = type;
		return this;
	}

	public setHandler(handler: EventHandler): this {
		this.handler = handler;
		return this;
	}

	public setOnce(active: boolean): this {
		this.once = active;
		return this;
	}

	public getApplicationEvent() {
		if (!this.type) return null;

		return {
			event: this.type,
			handler: this.handler,
			once: this.once,
		};
	}
}
