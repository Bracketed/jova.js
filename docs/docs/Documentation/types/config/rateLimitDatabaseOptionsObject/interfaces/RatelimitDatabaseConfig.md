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

[types/config/rateLimitDatabaseOptionsObject.ts:38](https://github.com/Bracketed/jova.js/blob/2f92fdba02fb19f5694e65f757c95f41b8415e1b/src/types/config/rateLimitDatabaseOptionsObject.ts#L38)

***

### host?

> `optional` **host**: `string`

The host ip or hostname of your redis server.

#### Defined in

[types/config/rateLimitDatabaseOptionsObject.ts:19](https://github.com/Bracketed/jova.js/blob/2f92fdba02fb19f5694e65f757c95f41b8415e1b/src/types/config/rateLimitDatabaseOptionsObject.ts#L19)

***

### password?

> `optional` **password**: `string`

The username to log into your redis server with, optional but can be configured in the settings of your redis server.

#### Defined in

[types/config/rateLimitDatabaseOptionsObject.ts:31](https://github.com/Bracketed/jova.js/blob/2f92fdba02fb19f5694e65f757c95f41b8415e1b/src/types/config/rateLimitDatabaseOptionsObject.ts#L31)

***

### port?

> `optional` **port**: `number`

The port number for your redis server.

#### Default

```ts
6379
```

#### Defined in

[types/config/rateLimitDatabaseOptionsObject.ts:13](https://github.com/Bracketed/jova.js/blob/2f92fdba02fb19f5694e65f757c95f41b8415e1b/src/types/config/rateLimitDatabaseOptionsObject.ts#L13)

***

### username?

> `optional` **username**: `string`

The username to log into your redis server with, optional but can be configured in the settings of your redis server, this requires redis v6+

#### Defined in

[types/config/rateLimitDatabaseOptionsObject.ts:25](https://github.com/Bracketed/jova.js/blob/2f92fdba02fb19f5694e65f757c95f41b8415e1b/src/types/config/rateLimitDatabaseOptionsObject.ts#L25)
