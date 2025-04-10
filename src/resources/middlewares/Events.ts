import EventEmitter from 'node:events';
import {
	ApplicationEvent,
	type ApplicationNextFunction,
	type ApplicationRequest,
	type ApplicationResponse,
} from '../../types/index';
import { BaseResourceLoader } from '../BaseResource';

export class ResourceLoader extends BaseResourceLoader {
	public override async load(emitter: EventEmitter) {
		const Events = this.registry!.getEvents();

		if (Events.length === 0) return;

		this.application?.use((r: ApplicationRequest, _r: ApplicationResponse, next?: ApplicationNextFunction) => {
			emitter.emit(ApplicationEvent.ROUTE, r);
			Events.forEach((eventListener) => {
				if (eventListener.event === ApplicationEvent.ROUTE) eventListener.handler(r);
				else if (eventListener.event === ApplicationEvent.ALL) eventListener.handler(ApplicationEvent.ROUTE, r);
			});
			return next!();
		});
		this.logger.info('Routing event Middleware listeners were set up!');
	}
}
