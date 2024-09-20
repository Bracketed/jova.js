# Events

Put your event handlers into the `/events` directory of your Jova application.

## Event Handler Boilerplates

```ts
// ESM
// ./events/Event.ts
import { ApplicationEvent, ApplicationListener, ApplicationRegistry } from '@bracketed.jova.js/types';

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
```

```ts
// CJS
// ./events/Event.ts
const { ApplicationEvent, ApplicationListener, ApplicationRegistry } = require('@bracketed.jova.js/types');

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
```
