[Jova.js by Bracketed Softworks v1.0.0](../wiki/modules) / [utilities/exports/RequestUtil](../wiki/utilities.exports.RequestUtil) / request

# Variable: request

> `const` `readonly` **request**: `object`

A utility for managing request.

## Type declaration

### accepts()

> `readonly` **accepts**: (`request`, `type`) => `string` \| `false`

Check if the given `type(s)` is acceptable, returning
the best match when true, otherwise `undefined`, in which
case you should respond with 406 "Not Acceptable".

The `type` value may be a single mime type string
such as "application/json", the extension name
such as "json", a comma-delimited list such as "json, html, text/plain",
or an array `["json", "html", "text/plain"]`. When a list
or array is given the _best_ match, if any is returned.

Examples:
```js
    // Accept: text/html
    request.accepts('html');
    // => "html"

    // Accept: text/*, application/json
    request.accepts('html');
    // => "html"
    request.accepts('text/html');
    // => "text/html"
    request.accepts('json, text');
    // => "json"
    request.accepts('application/json');
    // => "application/json"

    // Accept: text/*, application/json
    request.accepts('image/png');
    request.accepts('png');
    // => false

    // Accept: text/*;q=.5, application/json
    request.accepts(['html', 'json']);
    request.accepts('html, json');
    // => "json"
```

#### Parameters

• **request**: `Request`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationRequest` object from your route handler.

• **type**: `string`

The Content Type

#### Returns

`string` \| `false`

`string | false`

### acceptsCharset()

> `readonly` **acceptsCharset**: (`request`, `charset`) => `string` \| `false`

Returns the first accepted charset of the specified character sets,
based on the request's Accept-Charset HTTP header field.
If none of the specified charsets is accepted, returns false.

For more information, or if you have issues or concerns, see accepts.

#### Parameters

• **request**: `Request`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationRequest` object from your route handler.

• **charset**: `string`

The Content Charset

#### Returns

`string` \| `false`

`string | false`

### acceptsCharsets()

> `readonly` **acceptsCharsets**: (`request`, ...`charsets`) => `string` \| `false`

Returns the first accepted charset of the specified character sets,
based on the request's Accept-Charset HTTP header field.
If none of the specified charsets is accepted, returns false.

For more information, or if you have issues or concerns, see accepts.

#### Parameters

• **request**: `Request`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationRequest` object from your route handler.

• ...**charsets**: `string`[] \| [`Charset`](../wiki/types.http.Charsets.Enumeration.Charset)[]

#### Returns

`string` \| `false`

`string | false`

### acceptsEncoding()

> `readonly` **acceptsEncoding**: (`request`, `encoding`) => `string` \| `false`

Returns the first accepted encoding of the specified encodings,
based on the request's Accept-Encoding HTTP header field.
If none of the specified encodings is accepted, returns false.

For more information, or if you have issues or concerns, see accepts.

#### Parameters

• **request**: `Request`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationRequest` object from your route handler.

• **encoding**: `string`

The Content Encoder

#### Returns

`string` \| `false`

`string | false`

### acceptsEncodings()

> `readonly` **acceptsEncodings**: (`request`, ...`encodings`) => `string` \| `false`

Returns the first accepted encoding of the specified encodings,
based on the request's Accept-Encoding HTTP header field.
If none of the specified encodings is accepted, returns false.

For more information, or if you have issues or concerns, see accepts.

#### Parameters

• **request**: `Request`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationRequest` object from your route handler.

• ...**encodings**: `string`[] \| [`Encoder`](../wiki/types.http.Encoders.Enumeration.Encoder)[]

#### Returns

`string` \| `false`

`string | false`

### acceptsLanguage()

> `readonly` **acceptsLanguage**: (`request`, `lang`) => `string` \| `false`

Returns the first accepted language of the specified languages,
based on the request's Accept-Language HTTP header field.
If none of the specified languages is accepted, returns false.

For more information, or if you have issues or concerns, see accepts.

#### Parameters

• **request**: `Request`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationRequest` object from your route handler.

• **lang**: `string`

The Content Language

#### Returns

`string` \| `false`

`string | false`

### acceptsLanguages()

> `readonly` **acceptsLanguages**: (`request`, ...`langs`) => `string` \| `false`

Returns the first accepted language of the specified languages,
based on the request's Accept-Language HTTP header field.
If none of the specified languages is accepted, returns false.

For more information, or if you have issues or concerns, see accepts.

#### Parameters

