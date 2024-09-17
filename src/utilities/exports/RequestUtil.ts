import { ApplicationRequest, Charset, ContentType, Encoder, Language, RangeParser } from '../../types/index.js';

/**
 * A utility for managing request.
 *
 * @readonly
 */
export const request = {
	/**
	 * Get value for header `field`.
	 *
	 * @param request
	 * The `ApplicationRequest` object from your route handler.
	 * @param field
	 * The HTTP request header field.
	 *
	 * @returns `string | undefined`
	 * @readonly
	 */
	getHeader: (request: ApplicationRequest, field: string): string | undefined => request.get(field),
	/**
	 * Get value for header `field`.
	 *
	 * @param request
	 * The `ApplicationRequest` object from your route handler.
	 * @param field
	 * The HTTP request header field.
	 *
	 * @returns `string | undefined`
	 * @readonly
	 */
	header: (request: ApplicationRequest, field: string): string | undefined => request.get(field),
	/**
	 * Get value for header `field`.
	 *
	 * @param request
	 * The `ApplicationRequest` object from your route handler.
	 * @param field
	 * The HTTP request header field.

	 * @returns `string | undefined`
	 * @readonly
	 */
	get: (request: ApplicationRequest, field: string): string | undefined => request.get(field),
	/**
	 * Check if the incoming request contains the "Content-Type"
	 * header field, and it contains the give mime `type`.
	 *
	 * Examples:
	 * ```js
	 *      // With Content-Type: text/html; charset=utf-8
	 *      request.is('html');
	 *      request.is('text/html');
	 *      request.is('text/*');
	 *      // => true
	 *
	 *      // When Content-Type is application/json
	 *      request.is('json');
	 *      request.is('application/json');
	 *      request.is('application/*');
	 *      // => true
	 *
	 *      request.is('html');
	 *      // => false
	 * ```
	 *
	 * @param request
	 * The `ApplicationRequest` object from your route handler.
	 * @param type
	 * The Content Type.

	 * @returns `string | false | null`
	 * @readonly
	 */
	is: (request: ApplicationRequest, type: string | string[] | ContentType | ContentType[]): string | false | null =>
		request.is(type),
	/**
	 * Check if the incoming request contains the "Content-Type"
	 * header field, and it contains the give mime `type`.
	 *
	 * Examples:
	 * ```js
	 *      // With Content-Type: text/html; charset=utf-8
	 *      request.is('html');
	 *      request.is('text/html');
	 *      request.is('text/*');
	 *      // => true
	 *
	 *      // When Content-Type is application/json
	 *      request.is('json');
	 *      request.is('application/json');
	 *      request.is('application/*');
	 *      // => true
	 *
	 *      request.is('html');
	 *      // => false
	 * ```
	 *
	 * @param request
	 * The `ApplicationRequest` object from your route handler.
	 * @param type
	 * The Content Type.

	 * @returns `string | false | null`
	 * @readonly
	 */
	isType: (
		request: ApplicationRequest,
		type: string | string[] | ContentType | ContentType[]
	): string | false | null => request.is(type),
	/**
	 * Check if the incoming request contains the "Content-Type"
	 * header field, and it contains the give mime `type`.
	 *
	 * Examples:
	 * ```js
	 *      // With Content-Type: text/html; charset=utf-8
	 *      request.is('html');
	 *      request.is('text/html');
	 *      request.is('text/*');
	 *      // => true
	 *
	 *      // When Content-Type is application/json
	 *      request.is('json');
	 *      request.is('application/json');
	 *      request.is('application/*');
	 *      // => true
	 *
	 *      request.is('html');
	 *      // => false
	 * ```
	 *
	 * @param request
	 * The `ApplicationRequest` object from your route handler.
	 * @param type
	 * The Content Type.

	 * @returns `string | false | null`
	 * @readonly
	 */
	isContentType: (
		request: ApplicationRequest,
		type: string | string[] | ContentType | ContentType[]
	): string | false | null => request.is(type),
	/**
	 * Check if the incoming request contains the "Content-Type"
	 * header field, and it contains the give mime `type`.
	 *
	 * Examples:
	 * ```js
	 *      // With Content-Type: text/html; charset=utf-8
	 *      request.is('html');
	 *      request.is('text/html');
	 *      request.is('text/*');
	 *      // => true
	 *
	 *      // When Content-Type is application/json
	 *      request.is('json');
	 *      request.is('application/json');
	 *      request.is('application/*');
	 *      // => true
	 *
	 *      request.is('html');
	 *      // => false
	 * ```
	 *
	 * @param request
	 * The `ApplicationRequest` object from your route handler.
	 * @param type
	 * The Content Type.

	 * @returns `string | false | null`
	 * @readonly
	 */
	verify: (
		request: ApplicationRequest,
		type: string | string[] | ContentType | ContentType[]
	): string | false | null => request.is(type),
	/**
	 * Check if the incoming request contains the "Content-Type"
	 * header field, and it contains the give mime `type`.
	 *
	 * Examples:
	 * ```js
	 *      // With Content-Type: text/html; charset=utf-8
	 *      request.is('html');
	 *      request.is('text/html');
	 *      request.is('text/*');
	 *      // => true
	 *
	 *      // When Content-Type is application/json
	 *      request.is('json');
	 *      request.is('application/json');
	 *      request.is('application/*');
	 *      // => true
	 *
	 *      request.is('html');
	 *      // => false
	 * ```
	 *
	 * @param request
	 * The `ApplicationRequest` object from your route handler.
	 * @param type
	 * The Content Type.

	 * @returns `string | false | null`
	 * @readonly
	 */
	verifyType: (
		request: ApplicationRequest,
		type: string | string[] | ContentType | ContentType[]
	): string | false | null => request.is(type),
	/**
	 * Check if the incoming request contains the "Content-Type"
	 * header field, and it contains the give mime `type`.
	 *
	 * Examples:
	 * ```js
	 *      // With Content-Type: text/html; charset=utf-8
	 *      request.is('html');
	 *      request.is('text/html');
	 *      request.is('text/*');
	 *      // => true
	 *
	 *      // When Content-Type is application/json
	 *      request.is('json');
	 *      request.is('application/json');
	 *      request.is('application/*');
	 *      // => true
	 *
	 *      request.is('html');
	 *      // => false
	 * ```
	 *
	 * @param request
	 * The `ApplicationRequest` object from your route handler.
	 * @param type
	 * The Content Type.

	 * @returns `string | false | null`
	 * @readonly
	 */
	verifyContentType: (
		request: ApplicationRequest,
		type: string | string[] | ContentType | ContentType[]
	): string | false | null => request.is(type),
	/**
	 * Parse Range header field, capping to the given `size`.
	 *
	 * An array of ranges will be returned or negative numbers indicating an error parsing.
	 *
	 *  -  -2 signals a malformed header string
	 *  -  -1 signals an unsatisfiable range
	 *
	 * Unspecified ranges such as "0-" require knowledge of your resource length. In
	 * the case of a byte range this is of course the total number of bytes.
	 * If the Range header field is not given `undefined` is returned.
	 * If the Range header field is given, return value is a result of range-parser.
	 * See more ./types/express/RangeParser.ts
	 *
	 * NOTE: remember that ranges are inclusive, so for example "Range: users=0-3"
	 * should respond with 4 users when available, not 3.
	 *
	 * @param request
	 * The `ApplicationRequest` object from your route handler.
	 * @param size
	 * The maximum size of the resource.
	 * @param options
	 * An object that can have the following properties:
	 * - combine: `boolean` - Specify if overlapping & adjacent ranges should be combined, defaults to `false`. When `true`, ranges will be combined and returned as if they were specified that way in the header.
	 *
	 * @returns `RangeParser.Ranges | RangeParser.Result | undefined`
	 * @readonly
	 */
	range: (
		request: ApplicationRequest,
		size: number,
		options?: RangeParser.Options
	): RangeParser.Ranges | RangeParser.Result | undefined => request.range(size, options),
	/**
	 * Check if the given `type(s)` is acceptable, returning
	 * the best match when true, otherwise `undefined`, in which
	 * case you should respond with 406 "Not Acceptable".
	 *
	 * The `type` value may be a single mime type string
	 * such as "application/json", the extension name
	 * such as "json", a comma-delimited list such as "json, html, text/plain",
	 * or an array `["json", "html", "text/plain"]`. When a list
	 * or array is given the _best_ match, if any is returned.
	 *
	 * Examples:
	 * ```js
	 *     // Accept: text/html
	 *     request.accepts('html');
	 *     // => "html"
	 *
	 *     // Accept: text/*, application/json
	 *     request.accepts('html');
	 *     // => "html"
	 *     request.accepts('text/html');
	 *     // => "text/html"
	 *     request.accepts('json, text');
	 *     // => "json"
	 *     request.accepts('application/json');
	 *     // => "application/json"
	 *
	 *     // Accept: text/*, application/json
	 *     request.accepts('image/png');
	 *     request.accepts('png');
	 *     // => false
	 *
	 *     // Accept: text/*;q=.5, application/json
	 *     request.accepts(['html', 'json']);
	 *     request.accepts('html, json');
	 *     // => "json"
	 * ```
	 * @param request
	 * The `ApplicationRequest` object from your route handler.
	 * @param type
	 * The Content Type
	 * @returns `string | false`
	 * @readonly
	 */
	accepts: (request: ApplicationRequest, type: string | ContentType): string | false => request.accepts(type),
	/**
	 * Check if the given `type(s)` is acceptable, returning
	 * the best match when true, otherwise `undefined`, in which
	 * case you should respond with 406 "Not Acceptable".
	 *
	 * The `type` value may be a single mime type string
	 * such as "application/json", the extension name
	 * such as "json", a comma-delimited list such as "json, html, text/plain",
	 * or an array `["json", "html", "text/plain"]`. When a list
	 * or array is given the _best_ match, if any is returned.
	 *
	 * Examples:
	 * ```js
	 *     // Accept: text/html
	 *     request.accepts('html');
	 *     // => "html"
	 *
	 *     // Accept: text/*, application/json
	 *     request.accepts('html');
	 *     // => "html"
	 *     request.accepts('text/html');
	 *     // => "text/html"
	 *     request.accepts('json, text');
	 *     // => "json"
	 *     request.accepts('application/json');
	 *     // => "application/json"
	 *
	 *     // Accept: text/*, application/json
	 *     request.accepts('image/png');
	 *     request.accepts('png');
	 *     // => false
	 *
	 *     // Accept: text/*;q=.5, application/json
	 *     request.accepts(['html', 'json']);
	 *     request.accepts('html, json');
	 *     // => "json"
	 * ```
	 * @param request
	 * The `ApplicationRequest` object from your route handler.
	 * @param type
	 * The Content Type
	 * @returns `string | false`
	 * @readonly
	 */
	acceptsType: (request: ApplicationRequest, type: string | ContentType): string | false => request.accepts(type),
	/**
	 * Check if the given `type(s)` is acceptable, returning
	 * the best match when true, otherwise `undefined`, in which
	 * case you should respond with 406 "Not Acceptable".
	 *
	 * The `type` value may be a single mime type string
	 * such as "application/json", the extension name
	 * such as "json", a comma-delimited list such as "json, html, text/plain",
	 * or an array `["json", "html", "text/plain"]`. When a list
	 * or array is given the _best_ match, if any is returned.
	 *
	 * Examples:
	 * ```js
	 *     // Accept: text/html
	 *     request.accepts('html');
	 *     // => "html"
	 *
	 *     // Accept: text/*, application/json
	 *     request.accepts('html');
	 *     // => "html"
	 *     request.accepts('text/html');
	 *     // => "text/html"
	 *     request.accepts('json, text');
	 *     // => "json"
	 *     request.accepts('application/json');
	 *     // => "application/json"
	 *
	 *     // Accept: text/*, application/json
	 *     request.accepts('image/png');
	 *     request.accepts('png');
	 *     // => false
	 *
	 *     // Accept: text/*;q=.5, application/json
	 *     request.accepts(['html', 'json']);
	 *     request.accepts('html, json');
	 *     // => "json"
	 * ```
	 * @param request
	 * The `ApplicationRequest` object from your route handler.
	 * @param type
	 * The Content Type
	 * @returns `string | false`
	 * @readonly
	 */
	acceptsTypes: (request: ApplicationRequest, ...types: string[] | ContentType[]): string | false =>
		request.accepts(...types),

	/**
	 * Returns the first accepted charset of the specified character sets,
	 * based on the request's Accept-Charset HTTP header field.
	 * If none of the specified charsets is accepted, returns false.
	 *
	 * For more information, or if you have issues or concerns, see accepts.
	 *
	 * @param request
	 * The `ApplicationRequest` object from your route handler.
	 * @param charset
	 * The Content Charset
	 * @returns `string | false`
	 * @readonly
	 */
	acceptsCharset: (request: ApplicationRequest, charset: string | Charset): string | false =>
		request.acceptsCharsets(charset),
	/**
	 * Returns the first accepted charset of the specified character sets,
	 * based on the request's Accept-Charset HTTP header field.
	 * If none of the specified charsets is accepted, returns false.
	 *
	 * For more information, or if you have issues or concerns, see accepts.
	 *
	 * @param request
	 * The `ApplicationRequest` object from your route handler.
	 * @param charset
	 * The Content Charset
	 * @returns `string | false`
	 * @readonly
	 */
	acceptsCharsets: (request: ApplicationRequest, ...charsets: string[] | Charset[]): string | false =>
		request.acceptsCharsets(...charsets),

	/**
	 * Returns the first accepted encoding of the specified encodings,
	 * based on the request's Accept-Encoding HTTP header field.
	 * If none of the specified encodings is accepted, returns false.
	 *
	 * For more information, or if you have issues or concerns, see accepts.
	 *
	 * @param request
	 * The `ApplicationRequest` object from your route handler.
	 * @param encoding
	 * The Content Encoder
	 * @returns `string | false`
	 * @readonly
	 */
	acceptsEncoding: (request: ApplicationRequest, encoding: string | Encoder): string | false =>
		request.acceptsEncodings(encoding),
	/**
	 * Returns the first accepted encoding of the specified encodings,
	 * based on the request's Accept-Encoding HTTP header field.
	 * If none of the specified encodings is accepted, returns false.
	 *
	 * For more information, or if you have issues or concerns, see accepts.
	 *
	 * @param request
	 * The `ApplicationRequest` object from your route handler.
	 * @param encoding
	 * The Content Encoder
	 * @returns `string | false`
	 * @readonly
	 */
	acceptsEncodings: (request: ApplicationRequest, ...encodings: string[] | Encoder[]): string | false =>
		request.acceptsEncodings(...encodings),

	/**
	 * Returns the first accepted language of the specified languages,
	 * based on the request's Accept-Language HTTP header field.
	 * If none of the specified languages is accepted, returns false.
	 *
	 * For more information, or if you have issues or concerns, see accepts.
	 *
	 * @param request
	 * The `ApplicationRequest` object from your route handler.
	 * @param lang
	 * The Content Language
	 * @returns `string | false`
	 * @readonly
	 */
	acceptsLanguage: (request: ApplicationRequest, lang: string | Language): string | false =>
		request.acceptsLanguages(lang),
	/**
	 * Returns the first accepted language of the specified languages,
	 * based on the request's Accept-Language HTTP header field.
	 * If none of the specified languages is accepted, returns false.
	 *
	 * For more information, or if you have issues or concerns, see accepts.
	 *
	 * @param request
	 * The `ApplicationRequest` object from your route handler.
	 * @param lang
	 * The Content Language
	 * @returns `string | false`
	 * @readonly
	 */
	acceptsLanguages: (request: ApplicationRequest, ...langs: string[] | Language[]): string | false =>
		request.acceptsLanguages(...langs),
};
