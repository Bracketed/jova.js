# Events

Put your event handlers into the `/events` directory of your Jova application.

## Event Handler Boilerplates

```ts
// ESM
// ./events/Event.ts
import { ApplicationEvent, EventController, EventListenerOptions } from '@bracketed/jova.js/types';

export class Event extends EventController {
	public override setApplicationEventOptions(): EventListenerOptions {
		return {
			type: ApplicationEvent.ALL,
		};
	}

	public override async run(_e: ApplicationEvent, ..._args: any[]) {
		return;
	}
}
```

```ts
// CJS
// ./events/Event.ts
const { ApplicationEvent, EventController, EventListenerOptions } = require('@bracketed.jova.js/types');

export class Event extends EventController {
	public override setApplicationEventOptions(): EventListenerOptions {
		return {
			type: ApplicationEvent.ALL,
		};
	}

	public override async run(_e: ApplicationEvent, ..._args: any[]) {
		return;
	}
}
```
