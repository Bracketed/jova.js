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

[types/config/jovaServerOptionsObject.ts:30](https://github.com/Bracketed/jova.js/blob/2f92fdba02fb19f5694e65f757c95f41b8415e1b/src/types/config/jovaServerOptionsObject.ts#L30)

***

### cors?

> `optional` **cors**: `CorsOptions`

Enable cors and set up certain values for the cors middleware.

#### Default

```ts
undefined
```

#### Defined in

[types/config/jovaServerOptionsObject.ts:92](https://github.com/Bracketed/jova.js/blob/2f92fdba02fb19f5694e65f757c95f41b8415e1b/src/types/config/jovaServerOptionsObject.ts#L92)

***

### customHeaders?

> `optional` **customHeaders**: [`JovaHeaderSetting`](../../jovaHeaderAdditionObject/interfaces/JovaHeaderSetting.md)[]

Custom headers to be applied to outgoing responses, this is a middleware of optional use but the headers put in here are read-only at runtime until the request is received by a request handler.

#### Default

```ts
[]
```

#### Defined in

[types/config/jovaServerOptionsObject.ts:86](https://github.com/Bracketed/jova.js/blob/2f92fdba02fb19f5694e65f757c95f41b8415e1b/src/types/config/jovaServerOptionsObject.ts#L86)

***

### customOptions?

> `optional` **customOptions**: [`JovaCustomOption`](../../jovaCustomOptions/interfaces/JovaCustomOption.md)[]

Custom options from express to be set upon the server starting, similar to `settings` but this sets any value unlike `settings` which only allows settings from the `JovaSettingsTable` enum.

#### Default

```ts
[]
```

#### Defined in

[types/config/jovaServerOptionsObject.ts:80](https://github.com/Bracketed/jova.js/blob/2f92fdba02fb19f5694e65f757c95f41b8415e1b/src/types/config/jovaServerOptionsObject.ts#L80)

***

### middlewares?

> `optional` **middlewares**: [`MiddlewareHandler`](../../../type-aliases/MiddlewareHandler.md)[]

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

[types/config/jovaServerOptionsObject.ts:44](https://github.com/Bracketed/jova.js/blob/2f92fdba02fb19f5694e65f757c95f41b8415e1b/src/types/config/jovaServerOptionsObject.ts#L44)

***

### paths?

> `optional` **paths**: [`JovaPathSettings`](../../jovaPathOptions/interfaces/JovaPathSettings.md)

Deploy example middlewares and routes when running the Jova.js Server.

#### Defined in

[types/config/jovaServerOptionsObject.ts:23](https://github.com/Bracketed/jova.js/blob/2f92fdba02fb19f5694e65f757c95f41b8415e1b/src/types/config/jovaServerOptionsObject.ts#L23)

***

### port?

> `optional` **port**: `string` \| `number`

The port for the Jova Server to run on.

#### Default

```ts
3000
```

#### Defined in

[types/config/jovaServerOptionsObject.ts:50](https://github.com/Bracketed/jova.js/blob/2f92fdba02fb19f5694e65f757c95f41b8415e1b/src/types/config/jovaServerOptionsObject.ts#L50)

***

### ratelimiting?

> `optional` **ratelimiting**: [`RatelimitConfig`](../../rateLimitOptionsObject/interfaces/RatelimitConfig.md)

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

[types/config/jovaServerOptionsObject.ts:68](https://github.com/Bracketed/jova.js/blob/2f92fdba02fb19f5694e65f757c95f41b8415e1b/src/types/config/jovaServerOptionsObject.ts#L68)

***

### settings?

> `optional` **settings**: [`JovaSettings`](../../jovaSettingsObject/interfaces/JovaSettings.md)

Custom settings from express to be enabled or disabled upon the server starting.

#### Default

```ts
undefined
```

#### Defined in

[types/config/jovaServerOptionsObject.ts:74](https://github.com/Bracketed/jova.js/blob/2f92fdba02fb19f5694e65f757c95f41b8415e1b/src/types/config/jovaServerOptionsObject.ts#L74)
