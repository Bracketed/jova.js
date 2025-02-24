# Class: ApplicationListener

An Application Event Listener.

 ApplicationListener

## Constructors

### new ApplicationListener()

> **new ApplicationListener**(): [`ApplicationListener`](ApplicationListener.md)

#### Returns

[`ApplicationListener`](ApplicationListener.md)

## Methods

### getApplicationEvent()

> **getApplicationEvent**(): `object`

Gets the Event Listener's Details.

#### Returns

`object`

##### event

> **event**: [`ApplicationEvent`](../JovaEvents/enumerations/ApplicationEvent.md)

##### handler

> **handler**: [`EventHandler`](../type-aliases/EventHandler.md)

#### Defined in

[registry/types/Events/AppEventType.ts:43](https://github.com/Bracketed/jova.js/blob/2f92fdba02fb19f5694e65f757c95f41b8415e1b/src/registry/types/Events/AppEventType.ts#L43)

***

### setEventType()

> **setEventType**(`type`): `this`

Set the event type for the event listener.

#### Parameters

• **type**: [`ApplicationEvent`](../JovaEvents/enumerations/ApplicationEvent.md)

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

[registry/types/Events/AppEventType.ts:21](https://github.com/Bracketed/jova.js/blob/2f92fdba02fb19f5694e65f757c95f41b8415e1b/src/registry/types/Events/AppEventType.ts#L21)

***

### setHandler()

> **setHandler**(`handler`): `this`

Set the handler callback for the event listener.

#### Parameters

• **handler**: [`EventHandler`](../type-aliases/EventHandler.md)

#### Returns

`this`

#### Example

```ts
this.setHandler(this.run)
```

#### Defined in

[registry/types/Events/AppEventType.ts:33](https://github.com/Bracketed/jova.js/blob/2f92fdba02fb19f5694e65f757c95f41b8415e1b/src/registry/types/Events/AppEventType.ts#L33)