• **request**: `Request`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationRequest` object from your route handler.

• ...**langs**: `string`[] \| [`Language`](../wiki/types.http.Languages.Enumeration.Language)[]

#### Returns

`string` \| `false`

`string | false`

### acceptsType()

> `readonly` **acceptsType**: (`request`, `type`) => `string` \| `false`

Check if the given `type(s)` is acceptable, returning
the best match when true, otherwise `undefined`, in which
case you should respond with 406 "Not Acceptable".

The `type` value may be a single mime type string
such as "application/json", the extension name
such as "json", a comma-delimited list such as "json, html, text/plain",
or an array `["json", "html", "text/plain"]`. When a list
or array is given the _best_ match, if any is returned.

Examples:
```js
    // Accept: text/html
    request.accepts('html');
    // => "html"

    // Accept: text/*, application/json
    request.accepts('html');
    // => "html"
    request.accepts('text/html');
    // => "text/html"
    request.accepts('json, text');
    // => "json"
    request.accepts('application/json');
    // => "application/json"

    // Accept: text/*, application/json
    request.accepts('image/png');
    request.accepts('png');
    // => false

    // Accept: text/*;q=.5, application/json
    request.accepts(['html', 'json']);
    request.accepts('html, json');
    // => "json"
```

#### Parameters

• **request**: `Request`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationRequest` object from your route handler.

• **type**: `string`

The Content Type

#### Returns

`string` \| `false`

`string | false`

### acceptsTypes()

> `readonly` **acceptsTypes**: (`request`, ...`types`) => `string` \| `false`

Check if the given `type(s)` is acceptable, returning
the best match when true, otherwise `undefined`, in which
case you should respond with 406 "Not Acceptable".

The `type` value may be a single mime type string
such as "application/json", the extension name
such as "json", a comma-delimited list such as "json, html, text/plain",
or an array `["json", "html", "text/plain"]`. When a list
or array is given the _best_ match, if any is returned.

Examples:
```js
    // Accept: text/html
    request.accepts('html');
    // => "html"

    // Accept: text/*, application/json
    request.accepts('html');
    // => "html"
    request.accepts('text/html');
    // => "text/html"
    request.accepts('json, text');
    // => "json"
    request.accepts('application/json');
    // => "application/json"

    // Accept: text/*, application/json
    request.accepts('image/png');
    request.accepts('png');
    // => false

    // Accept: text/*;q=.5, application/json
    request.accepts(['html', 'json']);
    request.accepts('html, json');
    // => "json"
```

#### Parameters

• **request**: `Request`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationRequest` object from your route handler.

• ...**types**: `string`[] \| [`ContentType`](../wiki/types.http.ContentTypes.Enumeration.ContentType)[]

#### Returns

`string` \| `false`

`string | false`

### get()

> `readonly` **get**: (`request`, `field`) => `undefined` \| `string`

Get value for header `field`.

#### Parameters

• **request**: `Request`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationRequest` object from your route handler.

• **field**: `string`

The HTTP request header field.

#### Returns

`undefined` \| `string`

`string | undefined`

### getHeader()

> `readonly` **getHeader**: (`request`, `field`) => `undefined` \| `string`

Get value for header `field`.

#### Parameters

• **request**: `Request`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationRequest` object from your route handler.

• **field**: `string`

The HTTP request header field.

#### Returns

`undefined` \| `string`

`string | undefined`

### header()

> `readonly` **header**: (`request`, `field`) => `undefined` \| `string`

Get value for header `field`.

#### Parameters

• **request**: `Request`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationRequest` object from your route handler.

• **field**: `string`

The HTTP request header field.

#### Returns

`undefined` \| `string`

`string | undefined`

### is()

> `readonly` **is**: (`request`, `type`) => `null` \| `string` \| `false`

Check if the incoming request contains the "Content-Type"
header field, and it contains the give mime `type`.

Examples:
```js
     // With Content-Type: text/html; charset=utf-8
     request.is('html');
     request.is('text/html');
     request.is('text/*');
     // => true

     // When Content-Type is application/json
     request.is('json');
     request.is('application/json');
     request.is('application/*');
     // => true

     request.is('html');
     // => false
```

#### Parameters

• **request**: `Request`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationRequest` object from your route handler.

• **type**: `string` \| `string`[] \| [`ContentType`](../wiki/types.http.ContentTypes.Enumeration.ContentType)[]

The Content Type.

#### Returns

`null` \| `string` \| `false`

`string | false | null`

### isContentType()

> `readonly` **isContentType**: (`request`, `type`) => `null` \| `string` \| `false`

Check if the incoming request contains the "Content-Type"
header field, and it contains the give mime `type`.

Examples:
```js
     // With Content-Type: text/html; charset=utf-8
     request.is('html');
     request.is('text/html');
     request.is('text/*');
     // => true

     // When Content-Type is application/json
     request.is('json');
     request.is('application/json');
     request.is('application/*');
     // => true

     request.is('html');
     // => false
```

#### Parameters

• **request**: `Request`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationRequest` object from your route handler.

