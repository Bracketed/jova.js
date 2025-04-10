import type { ApplicationEvent, EventHandler } from '../index';

export interface Event {
	event: ApplicationEvent | 'mount' | 'error' | 'any' | 'route' | 'ready';
	handler: EventHandler;
}
