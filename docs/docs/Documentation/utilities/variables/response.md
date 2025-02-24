# Variable: response

> `const` `readonly` **response**: `object`

A utility for managing responses.

## Type declaration

### accepted()

> `readonly` **accepted**: (`response`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

HTTP Created response method.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### addAttachment()

> `readonly` **addAttachment**: (`response`, `filename`?) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

Set `"Content-Disposition"` header to attachment with optional `filename`.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

• **filename?**: `string`

The filename for the attachment.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### addCookie()

> `readonly` **addCookie**: (`response`, `name`, `value`, `options`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

Set cookie `name` to `val`, with the given `options`.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

• **name**: `string`

The name of the cookie.

• **value**: `string`

The value of the cookie.

• **options**: `CookieOptions`

The cookie options.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

#### Example

```ts
// "Remember Me" for 15 minutes
response.cookie('rememberme', '1', { expires: new Date(Date.now() + 900000), httpOnly: true });

// save as above
response.cookie('rememberme', '1', { maxAge: 900000, httpOnly: true })

@readonly
```

### addFile()

> `readonly` **addFile**: (`response`, `path`, `callback`?) => `void`

Transfer the file at the given `path`.

Automatically sets the _Content-Type_ response header field.
The callback `fn(err)` is invoked when the transfer is complete
or when an error occurs. Be sure to check `response.headersSent`
if you wish to attempt responding, as the header and some data
may have already been transferred.

Other options are passed along to `send`.

Examples:

The following example illustrates how `response.sendFile()` may
be used as an alternative for the `static()` middleware for
dynamic situations. The code backing `response.sendFile()` is actually
the same code, so HTTP cache support etc is identical.

```js
application.get('/user/:uid/photos/:file', function(req, res){
  var uid = req.params.uid
, file = req.params.file;
  req.user.mayViewFilesFrom(uid, function(yes){
if (yes) {
 response.sendFile('/uploads/' + uid + '/' + file);
} else {
 response.send(403, 'Sorry! you cant see that.');
}
  });
});
```

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

• **path**: `string`

• **callback?**: `Errback`

#### Returns

`void`

### addHeader()

> `readonly` **addHeader**: (`response`, `field`, `value`?) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

Appends the specified value to the HTTP response header field.
If the header is not already set, it creates the header with the specified value.
The value parameter can be a `string` or an `array`.

Note: calling `response.set()` after `response.append()` will reset the previously-set header value.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

• **field**: `string`

The HTTP response header field.

• **value?**: `string` \| `string`[]

The value to the header.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### addLocation()

> `readonly` **addLocation**: (`response`, `url`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

Set the location header to url.
The given url can also be the name of a mapped url, for example by default express supports "back" which redirects to the Referrer or Referer headers or "/".

Examples:

response.location('/foo/bar').; response.location('http://example.com'); response.location('../login'); // /blog/post/1 -> /blog/login

Mounting:

When an application is mounted and response.location() is given a path that does not lead with "/" it becomes relative to the mount-point. For example if the application is mounted at "/blog", the following would become "/blog/login".

```response.location('login');```

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

• **url**: `string`

The url for the location to be set to.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### addLocationHeader()

> `readonly` **addLocationHeader**: (`response`, `url`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

Set the location header to url.
The given url can also be the name of a mapped url, for example by default express supports "back" which redirects to the Referrer or Referer headers or "/".

Examples:

response.location('/foo/bar').; response.location('http://example.com'); response.location('../login'); // /blog/post/1 -> /blog/login

Mounting:

When an application is mounted and response.location() is given a path that does not lead with "/" it becomes relative to the mount-point. For example if the application is mounted at "/blog", the following would become "/blog/login".

```response.location('login');```

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

• **url**: `string`

The url for the location to be set to.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### advancedDownload()

> `readonly` **advancedDownload**: (`response`, `path`, `filename`, `options`, `callback`?) => `void`

Transfer the file at the given path as an attachment.

Optionally providing an alternate attachment `filename`, and optional `callback fn(err)`.
The callback is invoked when the data transfer is complete, or when an error has occurred.
Be sure to check `response.headersSent` if you plan to respond.

The optional options argument passes through to the underlying `response.sendFile()` call, and takes the exact same parameters.

This method uses `response.sendfile()`.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

• **path**: `string`

The target file path.

• **filename**: `string`

The file name for when the client downloads the file.

• **options**: [`DownloadOptions`](../../types/express/DownloadOptions/interfaces/DownloadOptions.md)

The download options.

• **callback?**: `Errback`

The callback if an error occurs.

#### Returns

`void`

### advancedRender()

> `readonly` **advancedRender**: (`response`, `view`, `options`?, `callback`?) => `void`

Render `view` with the given `options` and optional callback `fn`.
When a callback function is given a response will _not_ be made
automatically, otherwise a response of _200_ and _text/html_ is given.

Options:

 - `cache` boolean hinting to the engine it should cache
 - `filename` filename of the view being rendered

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

• **view**: `string`

The file path of the view file to render.

• **options?**: `object`

• **callback?**

Optional callback to the render function.

#### Returns

`void`

### alreadyReported()

> `readonly` **alreadyReported**: (`response`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

HTTP Already Reported response method.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### append()

> `readonly` **append**: (`response`, `field`, `value`?) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

Appends the specified value to the HTTP response header field.
If the header is not already set, it creates the header with the specified value.
The value parameter can be a `string` or an `array`.

Note: calling `response.set()` after `response.append()` will reset the previously-set header value.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

• **field**: `string`

The HTTP response header field.

• **value?**: `string` \| `string`[]

The value to the header.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### appendHeader()

> `readonly` **appendHeader**: (`response`, `field`, `value`?) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

Appends the specified value to the HTTP response header field.
If the header is not already set, it creates the header with the specified value.
The value parameter can be a `string` or an `array`.

Note: calling `response.set()` after `response.append()` will reset the previously-set header value.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

• **field**: `string`

The HTTP response header field.

• **value?**: `string` \| `string`[]

The value to the header.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### attach()

> `readonly` **attach**: (`response`, `filename`?) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

Set `"Content-Disposition"` header to attachment with optional `filename`.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

• **filename?**: `string`

The filename for the attachment.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### attachFile()

> `readonly` **attachFile**: (`response`, `filename`?) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

Set `"Content-Disposition"` header to attachment with optional `filename`.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

• **filename?**: `string`

The filename for the attachment.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### attachment()

> `readonly` **attachment**: (`response`, `filename`?) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

Set `"Content-Disposition"` header to attachment with optional `filename`.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

• **filename?**: `string`

The filename for the attachment.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### badGateway()

> `readonly` **badGateway**: (`response`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

HTTP Bad Gateway response method.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### badRequest()

> `readonly` **badRequest**: (`response`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

HTTP Bad Request response method.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### callbackedEnd()

> `readonly` **callbackedEnd**: (`response`, `callback`?) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

Calling the `writable.end()` method signals that no more data will be written
to the `Writable`. The optional `chunk` and `encoding` arguments allow one
final additional chunk of data to be written immediately before closing the
stream.

Calling the `write` method after calling `end` will raise an error.

```js
// Write 'hello, ' and then end with 'world!'.
const fs = require('node:fs');
const file = fs.createWriteStream('example.txt');
file.write('hello, ');
file.end('world!');
// Writing more now is not allowed!
```

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

• **callback?**

Callback for when the stream is finished.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### chunkedEnd()

> `readonly` **chunkedEnd**: (`response`, `chunk`, `callback`?) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

Calling the `writable.end()` method signals that no more data will be written
to the `Writable`. The optional `chunk` and `encoding` arguments allow one
final additional chunk of data to be written immediately before closing the
stream.

Calling the `write` method after calling `end` will raise an error.

```js
// Write 'hello, ' and then end with 'world!'.
const fs = require('node:fs');
const file = fs.createWriteStream('example.txt');
file.write('hello, ');
file.end('world!');
// Writing more now is not allowed!
```

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

• **chunk**: `any`

Optional data to write. For streams not operating in object mode, `chunk` must be a `string`, `Buffer`,
`TypedArray` or `DataView`. For object mode streams, `chunk` may be any JavaScript value other than `null`.

• **callback?**

Callback for when the stream is finished.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### clear()

> `readonly` **clear**: (`response`, `name`, `options`?) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

Clear cookie `name`.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

• **name**: `string`

The target cookie.

• **options?**: `CookieOptions`

The target cookie options.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### clearCookie()

> `readonly` **clearCookie**: (`response`, `name`, `options`?) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

Clear cookie `name`.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

• **name**: `string`

The target cookie.

• **options?**: `CookieOptions`

The target cookie options.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### code()

> `readonly` **code**: (`response`, `code`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

Set the response HTTP status code to `statusCode` and send its string representation as the response body.
Source: http://expressjs.com/4x/api.html#res.sendStatus

Examples:
```js
response.sendStatus(200); // equivalent to response.status(200).send('OK')
response.sendStatus(403); // equivalent to response.status(403).send('Forbidden')
response.sendStatus(404); // equivalent to response.status(404).send('Not Found')
response.sendStatus(500); // equivalent to response.status(500).send('Internal Server Error')
```

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

• **code**: `number`

The response status code.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### conflict()

> `readonly` **conflict**: (`response`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

HTTP Request conflict response method.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### contentType()

> `readonly` **contentType**: (`response`, `type`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

Set _Content-Type_ response header with `type` through `mime.lookup()`
when it does not contain "/", or set the Content-Type to `type` otherwise.

Examples:
```js
response.type('.html');
response.type('html');
response.type('json');
response.type('application/json');
response.type('png');
```

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

• **type**: `string`

The response content type.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### continue()

> `readonly` **continue**: (`response`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

HTTP CONTINUE response method.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### cookie()

> `readonly` **cookie**: (`response`, `name`, `value`, `options`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

Set cookie `name` to `val`, with the given `options`.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

• **name**: `string`

The name of the cookie.

• **value**: `string`

The value of the cookie.

• **options**: `CookieOptions`

The cookie options.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

#### Example

```ts
// "Remember Me" for 15 minutes
response.cookie('rememberme', '1', { expires: new Date(Date.now() + 900000), httpOnly: true });

// save as above
response.cookie('rememberme', '1', { maxAge: 900000, httpOnly: true })

@readonly
```

### created()

> `readonly` **created**: (`response`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

HTTP OK response method.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### deleteCookie()

> `readonly` **deleteCookie**: (`response`, `name`, `options`?) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

Clear cookie `name`.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

• **name**: `string`

The target cookie.

• **options?**: `CookieOptions`

The target cookie options.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### download()

> `readonly` **download**: (`response`, `path`, `callback`?) => `void`

Transfer the file at the given path as an attachment.

Optionally providing an alternate attachment `filename`, and optional `callback fn(err)`.
The callback is invoked when the data transfer is complete, or when an error has occurred.
Be sure to check `response.headersSent` if you plan to respond.

The optional options argument passes through to the underlying `response.sendFile()` call, and takes the exact same parameters.

This method uses `response.sendfile()`.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

• **path**: `string`

The target file path.

• **callback?**: `Errback`

The callback if an error occurs.

#### Returns

`void`

### earlyHints()

> `readonly` **earlyHints**: (`response`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

HTTP Early Hints response method.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### encodedEnd()

> `readonly` **encodedEnd**: (`response`, `chunk`, `encoding`, `callback`?) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

Calling the `writable.end()` method signals that no more data will be written
to the `Writable`. The optional `chunk` and `encoding` arguments allow one
final additional chunk of data to be written immediately before closing the
stream.

Calling the `write` method after calling `end` will raise an error.

```js
// Write 'hello, ' and then end with 'world!'.
const fs = require('node:fs');
const file = fs.createWriteStream('example.txt');
file.write('hello, ');
file.end('world!');
// Writing more now is not allowed!
```

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

• **chunk**: `any`

Optional data to write. For streams not operating in object mode, `chunk` must be a `string`, `Buffer`,
`TypedArray` or `DataView`. For object mode streams, `chunk` may be any JavaScript value other than `null`.

• **encoding**: `BufferEncoding`

The encoding if `chunk` is a string

• **callback?**

Callback for when the stream is finished.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### end()

> `readonly` **end**: (`response`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

Calling the `writable.end()` method signals that no more data will be written
to the `Writable`. The optional `chunk` and `encoding` arguments allow one
final additional chunk of data to be written immediately before closing the
stream.

Calling the `write` method after calling `end` will raise an error.

```js
// Write 'hello, ' and then end with 'world!'.
const fs = require('node:fs');
const file = fs.createWriteStream('example.txt');
file.write('hello, ');
file.end('world!');
// Writing more now is not allowed!
```

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### expectationFailed()

> `readonly` **expectationFailed**: (`response`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

HTTP Expectation failure response method.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### failedDependency()

> `readonly` **failedDependency**: (`response`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

HTTP Dependency Failure response method.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### file()

> `readonly` **file**: (`response`, `path`, `callback`?) => `void`

Transfer the file at the given `path`.

Automatically sets the _Content-Type_ response header field.
The callback `fn(err)` is invoked when the transfer is complete
or when an error occurs. Be sure to check `response.headersSent`
if you wish to attempt responding, as the header and some data
may have already been transferred.

Other options are passed along to `send`.

Examples:

The following example illustrates how `response.sendFile()` may
be used as an alternative for the `static()` middleware for
dynamic situations. The code backing `response.sendFile()` is actually
the same code, so HTTP cache support etc is identical.

```js
application.get('/user/:uid/photos/:file', function(req, res){
  var uid = req.params.uid
, file = req.params.file;
  req.user.mayViewFilesFrom(uid, function(yes){
if (yes) {
 response.sendFile('/uploads/' + uid + '/' + file);
} else {
 response.send(403, 'Sorry! you cant see that.');
}
  });
});
```

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

• **path**: `string`

• **callback?**: `Errback`

#### Returns

`void`

### forbidden()

> `readonly` **forbidden**: (`response`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

HTTP Forbidden response method.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### format()

> `readonly` **format**: (`response`, `obj`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

Respond to the Acceptable formats using an `obj`
of mime-type callbacks.

This method uses `req.accepted`, an array of
acceptable types ordered by their quality values.
When "Accept" is not present the _first_ callback
is invoked, otherwise the first match is used. When
no match is performed the server responds with
406 "Not Acceptable".

Content-Type is set for you, however if you choose
you may alter this within the callback using `response.type()`
or `response.set('Content-Type', ...)`.
```js
response.format({
'text/plain': function(){
  response.send('hey');
},

'text/html': function(){
  response.send('<p>hey</p>');
},

'appliation/json': function(){
  response.send({ message: 'hey' });
}
});
```

In addition to canonicalized MIME types you may
also use `extnames` mapped to these types:
```js
response.format({
text: function(){
  response.send('hey');
},

html: function(){
  response.send('<p>hey</p>');
},

json: function(){
  response.send({ message: 'hey' });
}
});
```

By default Express passes an `Error`
with a `.status` of 406 to `next(err)`
if a match is not made. If you provide
a `.default` callback it will be invoked
instead.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

• **obj**: `any`

The object to be formatted.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### formatObject()

> `readonly` **formatObject**: (`response`, `obj`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

Respond to the Acceptable formats using an `obj`
of mime-type callbacks.

This method uses `req.accepted`, an array of
acceptable types ordered by their quality values.
When "Accept" is not present the _first_ callback
is invoked, otherwise the first match is used. When
no match is performed the server responds with
406 "Not Acceptable".

Content-Type is set for you, however if you choose
you may alter this within the callback using `response.type()`
or `response.set('Content-Type', ...)`.
```js
response.format({
'text/plain': function(){
  response.send('hey');
},

'text/html': function(){
  response.send('<p>hey</p>');
},

'appliation/json': function(){
  response.send({ message: 'hey' });
}
});
```

In addition to canonicalized MIME types you may
also use `extnames` mapped to these types:
```js
response.format({
text: function(){
  response.send('hey');
},

html: function(){
  response.send('<p>hey</p>');
},

json: function(){
  response.send({ message: 'hey' });
}
});
```

By default Express passes an `Error`
with a `.status` of 406 to `next(err)`
if a match is not made. If you provide
a `.default` callback it will be invoked
instead.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

• **obj**: `any`

The object to be formatted.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### found()

> `readonly` **found**: (`response`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

HTTP Found response method.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### gatewayTimeout()

> `readonly` **gatewayTimeout**: (`response`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

HTTP Gateway Timeout response method.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### get()

> `readonly` **get**: (`response`, `field`) => `undefined` \| `string`

Get value for header `field`.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

• **field**: `string`

The HTTP response header field.

#### Returns

`undefined` \| `string`

### getHeader()

> `readonly` **getHeader**: (`response`, `field`) => `undefined` \| `string`

Get value for header `field`.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

• **field**: `string`

The HTTP response header field.

#### Returns

`undefined` \| `string`

### gone()

> `readonly` **gone**: (`response`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

HTTP Gone response method.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### header()

> `readonly` **header**: (`response`, `field`) => `undefined` \| `string`

Get value for header `field`.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

• **field**: `string`

The HTTP response header field.

#### Returns

`undefined` \| `string`

### httpVersionNotSupported()

> `readonly` **httpVersionNotSupported**: (`response`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

HTTP Version Unsupported response method.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### imATeapot()

> `readonly` **imATeapot**: (`response`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

HTTP I'm A Teapot response method.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### imUsed()

> `readonly` **imUsed**: (`response`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

HTTP I'm Used response method.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### insufficientStorage()

> `readonly` **insufficientStorage**: (`response`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

HTTP Insufficient Storage response method.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### internalServerError()

> `readonly` **internalServerError**: (`response`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

HTTP Internal Server Error response method.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### json()

> `readonly` **json**: (`response`, `obj`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

Send JSON response.

Examples:
```js
response.json(null);
response.json({ user: 'tj' });
response.status(500).json('oh noes!');
response.status(404).json("I don't have that");
```

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

• **obj**: `any`

The object to be sent.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### jsonp()

> `readonly` **jsonp**: (`response`, `obj`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

Send JSON response with JSONP callback support.

Examples:
```js
response.jsonp(null);
response.jsonp({ user: 'tj' });
response.status(500).jsonp('oh noes!');
response.status(404).jsonp("I don't have that");
```

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

• **obj**: `any`

The object to be sent.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### lengthRequired()

> `readonly` **lengthRequired**: (`response`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

HTTP Length Required response method.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### link()

> `readonly` **link**: (`response`, `links`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

Set Link header field with the given `links`.

Examples:
```js
response.links({
  next: 'http://api.example.com/users?page=2',
  last: 'http://api.example.com/users?page=5'
});
```

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

• **links**: `any`

The links to be added to headers.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### linkHeaders()

> `readonly` **linkHeaders**: (`response`, `links`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

Set Link header field with the given `links`.

Examples:
```js
response.links({
  next: 'http://api.example.com/users?page=2',
  last: 'http://api.example.com/users?page=5'
});
```

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

• **links**: `any`

The links to be added to headers.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### links()

> `readonly` **links**: (`response`, `links`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

Set Link header field with the given `links`.

Examples:
```js
response.links({
  next: 'http://api.example.com/users?page=2',
  last: 'http://api.example.com/users?page=5'
});
```

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

• **links**: `any`

The links to be added to headers.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### location()

> `readonly` **location**: (`response`, `url`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

Set the location header to url.
The given url can also be the name of a mapped url, for example by default express supports "back" which redirects to the Referrer or Referer headers or "/".

Examples:

response.location('/foo/bar').; response.location('http://example.com'); response.location('../login'); // /blog/post/1 -> /blog/login

Mounting:

When an application is mounted and response.location() is given a path that does not lead with "/" it becomes relative to the mount-point. For example if the application is mounted at "/blog", the following would become "/blog/login".

```response.location('login');```

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

• **url**: `string`

The url for the location to be set to.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### locked()

> `readonly` **locked**: (`response`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

HTTP Request Locked response method.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### loopDetected()

> `readonly` **loopDetected**: (`response`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

HTTP Loop Detected response method.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### methodNotAllowed()

> `readonly` **methodNotAllowed**: (`response`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

HTTP Method Not Allowed response method.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### misdirectedRequest()

> `readonly` **misdirectedRequest**: (`response`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

HTTP Misdirected response method.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### movedPermanently()

> `readonly` **movedPermanently**: (`response`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

HTTP Permanently Moved response method.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### multipleChoices()

> `readonly` **multipleChoices**: (`response`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

HTTP Multiple Choices response method.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### multiStatus()

> `readonly` **multiStatus**: (`response`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

HTTP Multi Status response method.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### namedDownload()

> `readonly` **namedDownload**: (`response`, `path`, `filename`, `callback`?) => `void`

Transfer the file at the given path as an attachment.

Optionally providing an alternate attachment `filename`, and optional `callback fn(err)`.
The callback is invoked when the data transfer is complete, or when an error has occurred.
Be sure to check `response.headersSent` if you plan to respond.

The optional options argument passes through to the underlying `response.sendFile()` call, and takes the exact same parameters.

This method uses `response.sendfile()`.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

• **path**: `string`

The target file path.

• **filename**: `string`

The file name for when the client downloads the file.

• **callback?**: `Errback`

The callback if an error occurs.

#### Returns

`void`

### networkAuthenticationRequired()

> `readonly` **networkAuthenticationRequired**: (`response`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

HTTP Network Authentication Required response method.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### noContent()

> `readonly` **noContent**: (`response`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

HTTP No Content response method.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### nonAuthoritativeInformation()

> `readonly` **nonAuthoritativeInformation**: (`response`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

HTTP Non Authoritative Information response method.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### notAcceptable()

> `readonly` **notAcceptable**: (`response`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

HTTP Not Acceptable response method.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### notExtended()

> `readonly` **notExtended**: (`response`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

HTTP Not Extended response method.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### notFound()

> `readonly` **notFound**: (`response`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

HTTP Not Found response method.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### notImplemented()

> `readonly` **notImplemented**: (`response`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

HTTP Not Implemented response method.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### notModified()

> `readonly` **notModified**: (`response`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

HTTP Not Modified response method.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### ok()

> **ok**: (`response`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### partialContent()

> `readonly` **partialContent**: (`response`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

HTTP Partial Content response method.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### payloadTooLarge()

> `readonly` **payloadTooLarge**: (`response`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

HTTP Payload too large response method.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### paymentRequired()

> `readonly` **paymentRequired**: (`response`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

HTTP Payment Required response method.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### permanentRedirect()

> `readonly` **permanentRedirect**: (`response`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

HTTP Permanent Redirect response method.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### preconditionFailed()

> `readonly` **preconditionFailed**: (`response`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

HTTP Precondition Failed response method.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### preconditionRequired()

> `readonly` **preconditionRequired**: (`response`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

HTTP Required Precondition response method.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### processing()

> `readonly` **processing**: (`response`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

HTTP Processing response method.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### proxyAuthenticationRequired()

> `readonly` **proxyAuthenticationRequired**: (`response`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

HTTP Proxy Auth Required response method.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### rangeNotSatisfiable()

> `readonly` **rangeNotSatisfiable**: (`response`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

HTTP Range error response method.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### redirect()

> `readonly` **redirect**: (`response`, `url`, `status`?) => `void`

Redirect to the given `url` with optional response `status`
defaulting to 302.

The resulting `url` is determined by `response.location()`, so
it will play nicely with mounted apps, relative paths,
`"back"` etc.

Examples:
```js
response.redirect('back');
response.redirect('/foo/bar');
response.redirect('http://example.com');
response.redirect(301, 'http://example.com');
response.redirect('../login'); // /blog/post/1 -> /blog/login
```

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

• **url**: `string`

The url the request/response is being redirected to.

• **status?**: `number`

Optional status code to be sent with the redirect.

#### Returns

`void`

### redirectRequest()

> `readonly` **redirectRequest**: (`response`, `url`, `status`?) => `void`

Redirect to the given `url` with optional response `status`
defaulting to 302.

The resulting `url` is determined by `response.location()`, so
it will play nicely with mounted apps, relative paths,
`"back"` etc.

Examples:
```js
response.redirect('back');
response.redirect('/foo/bar');
response.redirect('http://example.com');
response.redirect(301, 'http://example.com');
response.redirect('../login'); // /blog/post/1 -> /blog/login
```

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

• **url**: `string`

The url the request/response is being redirected to.

• **status?**: `number`

Optional status code to be sent with the redirect.

#### Returns

`void`

### redirectResponse()

> `readonly` **redirectResponse**: (`response`, `url`, `status`?) => `void`

Redirect to the given `url` with optional response `status`
defaulting to 302.

The resulting `url` is determined by `response.location()`, so
it will play nicely with mounted apps, relative paths,
`"back"` etc.

Examples:
```js
response.redirect('back');
response.redirect('/foo/bar');
response.redirect('http://example.com');
response.redirect(301, 'http://example.com');
response.redirect('../login'); // /blog/post/1 -> /blog/login
```

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

• **url**: `string`

The url the request/response is being redirected to.

• **status?**: `number`

Optional status code to be sent with the redirect.

#### Returns

`void`

### removeCookie()

> `readonly` **removeCookie**: (`response`, `name`, `options`?) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

Clear cookie `name`.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

• **name**: `string`

The target cookie.

• **options?**: `CookieOptions`

The target cookie options.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### render()

> `readonly` **render**: (`response`, `view`, `callback`?) => `void`

Render `view` with the given `options` and optional callback `fn`.
When a callback function is given a response will _not_ be made
automatically, otherwise a response of _200_ and _text/html_ is given.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

• **view**: `string`

The file path of the view file to render.

• **callback?**

Optional callback to the render function.

#### Returns

`void`

### requestHeaderFieldsTooLarge()

> `readonly` **requestHeaderFieldsTooLarge**: (`response`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

HTTP Header Fields too large response method.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### requestTimeout()

> `readonly` **requestTimeout**: (`response`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

HTTP Timeout response method.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### resetContent()

> `readonly` **resetContent**: (`response`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

HTTP Reset Content response method.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### responseType()

> `readonly` **responseType**: (`response`, `type`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

Set _Content-Type_ response header with `type` through `mime.lookup()`
when it does not contain "/", or set the Content-Type to `type` otherwise.

Examples:
```js
response.type('.html');
response.type('html');
response.type('json');
response.type('application/json');
response.type('png');
```

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

• **type**: `string`

The response content type.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### seeOther()

> `readonly` **seeOther**: (`response`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

HTTP See Other response method.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### send()

> `readonly` **send**: (`response`, `body`?) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

Send a response.

Examples:
```js
response.send(new Buffer('wahoo'));
response.send({ some: 'json' });
response.send('<p>some html</p>');
response.status(404).send('Sorry, cant find that');
```

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

• **body?**: `any`

The response body to be sent.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### sendAdvancedFile()

> `readonly` **sendAdvancedFile**: (`response`, `path`, `options`, `callback`?) => `void`

Transfer the file at the given `path`.

Automatically sets the _Content-Type_ response header field.
The callback `fn(err)` is invoked when the transfer is complete
or when an error occurs. Be sure to check `response.headersSent`
if you wish to attempt responding, as the header and some data
may have already been transferred.

Options:

  - `maxAge`   defaulting to 0 (can be string converted by `ms`)
  - `root`     root directory for relative filenames
  - `headers`  object of headers to serve with file
  - `dotfiles` serve dotfiles, defaulting to false; can be `"allow"` to send them

Other options are passed along to `send`.

Examples:

The following example illustrates how `response.sendFile()` may
be used as an alternative for the `static()` middleware for
dynamic situations. The code backing `response.sendFile()` is actually
the same code, so HTTP cache support etc is identical.

```js
application.get('/user/:uid/photos/:file', function(req, res){
  var uid = req.params.uid
, file = req.params.file;
  req.user.mayViewFilesFrom(uid, function(yes){
if (yes) {
 response.sendFile('/uploads/' + uid + '/' + file);
} else {
 response.send(403, 'Sorry! you cant see that.');
}
  });
});
```

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

• **path**: `string`

• **options**: [`SendFileOptions`](../../types/express/FileOptions/interfaces/SendFileOptions.md)

• **callback?**: `Errback`

#### Returns

`void`

### sendAttachment()

> `readonly` **sendAttachment**: (`response`, `filename`?) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

Set `"Content-Disposition"` header to attachment with optional `filename`.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

• **filename?**: `string`

The filename for the attachment.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### sendContent()

> `readonly` **sendContent**: (`response`, `body`?) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

Send a response.

Examples:
```js
response.send(new Buffer('wahoo'));
response.send({ some: 'json' });
response.send('<p>some html</p>');
response.status(404).send('Sorry, cant find that');
```

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

• **body?**: `any`

The response body to be sent.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### sendFile()

> `readonly` **sendFile**: (`response`, `path`, `callback`?) => `void`

Transfer the file at the given `path`.

Automatically sets the _Content-Type_ response header field.
The callback `fn(err)` is invoked when the transfer is complete
or when an error occurs. Be sure to check `response.headersSent`
if you wish to attempt responding, as the header and some data
may have already been transferred.

Other options are passed along to `send`.

Examples:

The following example illustrates how `response.sendFile()` may
be used as an alternative for the `static()` middleware for
dynamic situations. The code backing `response.sendFile()` is actually
the same code, so HTTP cache support etc is identical.

```js
application.get('/user/:uid/photos/:file', function(req, res){
  var uid = req.params.uid
, file = req.params.file;
  req.user.mayViewFilesFrom(uid, function(yes){
if (yes) {
 response.sendFile('/uploads/' + uid + '/' + file);
} else {
 response.send(403, 'Sorry! you cant see that.');
}
  });
});
```

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

• **path**: `string`

• **callback?**: `Errback`

#### Returns

`void`

### sendHeader()

> `readonly` **sendHeader**: (`response`, `name`, `value`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

Sets a single header value. If the header already exists in the to-be-sent
headers, its value will be replaced. Use an array of strings to send multiple
headers with the same name.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

• **name**: `string`

• **value**: `string` \| `number` \| readonly `string`[]

The HTTP response header field value.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### sendStatus()

> `readonly` **sendStatus**: (`response`, `code`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

Set the response HTTP status code to `statusCode` and send its string representation as the response body.
Source: http://expressjs.com/4x/api.html#res.sendStatus

Examples:
```js
response.sendStatus(200); // equivalent to response.status(200).send('OK')
response.sendStatus(403); // equivalent to response.status(403).send('Forbidden')
response.sendStatus(404); // equivalent to response.status(404).send('Not Found')
response.sendStatus(500); // equivalent to response.status(500).send('Internal Server Error')
```

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

• **code**: `number`

The response status code.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### serviceUnavailable()

> `readonly` **serviceUnavailable**: (`response`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

HTTP Service Unavailable response method.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### set()

> `readonly` **set**: (`response`, `field`, `value`?) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

Set header `field` to `value`, or pass
an object of header fields.

Examples:
```js
response.set('Foo', ['bar', 'baz']);
response.set('Accept', 'application/json');
response.set({ Accept: 'text/plain', 'X-API-Key': 'tobi' });
```
Aliased as `response.header()`.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

• **field**: `any`

The HTTP response header field.

• **value?**: `string` \| `string`[]

The HTTP response header field value.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### setAttachment()

> `readonly` **setAttachment**: (`response`, `filename`?) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

Set `"Content-Disposition"` header to attachment with optional `filename`.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

• **filename?**: `string`

The filename for the attachment.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### setContent()

> `readonly` **setContent**: (`response`, `type`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

Set _Content-Type_ response header with `type` through `mime.lookup()`
when it does not contain "/", or set the Content-Type to `type` otherwise.

Examples:
```js
response.type('.html');
response.type('html');
response.type('json');
response.type('application/json');
response.type('png');
```

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

• **type**: `string`

The response content type.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### setContentType()

> `readonly` **setContentType**: (`response`, `type`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

Set _Content-Type_ response header with `type` through `mime.lookup()`
when it does not contain "/", or set the Content-Type to `type` otherwise.

Examples:
```js
response.type('.html');
response.type('html');
response.type('json');
response.type('application/json');
response.type('png');
```

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

• **type**: `string`

The response content type.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### setCookie()

> `readonly` **setCookie**: (`response`, `name`, `value`, `options`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

Set cookie `name` to `val`, with the given `options`.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

• **name**: `string`

The name of the cookie.

• **value**: `string`

The value of the cookie.

• **options**: `CookieOptions`

The cookie options.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

#### Example

```ts
// "Remember Me" for 15 minutes
response.cookie('rememberme', '1', { expires: new Date(Date.now() + 900000), httpOnly: true });

// save as above
response.cookie('rememberme', '1', { maxAge: 900000, httpOnly: true })

@readonly
```

### setHeader()

> `readonly` **setHeader**: (`response`, `field`, `value`?) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

Set header `field` to `value`, or pass
an object of header fields.

Examples:
```js
response.set('Foo', ['bar', 'baz']);
response.set('Accept', 'application/json');
response.set({ Accept: 'text/plain', 'X-API-Key': 'tobi' });
```
Aliased as `response.header()`.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

• **field**: `any`

The HTTP response header field.

• **value?**: `string` \| `string`[]

The HTTP response header field value.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### setResponse()

> `readonly` **setResponse**: (`response`, `type`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

Set _Content-Type_ response header with `type` through `mime.lookup()`
when it does not contain "/", or set the Content-Type to `type` otherwise.

Examples:
```js
response.type('.html');
response.type('html');
response.type('json');
response.type('application/json');
response.type('png');
```

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

• **type**: `string`

The response content type.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### setResponseType()

> `readonly` **setResponseType**: (`response`, `type`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

Set _Content-Type_ response header with `type` through `mime.lookup()`
when it does not contain "/", or set the Content-Type to `type` otherwise.

Examples:
```js
response.type('.html');
response.type('html');
response.type('json');
response.type('application/json');
response.type('png');
```

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

• **type**: `string`

The response content type.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### setStatus()

> `readonly` **setStatus**: (`response`, `code`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

Set the response HTTP status code to `statusCode` and send its string representation as the response body.
Source: http://expressjs.com/4x/api.html#res.sendStatus

Examples:
```js
response.sendStatus(200); // equivalent to response.status(200).send('OK')
response.sendStatus(403); // equivalent to response.status(403).send('Forbidden')
response.sendStatus(404); // equivalent to response.status(404).send('Not Found')
response.sendStatus(500); // equivalent to response.status(500).send('Internal Server Error')
```

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

• **code**: `number`

The response status code.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### setType()

> `readonly` **setType**: (`response`, `type`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

Set _Content-Type_ response header with `type` through `mime.lookup()`
when it does not contain "/", or set the Content-Type to `type` otherwise.

Examples:
```js
response.type('.html');
response.type('html');
response.type('json');
response.type('application/json');
response.type('png');
```

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

• **type**: `string`

The response content type.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### simpleCookie()

> `readonly` **simpleCookie**: (`response`, `name`, `value`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

Set cookie `name` to `val`, with the given `options`.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

• **name**: `string`

The name of the cookie.

• **value**: `string`

The value of the cookie.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

#### Example

```ts
// "Remember Me" for 15 minutes
response.cookie('rememberme', '1', { expires: new Date(Date.now() + 900000), httpOnly: true });

// save as above
response.cookie('rememberme', '1', { maxAge: 900000, httpOnly: true })

@readonly
```

### status()

> `readonly` **status**: (`response`, `code`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

Set the response HTTP status code to `statusCode` and send its string representation as the response body.
Source: http://expressjs.com/4x/api.html#res.sendStatus

Examples:
```js
response.sendStatus(200); // equivalent to response.status(200).send('OK')
response.sendStatus(403); // equivalent to response.status(403).send('Forbidden')
response.sendStatus(404); // equivalent to response.status(404).send('Not Found')
response.sendStatus(500); // equivalent to response.status(500).send('Internal Server Error')
```

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

• **code**: `number`

The response status code.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### switchingProtocols()

> `readonly` **switchingProtocols**: (`response`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

HTTP Switching Protocols response method.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### temporaryRedirect()

> `readonly` **temporaryRedirect**: (`response`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

HTTP Temporary Redirect response method.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### tooEarly()

> `readonly` **tooEarly**: (`response`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

HTTP Too Early response method.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### tooManyRequests()

> `readonly` **tooManyRequests**: (`response`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

HTTP Too many requests response method.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### type()

> `readonly` **type**: (`response`, `type`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

Set _Content-Type_ response header with `type` through `mime.lookup()`
when it does not contain "/", or set the Content-Type to `type` otherwise.

Examples:
```js
response.type('.html');
response.type('html');
response.type('json');
response.type('application/json');
response.type('png');
```

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

• **type**: `string`

The response content type.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### unauthorized()

> `readonly` **unauthorized**: (`response`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

HTTP Unauthorised response method.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### unavailableForLegalReasons()

> `readonly` **unavailableForLegalReasons**: (`response`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

HTTP Unavailable for legal reasons response method.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### unprocessableEntity()

> `readonly` **unprocessableEntity**: (`response`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

HTTP Unprocessable Entity response method.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### unsupportedMediaType()

> `readonly` **unsupportedMediaType**: (`response`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

HTTP Unsupported Media Type response method.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### upgradeRequired()

> `readonly` **upgradeRequired**: (`response`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

HTTP Upgrade Required response method.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### upload()

> `readonly` **upload**: (`response`, `path`, `callback`?) => `void`

Transfer the file at the given `path`.

Automatically sets the _Content-Type_ response header field.
The callback `fn(err)` is invoked when the transfer is complete
or when an error occurs. Be sure to check `response.headersSent`
if you wish to attempt responding, as the header and some data
may have already been transferred.

Other options are passed along to `send`.

Examples:

The following example illustrates how `response.sendFile()` may
be used as an alternative for the `static()` middleware for
dynamic situations. The code backing `response.sendFile()` is actually
the same code, so HTTP cache support etc is identical.

```js
application.get('/user/:uid/photos/:file', function(req, res){
  var uid = req.params.uid
, file = req.params.file;
  req.user.mayViewFilesFrom(uid, function(yes){
if (yes) {
 response.sendFile('/uploads/' + uid + '/' + file);
} else {
 response.send(403, 'Sorry! you cant see that.');
}
  });
});
```

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

• **path**: `string`

• **callback?**: `Errback`

#### Returns

`void`

### uploadFile()

> `readonly` **uploadFile**: (`response`, `path`, `callback`?) => `void`

Transfer the file at the given `path`.

Automatically sets the _Content-Type_ response header field.
The callback `fn(err)` is invoked when the transfer is complete
or when an error occurs. Be sure to check `response.headersSent`
if you wish to attempt responding, as the header and some data
may have already been transferred.

Other options are passed along to `send`.

Examples:

The following example illustrates how `response.sendFile()` may
be used as an alternative for the `static()` middleware for
dynamic situations. The code backing `response.sendFile()` is actually
the same code, so HTTP cache support etc is identical.

```js
application.get('/user/:uid/photos/:file', function(req, res){
  var uid = req.params.uid
, file = req.params.file;
  req.user.mayViewFilesFrom(uid, function(yes){
if (yes) {
 response.sendFile('/uploads/' + uid + '/' + file);
} else {
 response.send(403, 'Sorry! you cant see that.');
}
  });
});
```

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

• **path**: `string`

• **callback?**: `Errback`

#### Returns

`void`

### uriTooLong()

> `readonly` **uriTooLong**: (`response`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

HTTP URI too long response method.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### useProxy()

> `readonly` **useProxy**: (`response`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

HTTP Use Proxy response method.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### variantAlsoNegotiates()

> `readonly` **variantAlsoNegotiates**: (`response`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

HTTP Variant Also Negotiates response method.

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

### vary()

> `readonly` **vary**: (`response`, `field`) => `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

Adds the field to the Vary response header, if it is not there already.
Examples:
```js
response.vary('User-Agent').render('docs');
```

#### Parameters

• **response**: `Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

The `ApplicationResponse` object from your route handler.

• **field**: `string`

The header.

#### Returns

`Response`\<`any`, [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\>\>

## Defined in

[utilities/exports/ResponseUtil.ts:16](https://github.com/Bracketed/jova.js/blob/2f92fdba02fb19f5694e65f757c95f41b8415e1b/src/utilities/exports/ResponseUtil.ts#L16)
