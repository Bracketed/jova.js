[Jova.js by Bracketed Softworks v1.0.0](../wiki/modules) / [example/events/Event](../wiki/example.events.Event) / Event

# Class: Event

## Constructors

### new Event()

> **new Event**(): [`Event`](../wiki/example.events.Event.Class.Event)

#### Returns

[`Event`](../wiki/example.events.Event.Class.Event)

## Methods

### registerApplicationEvent()

> **registerApplicationEvent**(`registry`): [`ApplicationListener`](../wiki/registry.types.Events.AppEventType.Class.ApplicationListener)

#### Parameters

• **registry**: [`Registry`](../wiki/registry.Registry.Class.Registry)

#### Returns

[`ApplicationListener`](../wiki/registry.types.Events.AppEventType.Class.ApplicationListener)

#### Defined in

[example/events/Event.ts:4](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/example/events/Event.ts#L4)

***

### run()

> **run**(`e`, ...`args`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

#### Parameters

• **e**: [`ApplicationEvent`](../wiki/types.JovaEvents.Enumeration.ApplicationEvent)

• ...**args**: `any`[]

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

#### Defined in

[example/events/Event.ts:12](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/example/events/Event.ts#L12)
