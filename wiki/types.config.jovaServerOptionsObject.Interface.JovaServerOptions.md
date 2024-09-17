[Jova.js by Bracketed Softworks v1.0.0](../wiki/modules) / [types/config/jovaServerOptionsObject](../wiki/types.config.jovaServerOptionsObject) / JovaServerOptions

# Interface: JovaServerOptions

Jova Server options.

 JovaServerOptions

## Properties

### basePath?

> `optional` **basePath**: `string`

An optional base path for all of your routes to begin at.

#### Example

```ts
"/api"
```

#### Defined in

[types/config/jovaServerOptionsObject.ts:31](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/types/config/jovaServerOptionsObject.ts#L31)

***

### cors?

> `optional` **cors**: `CorsOptions`

Enable cors and set up certain values for the cors middleware.

#### Default

```ts
{}
```

#### Defined in

[types/config/jovaServerOptionsObject.ts:93](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/types/config/jovaServerOptionsObject.ts#L93)

***

### customHeaders?

> `optional` **customHeaders**: [`JovaHeaderSetting`](../wiki/types.config.jovaHeaderAdditionObject.Interface.JovaHeaderSetting)[]

Custom headers to be applied to outgoing responses, this is a middleware of optional use but the headers put in here are read-only at runtime until the request is received by a request handler.

#### Default

```ts
[]
```

#### Defined in

[types/config/jovaServerOptionsObject.ts:87](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/types/config/jovaServerOptionsObject.ts#L87)

***

### customOptions?

> `optional` **customOptions**: [`JovaCustomOption`](../wiki/types.config.jovaCustomOptions.Interface.JovaCustomOption)[]

Custom options from express to be set upon the server starting, similar to `settings` but this sets any value unlike `settings` which only allows settings from the `JovaSettingsTable` enum.

#### Default

```ts
[]
```

#### Defined in

[types/config/jovaServerOptionsObject.ts:81](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/types/config/jovaServerOptionsObject.ts#L81)

***

### middlewares?

> `optional` **middlewares**: [`MiddlewareHandler`](../wiki/registry.types.Middlewares.MiddlewareHandlerType.TypeAlias.MiddlewareHandler)[]

An array containing middlewares you would like to use in your application.

Middlewares built to support __Express__ only, or alternatively you can write them in yourself.

#### Example

```ts
// An example of a middleware component coded raw into Jova's Middleware Array.
((request: Request, response: Response, next: NextFunction) => {
	console.log(`New request at ${request.path}!`)
	return next()
})
```

#### Defined in

[types/config/jovaServerOptionsObject.ts:45](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/types/config/jovaServerOptionsObject.ts#L45)

***

### paths?

> `optional` **paths**: [`JovaPathSettings`](../wiki/types.config.jovaPathOptions.Interface.JovaPathSettings)

Deploy example middlewares and routes when running the Jova.js Server.

#### Defined in

[types/config/jovaServerOptionsObject.ts:24](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/types/config/jovaServerOptionsObject.ts#L24)

***

### port?

> `optional` **port**: `string` \| `number`

The port for the Jova Server to run on.

#### Default

```ts
3000
```

#### Defined in

[types/config/jovaServerOptionsObject.ts:51](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/types/config/jovaServerOptionsObject.ts#L51)

***

### ratelimiting?

> `optional` **ratelimiting**: [`RatelimitConfig`](../wiki/types.config.rateLimitOptionsObject.Interface.RatelimitConfig)

The ratelimit config for a Jova Server Instance.

#### Default

```ts
undefined // (Disabled by default)
```

#### Example

```ts
// Config types for the ratelimiting feature for Jova
interface LimitConfig {
		refreshTime: number;
		requestLimitAmount: number | Middleware;
		requestLimitMessage?: string;
		requestLimitCode?: string;
		requestLimitHandler?: Middleware;
		countFailedRequests?: boolean;
		allowOnInternalError?: boolean;
		ratelimitDatabase?: string | RatelimitDatabaseConfig;
}
```

#### Defined in

[types/config/jovaServerOptionsObject.ts:69](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/types/config/jovaServerOptionsObject.ts#L69)

***

### settings?

> `optional` **settings**: [`JovaSettings`](../wiki/types.config.jovaSettingsObject.Interface.JovaSettings)

Custom settings from express to be enabled or disabled upon the server starting.

#### Default

```ts
{}
```

#### Defined in

[types/config/jovaServerOptionsObject.ts:75](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/types/config/jovaServerOptionsObject.ts#L75)
