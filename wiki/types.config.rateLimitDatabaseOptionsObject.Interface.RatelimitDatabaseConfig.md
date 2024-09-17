[Jova.js by Bracketed Softworks v1.0.0](../wiki/modules) / [types/config/rateLimitDatabaseOptionsObject](../wiki/types.config.rateLimitDatabaseOptionsObject) / RatelimitDatabaseConfig

# Interface: RatelimitDatabaseConfig

Redis configuration for the Jova.js Rate limiter.

 RatelimitDatabaseConfig

## Properties

### db?

> `optional` **db**: `number`

The redis database to to use for your redis config, default `0`.

#### Default

```ts
0
```

#### Defined in

[types/config/rateLimitDatabaseOptionsObject.ts:39](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/types/config/rateLimitDatabaseOptionsObject.ts#L39)

***

### host?

> `optional` **host**: `string`

The host ip or hostname of your redis server.

#### Defined in

[types/config/rateLimitDatabaseOptionsObject.ts:20](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/types/config/rateLimitDatabaseOptionsObject.ts#L20)

***

### password?

> `optional` **password**: `string`

The username to log into your redis server with, optional but can be configured in the settings of your redis server.

#### Defined in

[types/config/rateLimitDatabaseOptionsObject.ts:32](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/types/config/rateLimitDatabaseOptionsObject.ts#L32)

***

### port?

> `optional` **port**: `number`

The port number for your redis server.

#### Default

```ts
6379
```

#### Defined in

[types/config/rateLimitDatabaseOptionsObject.ts:14](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/types/config/rateLimitDatabaseOptionsObject.ts#L14)

***

### username?

> `optional` **username**: `string`

The username to log into your redis server with, optional but can be configured in the settings of your redis server, this requires redis v6+

#### Defined in

[types/config/rateLimitDatabaseOptionsObject.ts:26](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/types/config/rateLimitDatabaseOptionsObject.ts#L26)
