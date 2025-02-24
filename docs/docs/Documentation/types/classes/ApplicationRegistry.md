# Class: ApplicationRegistry

The Registry class, this allows the Jova Server to register, use and manage its content.

 Registry

## Constructors

### new ApplicationRegistry()

> **new ApplicationRegistry**(`options`): [`ApplicationRegistry`](ApplicationRegistry.md)

Creates Registry a instance.

#### Parameters

• **options**: `RegistryOptions`

#### Returns

[`ApplicationRegistry`](ApplicationRegistry.md)

#### Defined in

[registry/Registry.ts:33](https://github.com/Bracketed/jova.js/blob/2f92fdba02fb19f5694e65f757c95f41b8415e1b/src/registry/Registry.ts#L33)

## Methods

### flush()

> **flush**(): `void`

Clear all registries.

#### Returns

`void`

#### Defined in

[registry/Registry.ts:166](https://github.com/Bracketed/jova.js/blob/2f92fdba02fb19f5694e65f757c95f41b8415e1b/src/registry/Registry.ts#L166)

***

### getEvents()

> **getEvents**(): `object`[]

Gets all the routes currently attached to the registry.

#### Returns

`object`[]

#### Defined in

[registry/Registry.ts:126](https://github.com/Bracketed/jova.js/blob/2f92fdba02fb19f5694e65f757c95f41b8415e1b/src/registry/Registry.ts#L126)

***

### getMiddlewares()

> **getMiddlewares**(): `object`[]

Gets all the middlewares currently attached to the registry.

#### Returns

`object`[]

#### Defined in

[registry/Registry.ts:145](https://github.com/Bracketed/jova.js/blob/2f92fdba02fb19f5694e65f757c95f41b8415e1b/src/registry/Registry.ts#L145)

***

### getRoutes()

> **getRoutes**(): `object`[]

Gets all the routes currently attached to the registry.

#### Returns

`object`[]

#### Defined in

[registry/Registry.ts:102](https://github.com/Bracketed/jova.js/blob/2f92fdba02fb19f5694e65f757c95f41b8415e1b/src/registry/Registry.ts#L102)

***

### registerApplicationEvent()

> **registerApplicationEvent**(`configureEvent`): [`ApplicationListener`](ApplicationListener.md)

Register an app event to the registry, does not work if the Jova App has already been initialised, but will work if the app has not.

#### Parameters

• **configureEvent**

#### Returns

[`ApplicationListener`](ApplicationListener.md)

#### Example

```ts
return registry.registerApplicationEvent((event) =>
		event //
			.setEventType(ApplicationEvent.READY)
			.setHandler(this.run)
	);
```

#### Defined in

[registry/Registry.ts:68](https://github.com/Bracketed/jova.js/blob/2f92fdba02fb19f5694e65f757c95f41b8415e1b/src/registry/Registry.ts#L68)

***

### registerApplicationMiddleware()

> **registerApplicationMiddleware**(`configureMiddleware`): [`ApplicationMiddleware`](ApplicationMiddleware.md)

Register an app middleware to the registry, does not work if the Jova App has already been initialised, but will work if the app has not.

#### Parameters

• **configureMiddleware**

#### Returns

[`ApplicationMiddleware`](ApplicationMiddleware.md)

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

[registry/Registry.ts:89](https://github.com/Bracketed/jova.js/blob/2f92fdba02fb19f5694e65f757c95f41b8415e1b/src/registry/Registry.ts#L89)

***

### registerApplicationRoute()

> **registerApplicationRoute**(`configureRoute`): [`ApplicationRoute`](ApplicationRoute.md)

Register an app route to the registry, does not work if the Jova App has already been initialised, but will work if the app has not.

#### Parameters

• **configureRoute**

#### Returns

[`ApplicationRoute`](ApplicationRoute.md)

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

[registry/Registry.ts:50](https://github.com/Bracketed/jova.js/blob/2f92fdba02fb19f5694e65f757c95f41b8415e1b/src/registry/Registry.ts#L50)
