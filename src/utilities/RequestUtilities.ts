import { type ApplicationRequest, Charset, ContentType, Encoder, Language } from '../types/index';
import type { Options, Ranges, Result } from './range';

// Save for later

/**
 * A utility for managing requests.
 *
 * @readonly
 */
export class RequestUtility {
	private readonly request: ApplicationRequest;
	constructor(request: ApplicationRequest) {
		this.request = request;
	}

	/**
	 * Get value for header `field`.
	 *
	 * @param field
	 * The HTTP request header field.
	 *
	 * @readonly
	 */
	public readonly getHeader = (field: string): string | undefined => this.request.get(field);
	/**
	 * Get value for header `field`.
	 *
	 * @param field
	 * The HTTP request header field.
	 *
	 * @readonly
	 */
	public readonly header = (field: string): string | undefined => this.request.get(field);
	/**
	 * Get value for header `field`.
	 *
	 * @param field
	 * The HTTP request header field.

	 * @readonly
	 */
	public readonly get = (field: string): string | undefined => this.request.get(field);
	/**
	 * Check if the incoming request contains the "Content-Type"
	 * header field, and it contains the give mime `type`.
	 *
	 * @example
	 * ```typescript
	 * // With Content-Type: text/html; charset=utf-8
	 * request.is('html');
	 * request.is('text/html');
	 * request.is('text/*');
	 * // => true
	 *
	 * // When Content-Type is application/json
	 * request.is('json');
	 * request.is('application/json');
	 * request.is('application/*');
	 * // => true
	 *
	 * request.is('html');
	 * // => false
	 * ```
	 *
	 * @param type
	 * The Content Type.

	 * @readonly
	 */
	public readonly is = (type: string | string[] | ContentType | ContentType[]): string | false | null =>
		this.request.is(type);
	/**
	 * Check if the incoming request contains the "Content-Type"
	 * header field, and it contains the give mime `type`.
	 *
	 * @example
	 * ```typescript
	 * // With Content-Type: text/html; charset=utf-8
	 * request.is('html');
	 * request.is('text/html');
	 * request.is('text/*');
	 * // => true
	 *
	 * // When Content-Type is application/json
	 * request.is('json');
	 * request.is('application/json');
	 * request.is('application/*');
	 * // => true
	 *
	 * request.is('html');
	 * // => false
	 * ```
	 *
	 * @param type
	 * The Content Type.

	 * @readonly
	 */
	public readonly isType = (type: string | string[] | ContentType | ContentType[]): string | false | null =>
		this.request.is(type);
	/**
	 * Check if the incoming request contains the "Content-Type"
	 * header field, and it contains the give mime `type`.
	 *
	 * @example
	 * ```typescript
	 * // With Content-Type: text/html; charset=utf-8
	 * request.is('html');
	 * request.is('text/html');
	 * request.is('text/*');
	 * // => true
	 *
	 * // When Content-Type is application/json
	 * request.is('json');
	 * request.is('application/json');
	 * request.is('application/*');
	 * // => true
	 *
	 * request.is('html');
	 * // => false
	 * ```
	 *
	 * @param type
	 * The Content Type.

	 * @readonly
	 */
	public readonly isContentType = (type: string | string[] | ContentType | ContentType[]): string | false | null =>
		this.request.is(type);
	/**
	 * Check if the incoming request contains the "Content-Type"
	 * header field, and it contains the give mime `type`.
	 *
	 * @example
	 * ```typescript
	 * // With Content-Type: text/html; charset=utf-8
	 * request.is('html');
	 * request.is('text/html');
	 * request.is('text/*');
	 * // => true
	 *
	 * // When Content-Type is application/json
	 * request.is('json');
	 * request.is('application/json');
	 * request.is('application/*');
	 * // => true
	 *
	 * request.is('html');
	 * // => false
	 * ```
	 *
	 * @param type
	 * The Content Type.

	 * @readonly
	 */
	public readonly verify = (type: string | string[] | ContentType | ContentType[]): string | false | null =>
		this.request.is(type);
	/**
	 * Check if the incoming request contains the "Content-Type"
	 * header field, and it contains the give mime `type`.
	 *
	 * @example
	 * ```typescript
	 * // With Content-Type: text/html; charset=utf-8
	 * request.is('html');
	 * request.is('text/html');
	 * request.is('text/*');
	 * // => true
	 *
	 * // When Content-Type is application/json
	 * request.is('json');
	 * request.is('application/json');
	 * request.is('application/*');
	 * // => true
	 *
	 * request.is('html');
	 * // => false
	 * ```
	 *
	 * @param type
	 * The Content Type.

	 * @readonly
	 */
	public readonly verifyType = (type: string | string[] | ContentType | ContentType[]): string | false | null =>
		this.request.is(type);
	/**
	 * Check if the incoming request contains the "Content-Type"
	 * header field, and it contains the give mime `type`.
	 *
	 * @example
	 * ```typescript
	 * // With Content-Type: text/html; charset=utf-8
	 * request.is('html');
	 * request.is('text/html');
	 * request.is('text/*');
	 * // => true
	 *
	 * // When Content-Type is application/json
	 * request.is('json');
	 * request.is('application/json');
	 * request.is('application/*');
	 * // => true
	 *
	 * request.is('html');
	 * // => false
	 * ```
	 *
	 * @param type
	 * The Content Type.

	 * @readonly
	 */
	public readonly verifyContentType = (
		type: string | string[] | ContentType | ContentType[]
	): string | false | null => this.request.is(type);
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
	 * @param size
	 * The maximum size of the resource.
	 * @param options
	 * An object that can have the following properties:
	 * - combine: `boolean` - Specify if overlapping & adjacent ranges should be combined, defaults to `false`. When `true`, ranges will be combined and returned as if they were specified that way in the header.
	 *
	 * @readonly
	 */
	public readonly range = (size: number, options?: Options): Ranges | Result | undefined =>
		this.request.range(size, options);
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
	 * @example
	 * ```typescript
	 * // Accept: text/html
	 * request.accepts('html');
	 * // => "html"
	 *
	 * // Accept: text/*, application/json
	 * request.accepts('html');
	 * // => "html"
	 * request.accepts('text/html');
	 * // => "text/html"
	 * request.accepts('json, text');
	 * // => "json"
	 * request.accepts('application/json');
	 * // => "application/json"
	 *
	 * // Accept: text/*, application/json
	 * request.accepts('image/png');
	 * request.accepts('png');
	 * // => false
	 *
	 * // Accept: text/*;q=.5, application/json
	 * request.accepts(['html', 'json']);
	 * request.accepts('html, json');
	 * // => "json"
	 * ```
	 * @param type
	 * The Content Type
	 * @readonly
	 */
	public readonly accepts = (type: string | ContentType): string | false => this.request.accepts(type);
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
	 * @example
	 * ```typescript
	 * // Accept: text/html
	 * request.accepts('html');
	 * // => "html"
	 *
	 * // Accept: text/*, application/json
	 * request.accepts('html');
	 * // => "html"
	 * request.accepts('text/html');
	 * // => "text/html"
	 * request.accepts('json, text');
	 * // => "json"
	 * request.accepts('application/json');
	 * // => "application/json"
	 *
	 * // Accept: text/*, application/json
	 * request.accepts('image/png');
	 * request.accepts('png');
	 * // => false
	 *
	 * // Accept: text/*;q=.5, application/json
	 * request.accepts(['html', 'json']);
	 * request.accepts('html, json');
	 * // => "json"
	 * ```
	 * @param type
	 * The Content Type
	 * @readonly
	 */
	public readonly acceptsType = (type: string | ContentType): string | false => this.request.accepts(type);
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
	 * @example
	 * ```typescript
	 * // Accept: text/html
	 * request.accepts('html');
	 * // => "html"
	 *
	 * // Accept: text/*, application/json
	 * request.accepts('html');
	 * // => "html"
	 * request.accepts('text/html');
	 * // => "text/html"
	 * request.accepts('json, text');
	 * // => "json"
	 * request.accepts('application/json');
	 * // => "application/json"
	 *
	 * // Accept: text/*, application/json
	 * request.accepts('image/png');
	 * request.accepts('png');
	 * // => false
	 *
	 * // Accept: text/*;q=.5, application/json
	 * request.accepts(['html', 'json']);
	 * request.accepts('html, json');
	 * // => "json"
	 * ```
	 * @param type
	 * The Content Type
	 * @readonly
	 */
	public readonly acceptsTypes = (...types: string[] | ContentType[]): string | false =>
		this.request.accepts(...types);

