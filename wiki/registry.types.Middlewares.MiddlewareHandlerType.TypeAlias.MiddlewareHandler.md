[Jova.js by Bracketed Softworks v1.0.0](../wiki/modules) / [registry/types/Middlewares/MiddlewareHandlerType](../wiki/registry.types.Middlewares.MiddlewareHandlerType) / MiddlewareHandler

# Type Alias: MiddlewareHandler()

> **MiddlewareHandler**: (`req`, `res`, `next`) => `ApplicationResponse` \| [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`ApplicationResponse` \| `void`\> \| `void`

## Parameters

• **req**: `ApplicationRequest`

• **res**: `ApplicationResponse`

• **next**: `ApplicationNextFunction`

## Returns

`ApplicationResponse` \| [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`ApplicationResponse` \| `void`\> \| `void`

## Defined in

[registry/types/Middlewares/MiddlewareHandlerType.ts:3](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/registry/types/Middlewares/MiddlewareHandlerType.ts#L3)
