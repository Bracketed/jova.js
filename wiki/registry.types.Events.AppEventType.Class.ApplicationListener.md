[Jova.js by Bracketed Softworks v1.0.0](../wiki/modules) / [registry/types/Events/AppEventType](../wiki/registry.types.Events.AppEventType) / ApplicationListener

# Class: ApplicationListener

An Application Event Listener.

 ApplicationListener

## Constructors

### new ApplicationListener()

> **new ApplicationListener**(): [`ApplicationListener`](../wiki/registry.types.Events.AppEventType.Class.ApplicationListener)

#### Returns

[`ApplicationListener`](../wiki/registry.types.Events.AppEventType.Class.ApplicationListener)

## Methods

### getApplicationEvent()

> **getApplicationEvent**(): `object`

Gets the Event Listener's Details.

#### Returns

`object`

##### event

> **event**: [`ApplicationEvent`](../wiki/types.JovaEvents.Enumeration.ApplicationEvent)

##### handler

> **handler**: [`EventHandler`](../wiki/registry.types.Events.EventHandlerType.TypeAlias.EventHandler)

#### Defined in

[registry/types/Events/AppEventType.ts:47](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/registry/types/Events/AppEventType.ts#L47)

***

### setEventType()

> **setEventType**(`type`): `this`

Set the event type for the event listener.

#### Parameters

• **type**: [`ApplicationEvent`](../wiki/types.JovaEvents.Enumeration.ApplicationEvent)

#### Returns

`this`

#### Example

```ts
this.setEventType(ApplicationEvent.ALL)
```

#### Default

```ts
ApplicationEvent.ALL
```

#### Defined in

[registry/types/Events/AppEventType.ts:23](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/registry/types/Events/AppEventType.ts#L23)

***

### setHandler()

> **setHandler**(`handler`): `this`

Set the handler callback for the event listener.

#### Parameters

• **handler**: [`EventHandler`](../wiki/registry.types.Events.EventHandlerType.TypeAlias.EventHandler)

#### Returns

`this`

#### Example

```ts
this.setHandler(this.run)
```

#### Defined in

[registry/types/Events/AppEventType.ts:36](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/registry/types/Events/AppEventType.ts#L36)
