[Jova.js by Bracketed Softworks v1.0.0](../wiki/modules) / [example/routes/Index](../wiki/example.routes.Index) / Route

# Class: Route

## Constructors

### new Route()

> **new Route**(): [`Route`](../wiki/example.routes.Index.Class.Route)

#### Returns

[`Route`](../wiki/example.routes.Index.Class.Route)

## Methods

### registerApplicationRoutes()

> **registerApplicationRoutes**(`registry`): [`ApplicationRoute`](../wiki/registry.types.Routes.AppRouteType.Class.ApplicationRoute)

#### Parameters

• **registry**: [`Registry`](../wiki/registry.Registry.Class.Registry)

#### Returns

[`ApplicationRoute`](../wiki/registry.types.Routes.AppRouteType.Class.ApplicationRoute)

#### Defined in

[example/routes/Index.ts:10](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/example/routes/Index.ts#L10)

***

### run()

> **run**(`request`, `response`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void` \| `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>\>

#### Parameters

• **request**: `Request`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void` \| `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>\>

#### Defined in

[example/routes/Index.ts:19](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/example/routes/Index.ts#L19)
