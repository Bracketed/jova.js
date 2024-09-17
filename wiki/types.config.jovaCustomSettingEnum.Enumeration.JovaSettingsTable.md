[Jova.js by Bracketed Softworks v1.0.0](../wiki/modules) / [types/config/jovaCustomSettingEnum](../wiki/types.config.jovaCustomSettingEnum) / JovaSettingsTable

# Enumeration: JovaSettingsTable

The Jova Settings enum.

## Enumeration Members

### CaseSensitive

> **CaseSensitive**: `"case sensitive routing"`

Enable case sensitivity. When enabled, "/Foo" and "/foo" are different routes. When disabled, "/Foo" and "/foo" are treated the same.

NOTE: Sub-apps will inherit the value of this setting.

https://expressjs.com/en/api.html#app.settings.table

#### Default

```ts
undefined
```

#### Defined in

[types/config/jovaCustomSettingEnum.ts:18](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/types/config/jovaCustomSettingEnum.ts#L18)

***

### Environment

> **Environment**: `"env"`

Environment mode. Be sure to set to “production” in a production environment

https://expressjs.com/en/api.html#app.settings.table

#### Default

```ts
process.env.NODE_ENV | "development"
```

#### Defined in

[types/config/jovaCustomSettingEnum.ts:27](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/types/config/jovaCustomSettingEnum.ts#L27)

***

### ETag

> **ETag**: `"etag"`

Set the ETag response header.

https://expressjs.com/en/api.html#app.settings.table

#### Default

```ts
"weak"
```

#### Defined in

[types/config/jovaCustomSettingEnum.ts:36](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/types/config/jovaCustomSettingEnum.ts#L36)

***

### JSONEscape

> **JSONEscape**: `"json escape"`

Enable escaping JSON responses from the res.json, res.jsonp, and res.send APIs.
This will escape the characters <, >, and & as Unicode escape sequences in JSON.
The purpose of this it to assist with mitigating certain types of persistent XSS attacks when clients sniff responses for HTML.

https://expressjs.com/en/api.html#app.settings.table

#### Default

```ts
undefined
```

#### Defined in

[types/config/jovaCustomSettingEnum.ts:56](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/types/config/jovaCustomSettingEnum.ts#L56)

***

### JSONPCallback

> **JSONPCallback**: `"jsonp callback name"`

Specifies the default JSONP callback name.

https://expressjs.com/en/api.html#app.settings.table

#### Default

```ts
"callback"
```

#### Defined in

[types/config/jovaCustomSettingEnum.ts:45](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/types/config/jovaCustomSettingEnum.ts#L45)

***

### JSONReplacer

> **JSONReplacer**: `"json replacer"`

The 'replacer' argument used by `JSON.stringify`.

NOTE: Sub-apps will inherit the value of this setting.

https://expressjs.com/en/api.html#app.settings.table

#### Default

```ts
undefined
```

#### Defined in

[types/config/jovaCustomSettingEnum.ts:67](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/types/config/jovaCustomSettingEnum.ts#L67)

***

### JSONSpaces

> **JSONSpaces**: `"json spaces"`

The 'space' argument used by `JSON.stringify`. This is typically set to the number of spaces to use to indent prettified JSON.

NOTE: Sub-apps will inherit the value of this setting.

https://expressjs.com/en/api.html#app.settings.table

#### Default

```ts
undefined
```

#### Defined in

[types/config/jovaCustomSettingEnum.ts:78](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/types/config/jovaCustomSettingEnum.ts#L78)

***

### PoweredBy

> **PoweredBy**: `"x-powered-by"`

Enables the "X-Powered-By: Express" HTTP header.

https://expressjs.com/en/api.html#app.settings.table

#### Default

```ts
true
```

#### Defined in

[types/config/jovaCustomSettingEnum.ts:168](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/types/config/jovaCustomSettingEnum.ts#L168)

***

### QueryParser

> **QueryParser**: `"query parser"`

Disable query parsing by setting the value to false, or set the query parser to use either “simple” or “extended” or a custom query string parsing function.

The simple query parser is based on Node’s native query parser, querystring.

The extended query parser is based on qs.

A custom query string parsing function will receive the complete query string, and must return an object of query keys and their values.

https://expressjs.com/en/api.html#app.settings.table

#### Default

```ts
"extended"
```

#### Defined in

[types/config/jovaCustomSettingEnum.ts:93](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/types/config/jovaCustomSettingEnum.ts#L93)

***

### StrictRouting

> **StrictRouting**: `"strict routing"`

Enable strict routing. When enabled, the router treats "/foo" and "/foo/" as different. Otherwise, the router treats "/foo" and "/foo/" as the same.

NOTE: Sub-apps will inherit the value of this setting.

https://expressjs.com/en/api.html#app.settings.table

#### Default

```ts
undefined
```

#### Defined in

[types/config/jovaCustomSettingEnum.ts:104](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/types/config/jovaCustomSettingEnum.ts#L104)

***

### SubdomainOffset

> **SubdomainOffset**: `"subdomain offset"`

The number of dot-separated parts of the host to remove to access subdomain.

https://expressjs.com/en/api.html#app.settings.table

#### Default

```ts
2
```

#### Defined in

[types/config/jovaCustomSettingEnum.ts:113](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/types/config/jovaCustomSettingEnum.ts#L113)

***

### TrustProxy

> **TrustProxy**: `"trust proxy"`

Indicates the app is behind a front-facing proxy, and to use the X-Forwarded-* headers to determine the connection and the IP address of the client. NOTE: X-Forwarded-* headers are easily spoofed and the detected IP addresses are unreliable.

When enabled, Express attempts to determine the IP address of the client connected through the front-facing proxy, or series of proxies. The `req.ips` property, then contains an array of IP addresses the client is connected through. To enable it, use the values described in the trust proxy options table.

The `trust proxy` setting is implemented using the proxy-addr package. For more information, see its documentation.

NOTE: Sub-apps will inherit the value of this setting, even though it has a default value.

https://expressjs.com/en/api.html#app.settings.table

#### Default

```ts
false
```

#### Defined in

[types/config/jovaCustomSettingEnum.ts:128](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/types/config/jovaCustomSettingEnum.ts#L128)

***

### ViewCache

> **ViewCache**: `"view cache"`

Enables view template compilation caching.

NOTE: Sub-apps will not inherit the value of this setting in production (when `NODE_ENV` is "production").

https://expressjs.com/en/api.html#app.settings.table

#### Default

```ts
true | undefined
```

#### Defined in

[types/config/jovaCustomSettingEnum.ts:148](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/types/config/jovaCustomSettingEnum.ts#L148)

***

### ViewEngine

> **ViewEngine**: `"view engine"`

The default engine extension to use when omitted.

NOTE: Sub-apps will inherit the value of this setting.

https://expressjs.com/en/api.html#app.settings.table

#### Default

```ts
undefined
```

#### Defined in

[types/config/jovaCustomSettingEnum.ts:159](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/types/config/jovaCustomSettingEnum.ts#L159)

***

### Views

> **Views**: `"views"`

A directory or an array of directories for the application's views. If an array, the views are looked up in the order they occur in the array

https://expressjs.com/en/api.html#app.settings.table

#### Default

```ts
process.cwd() + '/views'
```

#### Defined in

[types/config/jovaCustomSettingEnum.ts:137](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/types/config/jovaCustomSettingEnum.ts#L137)
