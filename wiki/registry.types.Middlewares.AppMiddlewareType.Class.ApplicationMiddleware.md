[Jova.js by Bracketed Softworks v1.0.0](../wiki/modules) / [registry/types/Middlewares/AppMiddlewareType](../wiki/registry.types.Middlewares.AppMiddlewareType) / ApplicationMiddleware

# Class: ApplicationMiddleware

An Application Middleware.

 AppMiddleware

## Constructors

### new ApplicationMiddleware()

> **new ApplicationMiddleware**(): [`ApplicationMiddleware`](../wiki/registry.types.Middlewares.AppMiddlewareType.Class.ApplicationMiddleware)

#### Returns

[`ApplicationMiddleware`](../wiki/registry.types.Middlewares.AppMiddlewareType.Class.ApplicationMiddleware)

## Methods

### getApplicationMiddleware()

> **getApplicationMiddleware**(): `object`

Gets the Middleware's Details.

#### Returns

`object`

##### handler

> **handler**: [`MiddlewareHandler`](../wiki/registry.types.Middlewares.MiddlewareHandlerType.TypeAlias.MiddlewareHandler)

##### middleware

> **middleware**: `undefined` \| `string`

##### runsOnAllRoutes

> **runsOnAllRoutes**: `boolean`

#### Defined in

[registry/types/Middlewares/AppMiddlewareType.ts:73](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/registry/types/Middlewares/AppMiddlewareType.ts#L73)

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

[registry/types/Middlewares/AppMiddlewareType.ts:62](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/registry/types/Middlewares/AppMiddlewareType.ts#L62)

***

### setHandler()

> **setHandler**(`handler`): `this`

Set the callback function for your middleware.

#### Parameters

• **handler**: [`MiddlewareHandler`](../wiki/registry.types.Middlewares.MiddlewareHandlerType.TypeAlias.MiddlewareHandler)

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

[registry/types/Middlewares/AppMiddlewareType.ts:48](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/registry/types/Middlewares/AppMiddlewareType.ts#L48)

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

[registry/types/Middlewares/AppMiddlewareType.ts:33](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/registry/types/Middlewares/AppMiddlewareType.ts#L33)
