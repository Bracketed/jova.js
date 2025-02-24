# Interface: DownloadOptions

## Extends

- [`SendOptions`](../../SendOptions/interfaces/SendOptions.md)

## Properties

### acceptRanges?

> `optional` **acceptRanges**: `boolean`

Enable or disable accepting ranged requests, defaults to true.
Disabling this will not send Accept-Ranges and ignore the contents of the Range request header.

#### Inherited from

[`SendOptions`](../../SendOptions/interfaces/SendOptions.md).[`acceptRanges`](../../SendOptions/interfaces/SendOptions.md#acceptranges)

#### Defined in

[types/express/SendOptions.ts:6](https://github.com/Bracketed/jova.js/blob/2f92fdba02fb19f5694e65f757c95f41b8415e1b/src/types/express/SendOptions.ts#L6)

***

### cacheControl?

> `optional` **cacheControl**: `boolean`

Enable or disable setting Cache-Control response header, defaults to true.
Disabling this will ignore the maxAge option.

#### Inherited from

[`SendOptions`](../../SendOptions/interfaces/SendOptions.md).[`cacheControl`](../../SendOptions/interfaces/SendOptions.md#cachecontrol)

#### Defined in

[types/express/SendOptions.ts:12](https://github.com/Bracketed/jova.js/blob/2f92fdba02fb19f5694e65f757c95f41b8415e1b/src/types/express/SendOptions.ts#L12)

***

### dotfiles?

> `optional` **dotfiles**: `"allow"` \| `"deny"` \| `"ignore"`

Set how "dotfiles" are treated when encountered.
A dotfile is a file or directory that begins with a dot (".").
Note this check is done on the path itself without checking if the path actually exists on the disk.
If root is specified, only the dotfiles above the root are checked (i.e. the root itself can be within a dotfile when when set to "deny").
'allow' No special treatment for dotfiles.
'deny' Send a 403 for any request for a dotfile.
'ignore' Pretend like the dotfile does not exist and 404.
The default value is similar to 'ignore', with the exception that this default will not ignore the files within a directory that begins with a dot, for backward-compatibility.

#### Inherited from

[`SendOptions`](../../SendOptions/interfaces/SendOptions.md).[`dotfiles`](../../SendOptions/interfaces/SendOptions.md#dotfiles)

#### Defined in

[types/express/SendOptions.ts:24](https://github.com/Bracketed/jova.js/blob/2f92fdba02fb19f5694e65f757c95f41b8415e1b/src/types/express/SendOptions.ts#L24)

***

### end?

> `optional` **end**: `number`

Byte offset at which the stream ends, defaults to the length of the file minus 1.
The end is inclusive in the stream, meaning end: 3 will include the 4th byte in the stream.

#### Inherited from

[`SendOptions`](../../SendOptions/interfaces/SendOptions.md).[`end`](../../SendOptions/interfaces/SendOptions.md#end)

#### Defined in

[types/express/SendOptions.ts:30](https://github.com/Bracketed/jova.js/blob/2f92fdba02fb19f5694e65f757c95f41b8415e1b/src/types/express/SendOptions.ts#L30)

***

### etag?

> `optional` **etag**: `boolean`

Enable or disable etag generation, defaults to true.

#### Inherited from

[`SendOptions`](../../SendOptions/interfaces/SendOptions.md).[`etag`](../../SendOptions/interfaces/SendOptions.md#etag)

#### Defined in

[types/express/SendOptions.ts:35](https://github.com/Bracketed/jova.js/blob/2f92fdba02fb19f5694e65f757c95f41b8415e1b/src/types/express/SendOptions.ts#L35)

***

### extensions?

> `optional` **extensions**: `string` \| `boolean` \| `string`[]

If a given file doesn't exist, try appending one of the given extensions, in the given order.
By default, this is disabled (set to false).
An example value that will serve extension-less HTML files: ['html', 'htm'].
This is skipped if the requested file already has an extension.

#### Inherited from

[`SendOptions`](../../SendOptions/interfaces/SendOptions.md).[`extensions`](../../SendOptions/interfaces/SendOptions.md#extensions)

#### Defined in

[types/express/SendOptions.ts:43](https://github.com/Bracketed/jova.js/blob/2f92fdba02fb19f5694e65f757c95f41b8415e1b/src/types/express/SendOptions.ts#L43)

***

### headers?

> `optional` **headers**: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `unknown`\>

Object containing HTTP headers to serve with the file. The header `Content-Disposition` will be overridden by the filename argument.

#### Defined in

[types/express/DownloadOptions.ts:5](https://github.com/Bracketed/jova.js/blob/2f92fdba02fb19f5694e65f757c95f41b8415e1b/src/types/express/DownloadOptions.ts#L5)

***

### immutable?

> `optional` **immutable**: `boolean`

Enable or disable the immutable directive in the Cache-Control response header, defaults to false.
If set to true, the maxAge option should also be specified to enable caching.
The immutable directive will prevent supported clients from making conditional requests during the life of the maxAge option to check if the file has changed.

#### Default

```ts
false
```

#### Inherited from

[`SendOptions`](../../SendOptions/interfaces/SendOptions.md).[`immutable`](../../SendOptions/interfaces/SendOptions.md#immutable)

#### Defined in

[types/express/SendOptions.ts:51](https://github.com/Bracketed/jova.js/blob/2f92fdba02fb19f5694e65f757c95f41b8415e1b/src/types/express/SendOptions.ts#L51)

***

### index?

> `optional` **index**: `string` \| `boolean` \| `string`[]

By default send supports "index.html" files, to disable this set false or to supply a new index pass a string or an array in preferred order.

#### Inherited from

[`SendOptions`](../../SendOptions/interfaces/SendOptions.md).[`index`](../../SendOptions/interfaces/SendOptions.md#index)

#### Defined in

[types/express/SendOptions.ts:56](https://github.com/Bracketed/jova.js/blob/2f92fdba02fb19f5694e65f757c95f41b8415e1b/src/types/express/SendOptions.ts#L56)

***

### lastModified?

> `optional` **lastModified**: `boolean`

Enable or disable Last-Modified header, defaults to true.
Uses the file system's last modified value.

#### Inherited from

[`SendOptions`](../../SendOptions/interfaces/SendOptions.md).[`lastModified`](../../SendOptions/interfaces/SendOptions.md#lastmodified)

#### Defined in

[types/express/SendOptions.ts:62](https://github.com/Bracketed/jova.js/blob/2f92fdba02fb19f5694e65f757c95f41b8415e1b/src/types/express/SendOptions.ts#L62)

***

### maxAge?

> `optional` **maxAge**: `string` \| `number`

Provide a max-age in milliseconds for http caching, defaults to 0.
This can also be a string accepted by the ms module.

#### Inherited from

[`SendOptions`](../../SendOptions/interfaces/SendOptions.md).[`maxAge`](../../SendOptions/interfaces/SendOptions.md#maxage)

#### Defined in

[types/express/SendOptions.ts:68](https://github.com/Bracketed/jova.js/blob/2f92fdba02fb19f5694e65f757c95f41b8415e1b/src/types/express/SendOptions.ts#L68)

***

### root?

> `optional` **root**: `string`

Serve files relative to path.

#### Inherited from

[`SendOptions`](../../SendOptions/interfaces/SendOptions.md).[`root`](../../SendOptions/interfaces/SendOptions.md#root)

#### Defined in

[types/express/SendOptions.ts:73](https://github.com/Bracketed/jova.js/blob/2f92fdba02fb19f5694e65f757c95f41b8415e1b/src/types/express/SendOptions.ts#L73)

***

### start?

> `optional` **start**: `number`

Byte offset at which the stream starts, defaults to 0.
The start is inclusive, meaning start: 2 will include the 3rd byte in the stream.

#### Inherited from

[`SendOptions`](../../SendOptions/interfaces/SendOptions.md).[`start`](../../SendOptions/interfaces/SendOptions.md#start)

#### Defined in

[types/express/SendOptions.ts:79](https://github.com/Bracketed/jova.js/blob/2f92fdba02fb19f5694e65f757c95f41b8415e1b/src/types/express/SendOptions.ts#L79)
