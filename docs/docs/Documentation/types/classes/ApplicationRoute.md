# Class: ApplicationRoute

Description placeholder

 ApplicationRoute

## Constructors

### new ApplicationRoute()

> **new ApplicationRoute**(`registry`): [`ApplicationRoute`](ApplicationRoute.md)

Creates an instance of ApplicationRoute.

#### Parameters

• **registry**: [`ApplicationRegistry`](ApplicationRegistry.md)

#### Returns

[`ApplicationRoute`](ApplicationRoute.md)

#### Defined in

[registry/types/Routes/AppRouteType.ts:31](https://github.com/Bracketed/jova.js/blob/2f92fdba02fb19f5694e65f757c95f41b8415e1b/src/registry/types/Routes/AppRouteType.ts#L31)

## Methods

### getApplicationRoute()

> **getApplicationRoute**(): `object`

Gets the Routes's Details.

#### Returns

`object`

##### basePathOverride

> **basePathOverride**: `null` \| `string`

##### handler

> **handler**: [`RouteHandler`](../type-aliases/RouteHandler.md)

##### method

> **method**: [`Methods`](../http/RequestMethods/enumerations/Methods.md)

##### middlewares

> **middlewares**: [`MiddlewareHandler`](../type-aliases/MiddlewareHandler.md)[]

##### route

> **route**: `string`

#### Defined in

[registry/types/Routes/AppRouteType.ts:147](https://github.com/Bracketed/jova.js/blob/2f92fdba02fb19f5694e65f757c95f41b8415e1b/src/registry/types/Routes/AppRouteType.ts#L147)

***

### setHandler()

> **setHandler**(`handler`): `this`

Set the handler for your route, this handles incoming requests for the method defined with `setMethod`.

#### Parameters

• **handler**: [`RouteHandler`](../type-aliases/RouteHandler.md)

#### Returns

`this`

#### Default

```ts
// Default is an empty handler instance.
```

#### Example

```ts
this.setHandler(this.run)
```

#### Defined in

[registry/types/Routes/AppRouteType.ts:71](https://github.com/Bracketed/jova.js/blob/2f92fdba02fb19f5694e65f757c95f41b8415e1b/src/registry/types/Routes/AppRouteType.ts#L71)

***

### setMethod()

> **setMethod**(`method`): `this`

Set the method of your route.

#### Parameters

• **method**: [`Methods`](../http/RequestMethods/enumerations/Methods.md)

#### Returns

`this`

#### Default

```ts
Methods.ALL // Accepts any request on any method
```

#### Example

```ts
this.setMethod(Methods.GET)
```

#### Defined in

[registry/types/Routes/AppRouteType.ts:58](https://github.com/Bracketed/jova.js/blob/2f92fdba02fb19f5694e65f757c95f41b8415e1b/src/registry/types/Routes/AppRouteType.ts#L58)

***

### setRequiredHeaders()

> **setRequiredHeaders**(`headers`): `this`

Set required headers for your route, this enables a route-specific middleware for managing required headers.

#### Parameters

• **headers**: `string`[]

#### Returns

`this`

#### Default

```ts
[] // No required headers.
```

#### Example

```ts
this.setRequiredHeaders(['Authorisation', 'Cookie'])
```

#### Defined in

[registry/types/Routes/AppRouteType.ts:112](https://github.com/Bracketed/jova.js/blob/2f92fdba02fb19f5694e65f757c95f41b8415e1b/src/registry/types/Routes/AppRouteType.ts#L112)

***

### setRouteMiddlewares()

> **setRouteMiddlewares**(`middlewares`): `this`

Set the middlewares for your route.

Includes all globally running middlewares by default.

Define these middlewares using your `middlewares` dir.

#### Parameters

• **middlewares**: `string`[]

#### Returns

`this`

#### Default

```ts
[] // No middlewares by default or no middlewares with middlewares running on all routes.
```

#### Example

```ts
this.setRouteMiddlewares(['authorisationMiddleware'])
```

#### Defined in

[registry/types/Routes/AppRouteType.ts:88](https://github.com/Bracketed/jova.js/blob/2f92fdba02fb19f5694e65f757c95f41b8415e1b/src/registry/types/Routes/AppRouteType.ts#L88)

***

### setRouteName()

> **setRouteName**(`route`): `this`

Set the route name.

This works with parameters too, works with anything that can go into the first perameter of a request handler.

#### Parameters

• **route**: `string`

#### Returns

`this`

#### Default

```ts
'' // Default route is just the root
```

#### Example

```ts
this.setRouteName('/api/astronauts')
```

#### Defined in

[registry/types/Routes/AppRouteType.ts:45](https://github.com/Bracketed/jova.js/blob/2f92fdba02fb19f5694e65f757c95f41b8415e1b/src/registry/types/Routes/AppRouteType.ts#L45)

***

### useBasePathOverride()

> **useBasePathOverride**(`basePath`): `this`

Enable the override for the `basePath` option in the `JovaServer` instance config.

#### Parameters

• **basePath**: `string`

#### Returns

`this`

#### Default

```ts
null // Use default basePath of '', also means disabled.
```

#### Example

```ts
this.useBasePathOverride('/api/iss')
```

#### Defined in

[registry/types/Routes/AppRouteType.ts:125](https://github.com/Bracketed/jova.js/blob/2f92fdba02fb19f5694e65f757c95f41b8415e1b/src/registry/types/Routes/AppRouteType.ts#L125)
