[Jova.js by Bracketed Softworks v1.0.0](../wiki/modules) / [registry/types/Routes/AppRouteType](../wiki/registry.types.Routes.AppRouteType) / ApplicationRoute

# Class: ApplicationRoute

Description placeholder

 ApplicationRoute

## Constructors

### new ApplicationRoute()

> **new ApplicationRoute**(`registry`): [`ApplicationRoute`](../wiki/registry.types.Routes.AppRouteType.Class.ApplicationRoute)

Creates an instance of ApplicationRoute.

#### Parameters

• **registry**: [`Registry`](../wiki/registry.Registry.Class.Registry)

#### Returns

[`ApplicationRoute`](../wiki/registry.types.Routes.AppRouteType.Class.ApplicationRoute)

#### Defined in

[registry/types/Routes/AppRouteType.ts:32](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/registry/types/Routes/AppRouteType.ts#L32)

## Methods

### getApplicationRoute()

> **getApplicationRoute**(): `object`

Gets the Routes's Details.

#### Returns

`object`

##### basePathOverride

> **basePathOverride**: `null` \| `string`

##### handler

> **handler**: [`RouteHandler`](../wiki/registry.types.Routes.RouteHandlerType.TypeAlias.RouteHandler)

##### method

> **method**: [`Methods`](../wiki/types.http.RequestMethods.Enumeration.Methods)

##### middlewares

> **middlewares**: [`MiddlewareHandler`](../wiki/registry.types.Middlewares.MiddlewareHandlerType.TypeAlias.MiddlewareHandler)[]

##### route

> **route**: `string`

#### Defined in

[registry/types/Routes/AppRouteType.ts:155](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/registry/types/Routes/AppRouteType.ts#L155)

***

### setHandler()

> **setHandler**(`handler`): `this`

Set the handler for your route, this handles incoming requests for the method defined with `setMethod`.

#### Parameters

• **handler**: [`RouteHandler`](../wiki/registry.types.Routes.RouteHandlerType.TypeAlias.RouteHandler)

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

[registry/types/Routes/AppRouteType.ts:75](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/registry/types/Routes/AppRouteType.ts#L75)

***

### setMethod()

> **setMethod**(`method`): `this`

Set the method of your route.

#### Parameters

• **method**: [`Methods`](../wiki/types.http.RequestMethods.Enumeration.Methods)

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

[registry/types/Routes/AppRouteType.ts:61](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/registry/types/Routes/AppRouteType.ts#L61)

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

[registry/types/Routes/AppRouteType.ts:118](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/registry/types/Routes/AppRouteType.ts#L118)

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

[registry/types/Routes/AppRouteType.ts:93](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/registry/types/Routes/AppRouteType.ts#L93)

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

[registry/types/Routes/AppRouteType.ts:47](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/registry/types/Routes/AppRouteType.ts#L47)

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

[registry/types/Routes/AppRouteType.ts:132](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/registry/types/Routes/AppRouteType.ts#L132)