• **type**: `string` \| `string`[] \| [`ContentType`](../wiki/types.http.ContentTypes.Enumeration.ContentType)[]

The Content Type.

#### Returns

`null` \| `string` \| `false`

`string | false | null`

### isType()

> `readonly` **isType**: (`request`, `type`) => `null` \| `string` \| `false`

Check if the incoming request contains the "Content-Type"
header field, and it contains the give mime `type`.

Examples:
```js
     // With Content-Type: text/html; charset=utf-8
     request.is('html');
     request.is('text/html');
     request.is('text/*');
     // => true

     // When Content-Type is application/json
     request.is('json');
     request.is('application/json');
     request.is('application/*');
     // => true

     request.is('html');
     // => false
```

#### Parameters

• **request**: `Request`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationRequest` object from your route handler.

• **type**: `string` \| `string`[] \| [`ContentType`](../wiki/types.http.ContentTypes.Enumeration.ContentType)[]

The Content Type.

#### Returns

`null` \| `string` \| `false`

`string | false | null`

### range()

> `readonly` **range**: (`request`, `size`, `options`?) => `undefined` \| `Ranges` \| `Result`

Parse Range header field, capping to the given `size`.

An array of ranges will be returned or negative numbers indicating an error parsing.

 -  -2 signals a malformed header string
 -  -1 signals an unsatisfiable range

Unspecified ranges such as "0-" require knowledge of your resource length. In
the case of a byte range this is of course the total number of bytes.
If the Range header field is not given `undefined` is returned.
If the Range header field is given, return value is a result of range-parser.
See more ./types/express/RangeParser.ts

NOTE: remember that ranges are inclusive, so for example "Range: users=0-3"
should respond with 4 users when available, not 3.

#### Parameters

• **request**: `Request`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationRequest` object from your route handler.

• **size**: `number`

The maximum size of the resource.

• **options?**: `Options`

An object that can have the following properties:
- combine: `boolean` - Specify if overlapping & adjacent ranges should be combined, defaults to `false`. When `true`, ranges will be combined and returned as if they were specified that way in the header.

#### Returns

`undefined` \| `Ranges` \| `Result`

`RangeParser.Ranges | RangeParser.Result | undefined`

### verify()

> `readonly` **verify**: (`request`, `type`) => `null` \| `string` \| `false`

Check if the incoming request contains the "Content-Type"
header field, and it contains the give mime `type`.

Examples:
```js
     // With Content-Type: text/html; charset=utf-8
     request.is('html');
     request.is('text/html');
     request.is('text/*');
     // => true

     // When Content-Type is application/json
     request.is('json');
     request.is('application/json');
     request.is('application/*');
     // => true

     request.is('html');
     // => false
```

#### Parameters

• **request**: `Request`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationRequest` object from your route handler.

• **type**: `string` \| `string`[] \| [`ContentType`](../wiki/types.http.ContentTypes.Enumeration.ContentType)[]

The Content Type.

#### Returns

`null` \| `string` \| `false`

`string | false | null`

### verifyContentType()

> `readonly` **verifyContentType**: (`request`, `type`) => `null` \| `string` \| `false`

Check if the incoming request contains the "Content-Type"
header field, and it contains the give mime `type`.

Examples:
```js
     // With Content-Type: text/html; charset=utf-8
     request.is('html');
     request.is('text/html');
     request.is('text/*');
     // => true

     // When Content-Type is application/json
     request.is('json');
     request.is('application/json');
     request.is('application/*');
     // => true

     request.is('html');
     // => false
```

#### Parameters

• **request**: `Request`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationRequest` object from your route handler.

• **type**: `string` \| `string`[] \| [`ContentType`](../wiki/types.http.ContentTypes.Enumeration.ContentType)[]

The Content Type.

#### Returns

`null` \| `string` \| `false`

`string | false | null`

### verifyType()

> `readonly` **verifyType**: (`request`, `type`) => `null` \| `string` \| `false`

Check if the incoming request contains the "Content-Type"
header field, and it contains the give mime `type`.

Examples:
```js
     // With Content-Type: text/html; charset=utf-8
     request.is('html');
     request.is('text/html');
     request.is('text/*');
     // => true

     // When Content-Type is application/json
     request.is('json');
     request.is('application/json');
     request.is('application/*');
     // => true

     request.is('html');
     // => false
```

#### Parameters

• **request**: `Request`\<`ParamsDictionary`, `any`, `any`, `ParsedQs`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationRequest` object from your route handler.

• **type**: `string` \| `string`[] \| [`ContentType`](../wiki/types.http.ContentTypes.Enumeration.ContentType)[]

The Content Type.

#### Returns

`null` \| `string` \| `false`

`string | false | null`

## Defined in

utilities/exports/RequestUtil.ts:8
