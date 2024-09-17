[Jova.js by Bracketed Softworks v1.0.0](../wiki/modules) / [types/express/DownloadOptions](../wiki/types.express.DownloadOptions) / DownloadOptions

# Interface: DownloadOptions

## Extends

- [`SendOptions`](../wiki/types.express.SendOptions.Interface.SendOptions)

## Properties

### acceptRanges?

> `optional` **acceptRanges**: `boolean`

Enable or disable accepting ranged requests, defaults to true.
Disabling this will not send Accept-Ranges and ignore the contents of the Range request header.

#### Inherited from

[`SendOptions`](../wiki/types.express.SendOptions.Interface.SendOptions).[`acceptRanges`](../wiki/types.express.SendOptions.Interface.SendOptions#acceptranges)

#### Defined in

types/express/SendOptions.ts:6

***

### cacheControl?

> `optional` **cacheControl**: `boolean`

Enable or disable setting Cache-Control response header, defaults to true.
Disabling this will ignore the maxAge option.

#### Inherited from

[`SendOptions`](../wiki/types.express.SendOptions.Interface.SendOptions).[`cacheControl`](../wiki/types.express.SendOptions.Interface.SendOptions#cachecontrol)

#### Defined in

types/express/SendOptions.ts:12

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

[`SendOptions`](../wiki/types.express.SendOptions.Interface.SendOptions).[`dotfiles`](../wiki/types.express.SendOptions.Interface.SendOptions#dotfiles)

#### Defined in

types/express/SendOptions.ts:24

***

### end?

> `optional` **end**: `number`

Byte offset at which the stream ends, defaults to the length of the file minus 1.
The end is inclusive in the stream, meaning end: 3 will include the 4th byte in the stream.

#### Inherited from

[`SendOptions`](../wiki/types.express.SendOptions.Interface.SendOptions).[`end`](../wiki/types.express.SendOptions.Interface.SendOptions#end)

#### Defined in

types/express/SendOptions.ts:30

***

### etag?

> `optional` **etag**: `boolean`

Enable or disable etag generation, defaults to true.

#### Inherited from

[`SendOptions`](../wiki/types.express.SendOptions.Interface.SendOptions).[`etag`](../wiki/types.express.SendOptions.Interface.SendOptions#etag)

#### Defined in

types/express/SendOptions.ts:35

***

### extensions?

> `optional` **extensions**: `string` \| `boolean` \| `string`[]

If a given file doesn't exist, try appending one of the given extensions, in the given order.
By default, this is disabled (set to false).
An example value that will serve extension-less HTML files: ['html', 'htm'].
This is skipped if the requested file already has an extension.

#### Inherited from

[`SendOptions`](../wiki/types.express.SendOptions.Interface.SendOptions).[`extensions`](../wiki/types.express.SendOptions.Interface.SendOptions#extensions)

#### Defined in

types/express/SendOptions.ts:43

***

### headers?

> `optional` **headers**: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `unknown`\>

Object containing HTTP headers to serve with the file. The header `Content-Disposition` will be overridden by the filename argument.

#### Defined in

types/express/DownloadOptions.ts:5

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

[`SendOptions`](../wiki/types.express.SendOptions.Interface.SendOptions).[`immutable`](../wiki/types.express.SendOptions.Interface.SendOptions#immutable)

#### Defined in

types/express/SendOptions.ts:51

***

### index?

> `optional` **index**: `string` \| `boolean` \| `string`[]

By default send supports "index.html" files, to disable this set false or to supply a new index pass a string or an array in preferred order.

#### Inherited from

[`SendOptions`](../wiki/types.express.SendOptions.Interface.SendOptions).[`index`](../wiki/types.express.SendOptions.Interface.SendOptions#index)

#### Defined in

types/express/SendOptions.ts:56

***

### lastModified?

> `optional` **lastModified**: `boolean`

Enable or disable Last-Modified header, defaults to true.
Uses the file system's last modified value.

#### Inherited from

[`SendOptions`](../wiki/types.express.SendOptions.Interface.SendOptions).[`lastModified`](../wiki/types.express.SendOptions.Interface.SendOptions#lastmodified)

#### Defined in

types/express/SendOptions.ts:62

***

### maxAge?

> `optional` **maxAge**: `string` \| `number`

Provide a max-age in milliseconds for http caching, defaults to 0.
This can also be a string accepted by the ms module.

#### Inherited from

[`SendOptions`](../wiki/types.express.SendOptions.Interface.SendOptions).[`maxAge`](../wiki/types.express.SendOptions.Interface.SendOptions#maxage)

#### Defined in

types/express/SendOptions.ts:68

***

### root?

> `optional` **root**: `string`

Serve files relative to path.

#### Inherited from

[`SendOptions`](../wiki/types.express.SendOptions.Interface.SendOptions).[`root`](../wiki/types.express.SendOptions.Interface.SendOptions#root)

#### Defined in

types/express/SendOptions.ts:73

***

### start?

> `optional` **start**: `number`

Byte offset at which the stream starts, defaults to 0.
The start is inclusive, meaning start: 2 will include the 3rd byte in the stream.

#### Inherited from

[`SendOptions`](../wiki/types.express.SendOptions.Interface.SendOptions).[`start`](../wiki/types.express.SendOptions.Interface.SendOptions#start)

#### Defined in

types/express/SendOptions.ts:79
