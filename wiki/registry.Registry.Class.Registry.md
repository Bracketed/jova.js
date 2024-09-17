[Jova.js by Bracketed Softworks v1.0.0](../wiki/modules) / [registry/Registry](../wiki/registry.Registry) / Registry

# Class: Registry

The Registry class, this allows the Jova Server to register, use and manage its content.

 Registry

## Constructors

### new Registry()

> **new Registry**(`options`): [`Registry`](../wiki/registry.Registry.Class.Registry)

Creates Registry a instance.

#### Parameters

• **options**: `RegistryOptions`

#### Returns

[`Registry`](../wiki/registry.Registry.Class.Registry)

#### Defined in

[registry/Registry.ts:34](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/registry/Registry.ts#L34)

## Methods

### flush()

> **flush**(): `void`

Clear all registries.

#### Returns

`void`

#### Defined in

[registry/Registry.ts:174](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/registry/Registry.ts#L174)

***

### getEvents()

> **getEvents**(): `object`[]

Gets all the routes currently attached to the registry.

#### Returns

`object`[]

#### Defined in

[registry/Registry.ts:132](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/registry/Registry.ts#L132)

***

### getMiddlewares()

> **getMiddlewares**(): `object`[]

Gets all the middlewares currently attached to the registry.

#### Returns

`object`[]

#### Defined in

[registry/Registry.ts:152](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/registry/Registry.ts#L152)

***

### getRoutes()

> **getRoutes**(): `object`[]

Gets all the routes currently attached to the registry.

#### Returns

`object`[]

#### Defined in

[registry/Registry.ts:107](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/registry/Registry.ts#L107)

***

### registerApplicationEvent()

> **registerApplicationEvent**(`configureEvent`): [`ApplicationListener`](../wiki/registry.types.Events.AppEventType.Class.ApplicationListener)

Register an app event to the registry, does not work if the Jova App has already been initialised, but will work if the app has not.

#### Parameters

• **configureEvent**

#### Returns

[`ApplicationListener`](../wiki/registry.types.Events.AppEventType.Class.ApplicationListener)

#### Example

```ts
return registry.registerApplicationEvent((event) =>
		event //
			.setEventType(ApplicationEvent.READY)
			.setHandler(this.run)
	);
```

#### Defined in

[registry/Registry.ts:71](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/registry/Registry.ts#L71)

***

### registerApplicationMiddleware()

> **registerApplicationMiddleware**(`configureMiddleware`): [`ApplicationMiddleware`](../wiki/registry.types.Middlewares.AppMiddlewareType.Class.ApplicationMiddleware)

Register an app middleware to the registry, does not work if the Jova App has already been initialised, but will work if the app has not.

#### Parameters

• **configureMiddleware**

#### Returns

[`ApplicationMiddleware`](../wiki/registry.types.Middlewares.AppMiddlewareType.Class.ApplicationMiddleware)

#### Example

```ts
return registry.registerApplicationMiddleware((middleware) =>
		middleware //
			.setMiddlewareName('middleware')
			.setHandler(this.run)
			.runOnAllRoutes(false)
	);
```

#### Defined in

[registry/Registry.ts:93](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/registry/Registry.ts#L93)

***

### registerApplicationRoute()

> **registerApplicationRoute**(`configureRoute`): [`ApplicationRoute`](../wiki/registry.types.Routes.AppRouteType.Class.ApplicationRoute)

Register an app route to the registry, does not work if the Jova App has already been initialised, but will work if the app has not.

#### Parameters

• **configureRoute**

#### Returns

[`ApplicationRoute`](../wiki/registry.types.Routes.AppRouteType.Class.ApplicationRoute)

#### Example

```ts
return registry.registerApplicationRoute((route) =>
		route //
			.setRouteName('')
			.setMethod(Methods.GET)
			.setHandler(this.run)
	);
```

#### Defined in

[registry/Registry.ts:52](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/registry/Registry.ts#L52)
