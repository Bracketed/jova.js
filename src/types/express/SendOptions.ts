/**
 * @name SendOptions
 * @description File sending options for Jova.js.
 *
 * @module Types
 * @interface SendOptions
 */
export interface SendOptions {
	/**
	 * @name acceptRanges
	 * @description
	 * Enable or disable accepting ranged requests, defaults to `true`.
	 * Disabling this will not send `Accept-Ranges` and ignore the contents of the Range request header.
	 * @default true
	 * @type boolean | undefined
	 */
	acceptRanges?: boolean | undefined;

	/**
	 * @name cacheControl
	 * @description
	 * Enable or disable setting `Cache-Control` response header, defaults to `true`.
	 * Disabling this will ignore the `maxAge` option.
	 * @default true
	 * @type boolean | undefined
	 */
	cacheControl?: boolean | undefined;

	/**
	 * @name dotfiles
	 * @description
	 * Set how "dotfiles" are treated when encountered.
	 * A dotfile is a file or directory that begins with a dot (".").
	 * Note this check is done on the path itself without checking if the path actually exists on the disk.
	 * If root is specified, only the dotfiles above the root are checked (i.e. the root itself can be within a dotfile when when set to `"deny"`).
	 * - `'allow'` No special treatment for dotfiles.
	 * - `'deny'` Send a `403` for any request for a dotfile.
	 * - `'ignore'` Pretend like the dotfile does not exist and `404`.
	 * The default value is similar to `'ignore'`, with the exception that this default will not ignore the files within a directory that begins with a dot, for backward-compatibility.
	 * @default 'ignore'
	 * @type 'allow' | 'deny' | 'ignore' | undefined
	 */
	dotfiles?: 'allow' | 'deny' | 'ignore' | undefined;

	/**
	 * @name end
	 * @description
	 * Byte offset at which the stream ends, defaults to the length of the file minus `1`.
	 * The end is inclusive in the stream, meaning end: `3` will include the 4th byte in the stream.
	 * @type number | undefined
	 */
	end?: number | undefined;

	/**
	 * @name etag
	 * @description
	 * Enable or disable etag generation, defaults to `true`.
	 * @default true
	 * @type boolean | undefined
	 */
	etag?: boolean | undefined;

	/**
	 * @name extensions
	 * @description
	 * If a given file doesn't exist, try appending one of the given extensions, in the given order.
	 * By default, this is disabled (set to `false`).
	 * An example value that will serve extension-less HTML files: `['html', 'htm']`.
	 * This is skipped if the requested file already has an extension.
	 * @type string[] | string | boolean | undefined
	 */
	extensions?: string[] | string | boolean | undefined;

	/**
	 * @name immutable
	 * @description
	 * Enable or disable the immutable directive in the `Cache-Control` response header, defaults to `false`.
	 * If set to `true`, the `maxAge` option should also be specified to enable caching.
	 * The immutable directive will prevent supported clients from making conditional requests during the life of the `maxAge` option to check if the file has changed.
	 * @default false
	 * @type boolean | undefined
	 */
	immutable?: boolean | undefined;

	/**
	 * @name index
	 * @description
	 * By default send supports `"index.html"` files, to disable this set `false` or to supply a new index pass a `string` or an `array` in preferred order.
	 * @type string[] | string | boolean | undefined
	 */
	index?: string[] | string | boolean | undefined;

	/**
	 * @name lastModified
	 * @description
	 * Enable or disable Last-Modified header, defaults to `true`.
	 * Uses the file system's last modified value.
	 * @type boolean | undefined
	 */
	lastModified?: boolean | undefined;

	/**
	 * @name maxAge
	 * @description
	 * Provide a max-age in milliseconds for http caching, defaults to `0`.
	 * This can also be a string accepted by the `ms` module.
	 * @type string | number | undefined
	 */
	maxAge?: string | number | undefined;

	/**
	 * @name root
	 * @description
	 * Serve files relative to path.
	 * @type string | undefined
	 */
	root?: string | undefined;

	/**
	 * @name start
	 * @description
	 * Byte offset at which the stream starts, defaults to `0`.
	 * The start is inclusive, meaning start: `2` will include the 3rd byte in the stream.
	 * @type number | undefined
	 */
	start?: number | undefined;
}
