# Class: ApplicationMiddleware

An Application Middleware.

 AppMiddleware

## Constructors

### new ApplicationMiddleware()

> **new ApplicationMiddleware**(): [`ApplicationMiddleware`](ApplicationMiddleware.md)

#### Returns

[`ApplicationMiddleware`](ApplicationMiddleware.md)

## Methods

### getApplicationMiddleware()

> **getApplicationMiddleware**(): `object`

Gets the Middleware's Details.

#### Returns

`object`

##### handler

> **handler**: [`MiddlewareHandler`](../type-aliases/MiddlewareHandler.md)

##### middleware

> **middleware**: `undefined` \| `string`

##### runsOnAllRoutes

> **runsOnAllRoutes**: `boolean`

#### Defined in

[registry/types/Middlewares/AppMiddlewareType.ts:68](https://github.com/Bracketed/jova.js/blob/2f92fdba02fb19f5694e65f757c95f41b8415e1b/src/registry/types/Middlewares/AppMiddlewareType.ts#L68)

***

### runOnAllRoutes()

> **runOnAllRoutes**(`active`): `this`

Determine if this middleware is a globally running middleware across your application, or local to any route that specifically uses it.

#### Parameters

• **active**: `boolean`

#### Returns

`this`

#### Default

```ts
false // Updates to true if setMiddlewareName is unset.
```

#### Example

```ts
this.runOnAllRoutes(false)
```

#### Defined in

[registry/types/Middlewares/AppMiddlewareType.ts:58](https://github.com/Bracketed/jova.js/blob/2f92fdba02fb19f5694e65f757c95f41b8415e1b/src/registry/types/Middlewares/AppMiddlewareType.ts#L58)

***

### setHandler()

> **setHandler**(`handler`): `this`

Set the callback function for your middleware.

#### Parameters

• **handler**: [`MiddlewareHandler`](../type-aliases/MiddlewareHandler.md)

#### Returns

`this`

#### Default

```ts
// Blank Handler
```

#### Example

```ts
this.setHandler(this.run)
```

#### Defined in

[registry/types/Middlewares/AppMiddlewareType.ts:45](https://github.com/Bracketed/jova.js/blob/2f92fdba02fb19f5694e65f757c95f41b8415e1b/src/registry/types/Middlewares/AppMiddlewareType.ts#L45)

***

### setMiddlewareName()

> **setMiddlewareName**(`name`): `this`

Set the name of your middleware, this is used to enable the middleware in certain routes.

#### Parameters

• **name**: `string`

#### Returns

`this`

#### Default

```ts
undefined // If no name is set or is set to "", runsOnAllRoutes will default to true and make it a global middleware.
```

#### Example

```ts
this.setMiddlewareName('authorisationMiddleware')
```

#### Defined in

[registry/types/Middlewares/AppMiddlewareType.ts:31](https://github.com/Bracketed/jova.js/blob/2f92fdba02fb19f5694e65f757c95f41b8415e1b/src/registry/types/Middlewares/AppMiddlewareType.ts#L31)