	/**
	 * Returns the first accepted charset of the specified character sets,
	 * based on the request's Accept-Charset HTTP header field.
	 * If none of the specified charsets is accepted, returns false.
	 *
	 * For more information, or if you have issues or concerns, see accepts.
	 *
	 * @param charset
	 * The Content Charset
	 * @readonly
	 */
	public readonly acceptsCharset = (charset: string | Charset): string | false =>
		this.request.acceptsCharsets(charset);
	/**
	 * Returns the first accepted charset of the specified character sets,
	 * based on the request's Accept-Charset HTTP header field.
	 * If none of the specified charsets is accepted, returns false.
	 *
	 * For more information, or if you have issues or concerns, see accepts.
	 *
	 * @param charset
	 * The Content Charset
	 * @readonly
	 */
	public readonly acceptsCharsets = (...charsets: string[] | Charset[]): string | false =>
		this.request.acceptsCharsets(...charsets);

	/**
	 * Returns the first accepted encoding of the specified encodings,
	 * based on the request's Accept-Encoding HTTP header field.
	 * If none of the specified encodings is accepted, returns false.
	 *
	 * For more information, or if you have issues or concerns, see accepts.
	 *
	 * @param encoding
	 * The Content Encoder
	 * @readonly
	 */
	public readonly acceptsEncoding = (encoding: string | Encoder): string | false =>
		this.request.acceptsEncodings(encoding);
	/**
	 * Returns the first accepted encoding of the specified encodings,
	 * based on the request's Accept-Encoding HTTP header field.
	 * If none of the specified encodings is accepted, returns false.
	 *
	 * For more information, or if you have issues or concerns, see accepts.
	 *
	 * @param encoding
	 * The Content Encoder
	 * @readonly
	 */
	public readonly acceptsEncodings = (...encodings: string[] | Encoder[]): string | false =>
		this.request.acceptsEncodings(...encodings);

	/**
	 * Returns the first accepted language of the specified languages,
	 * based on the request's Accept-Language HTTP header field.
	 * If none of the specified languages is accepted, returns false.
	 *
	 * For more information, or if you have issues or concerns, see accepts.
	 *
	 * @param lang
	 * The Content Language
	 * @readonly
	 */
	public readonly acceptsLanguage = (lang: string | Language): string | false => this.request.acceptsLanguages(lang);
	/**
	 * Returns the first accepted language of the specified languages,
	 * based on the request's Accept-Language HTTP header field.
	 * If none of the specified languages is accepted, returns false.
	 *
	 * For more information, or if you have issues or concerns, see accepts.
	 *
	 * @param lang
	 * The Content Language
	 * @readonly
	 */
	public readonly acceptsLanguages = (...langs: string[] | Language[]): string | false =>
		this.request.acceptsLanguages(...langs);
}
