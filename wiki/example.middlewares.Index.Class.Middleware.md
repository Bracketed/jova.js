[Jova.js by Bracketed Softworks v1.0.0](../wiki/modules) / [example/middlewares/Index](../wiki/example.middlewares.Index) / Middleware

# Class: Middleware

## Constructors

### new Middleware()

> **new Middleware**(): [`Middleware`](../wiki/example.middlewares.Index.Class.Middleware)

#### Returns

[`Middleware`](../wiki/example.middlewares.Index.Class.Middleware)

## Methods

### registerApplicationMiddleware()

> **registerApplicationMiddleware**(`registry`): [`ApplicationMiddleware`](../wiki/registry.types.Middlewares.AppMiddlewareType.Class.ApplicationMiddleware)

#### Parameters

• **registry**: [`Registry`](../wiki/registry.Registry.Class.Registry)

#### Returns

[`ApplicationMiddleware`](../wiki/registry.types.Middlewares.AppMiddlewareType.Class.ApplicationMiddleware)

#### Defined in

[example/middlewares/Index.ts:10](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/example/middlewares/Index.ts#L10)

***

### run()

> **run**(`_request`, `_response`, `next`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void` \| `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>\>

#### Parameters

• **\_request**: `Request`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

• **\_response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

• **next**: `NextFunction`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void` \| `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>\>

#### Defined in

[example/middlewares/Index.ts:19](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/example/middlewares/Index.ts#L19)
