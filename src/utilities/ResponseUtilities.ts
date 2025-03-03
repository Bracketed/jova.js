import {
	type ApplicationErrorCallback,
	type ApplicationResponse,
	ContentType,
	type CookieOptions,
	type DownloadOptions,
	HttpStatus,
	type SendFileOptions,
} from '../types/index';

// Save for later

/**
 * A utility for managing responses.
 *
 * @readonly
 */
export class ResponseUtility {
	private readonly response: ApplicationResponse;
	constructor(response: ApplicationResponse) {
		this.response = response;
	}

	// Response Codes
	// 1xx Informational responses
	/**
	 * HTTP CONTINUE response method.
	 *


	 * @readonly
	 */
	public readonly continue = (): ApplicationResponse => this.response.status(HttpStatus.Continue);
	/**
	 * HTTP Switching Protocols response method.
	 *


	 * @readonly
	 */
	public readonly switchingProtocols = (): ApplicationResponse => this.response.status(HttpStatus.SwitchingProtocols);
	/**
	 * HTTP Processing response method.
	 *


	 * @readonly
	 */
	public readonly processing = (): ApplicationResponse => this.response.status(HttpStatus.Processing);
	/**
	 * HTTP Early Hints response method.
	 *


	 * @readonly
	 */
	public readonly earlyHints = (): ApplicationResponse => this.response.status(HttpStatus.EarlyHints);

	// 2xx Success codes
	public readonly ok = (): ApplicationResponse => this.response.status(HttpStatus.OK);
	/**
	 * HTTP OK response method.
	 *


	 * @readonly
	 */
	public readonly created = (): ApplicationResponse => this.response.status(HttpStatus.Created);
	/**
	 * HTTP Created response method.
	 *


	 * @readonly
	 */
	public readonly accepted = (): ApplicationResponse => this.response.status(HttpStatus.Accepted);
	/**
	 * HTTP Non Authoritative Information response method.
	 *


	 * @readonly
	 */
	public readonly nonAuthoritativeInformation = (): ApplicationResponse =>
		this.response.status(HttpStatus.NonAuthoritativeInformation);
	/**
	 * HTTP No Content response method.
	 *


	 * @readonly
	 */
	public readonly noContent = (): ApplicationResponse => this.response.status(HttpStatus.NoContent);
	/**
	 * HTTP Reset Content response method.
	 *


	 * @readonly
	 */
	public readonly resetContent = (): ApplicationResponse => this.response.status(HttpStatus.ResetContent);
	/**
	 * HTTP Partial Content response method.
	 *


	 * @readonly
	 */
	public readonly partialContent = (): ApplicationResponse => this.response.status(HttpStatus.PartialContent);
	/**
	 * HTTP Multi Status response method.
	 *


	 * @readonly
	 */
	public readonly multiStatus = (): ApplicationResponse => this.response.status(HttpStatus.MultiStatus);
	/**
	 * HTTP Already Reported response method.
	 *


	 * @readonly
	 */
	public readonly alreadyReported = (): ApplicationResponse => this.response.status(HttpStatus.AlreadyReported);
	/**
	 * HTTP I'm Used response method.
	 *


	 * @readonly
	 */
	public readonly imUsed = (): ApplicationResponse => this.response.status(HttpStatus.IMUsed);

	// 3xx Redirection
	/**
	 * HTTP Multiple Choices response method.
	 *


	 * @readonly
	 */
	public readonly multipleChoices = (): ApplicationResponse => this.response.status(HttpStatus.MultipleChoices);
	/**
	 * HTTP Permanently Moved response method.
	 *


	 * @readonly
	 */
	public readonly movedPermanently = (): ApplicationResponse => this.response.status(HttpStatus.MovedPermanently);
	/**
	 * HTTP Found response method.
	 *


	 * @readonly
	 */
	public readonly found = (): ApplicationResponse => this.response.status(HttpStatus.Found);
	/**
	 * HTTP See Other response method.
	 *


	 * @readonly
	 */
	public readonly seeOther = (): ApplicationResponse => this.response.status(HttpStatus.SeeOther);
	/**
	 * HTTP Not Modified response method.
	 *


	 * @readonly
	 */
	public readonly notModified = (): ApplicationResponse => this.response.status(HttpStatus.NotModified);
	/**
	 * HTTP Use Proxy response method.
	 *


	 * @readonly
	 */
	public readonly useProxy = (): ApplicationResponse => this.response.status(HttpStatus.UseProxy);
	/**
	 * HTTP Temporary Redirect response method.
	 *


	 * @readonly
	 */
	public readonly temporaryRedirect = (): ApplicationResponse => this.response.status(HttpStatus.TemporaryRedirect);
	/**
	 * HTTP Permanent Redirect response method.
	 *


	 * @readonly
	 */
	public readonly permanentRedirect = (): ApplicationResponse => this.response.status(HttpStatus.PermanentRedirect);

	// 4xx Client errors
	/**
	 * HTTP Bad Request response method.
	 *


	 * @readonly
	 */
	public readonly badRequest = (): ApplicationResponse => this.response.status(HttpStatus.BadRequest);
	/**
	 * HTTP Unauthorised response method.
	 *


	 * @readonly
	 */
	public readonly unauthorized = (): ApplicationResponse => this.response.status(HttpStatus.Unauthorized);
	/**
	 * HTTP Payment Required response method.
	 *


	 * @readonly
	 */
	public readonly paymentRequired = (): ApplicationResponse => this.response.status(HttpStatus.PaymentRequired);
	/**
	 * HTTP Forbidden response method.
	 *


	 * @readonly
	 */
	public readonly forbidden = (): ApplicationResponse => this.response.status(HttpStatus.Forbidden);
	/**
	 * HTTP Not Found response method.
	 *


	 * @readonly
	 */
	public readonly notFound = (): ApplicationResponse => this.response.status(HttpStatus.NotFound);
	/**
	 * HTTP Method Not Allowed response method.
	 *


	 * @readonly
	 */
	public readonly methodNotAllowed = (): ApplicationResponse => this.response.status(HttpStatus.MethodNotAllowed);
	/**
	 * HTTP Not Acceptable response method.
	 *


	 * @readonly
	 */
	public readonly notAcceptable = (): ApplicationResponse => this.response.status(HttpStatus.NotAcceptable);
	/**
	 * HTTP Proxy Auth Required response method.
	 *


	 * @readonly
	 */
	public readonly proxyAuthenticationRequired = (): ApplicationResponse =>
		this.response.status(HttpStatus.ProxyAuthenticationRequired);
	/**
	 * HTTP Timeout response method.
	 *


	 * @readonly
	 */
	public readonly requestTimeout = (): ApplicationResponse => this.response.status(HttpStatus.RequestTimeout);
	/**
	 * HTTP Request conflict response method.
	 *


	 * @readonly
	 */
	public readonly conflict = (): ApplicationResponse => this.response.status(HttpStatus.Conflict);
	/**
	 * HTTP Gone response method.
	 *


	 * @readonly
	 */
	public readonly gone = (): ApplicationResponse => this.response.status(HttpStatus.Gone);
	/**
	 * HTTP Length Required response method.
	 *


	 * @readonly
	 */
	public readonly lengthRequired = (): ApplicationResponse => this.response.status(HttpStatus.LengthRequired);
	/**
	 * HTTP Precondition Failed response method.
	 *


	 * @readonly
	 */
	public readonly preconditionFailed = (): ApplicationResponse => this.response.status(HttpStatus.PreconditionFailed);
	/**
	 * HTTP Payload too large response method.
	 *


	 * @readonly
	 */
	public readonly payloadTooLarge = (): ApplicationResponse => this.response.status(HttpStatus.PayloadTooLarge);
	/**
	 * HTTP URI too long response method.
	 *


	 * @readonly
	 */
	public readonly uriTooLong = (): ApplicationResponse => this.response.status(HttpStatus.URITooLong);
	/**
	 * HTTP Unsupported Media Type response method.
	 *


	 * @readonly
	 */
	public readonly unsupportedMediaType = (): ApplicationResponse =>
		this.response.status(HttpStatus.UnsupportedMediaType);
	/**
	 * HTTP Range error response method.
	 *


	 * @readonly
	 */
	public readonly rangeNotSatisfiable = (): ApplicationResponse =>
		this.response.status(HttpStatus.RangeNotSatisfiable);
	/**
	 * HTTP Expectation failure response method.
	 *


	 * @readonly
	 */
	public readonly expectationFailed = (): ApplicationResponse => this.response.status(HttpStatus.ExpectationFailed);
	/**
	 * HTTP I'm A Teapot response method.
	 *


	 * @readonly
	 */
	public readonly imATeapot = (): ApplicationResponse => this.response.status(HttpStatus.ImATeapot);
	/**
	 * HTTP Misdirected response method.
	 *


	 * @readonly
	 */
	public readonly misdirectedRequest = (): ApplicationResponse => this.response.status(HttpStatus.MisdirectedRequest);
	/**
	 * HTTP Unprocessable Entity response method.
	 *


	 * @readonly
	 */
	public readonly unprocessableEntity = (): ApplicationResponse =>
		this.response.status(HttpStatus.UnprocessableEntity);
	/**
	 * HTTP Request Locked response method.
	 *


	 * @readonly
	 */
	public readonly locked = (): ApplicationResponse => this.response.status(HttpStatus.Locked);
	/**
	 * HTTP Dependency Failure response method.
	 *


	 * @readonly
	 */
	public readonly failedDependency = (): ApplicationResponse => this.response.status(HttpStatus.FailedDependency);
	/**
	 * HTTP Too Early response method.
	 *


	 * @readonly
	 */
	public readonly tooEarly = (): ApplicationResponse => this.response.status(HttpStatus.TooEarly);
	/**
	 * HTTP Upgrade Required response method.
	 *


	 * @readonly
	 */
	public readonly upgradeRequired = (): ApplicationResponse => this.response.status(HttpStatus.UpgradeRequired);
	/**
	 * HTTP Required Precondition response method.
	 *


	 * @readonly
	 */
	public readonly preconditionRequired = (): ApplicationResponse =>
		this.response.status(HttpStatus.PreconditionRequired);
	/**
	 * HTTP Too many requests response method.
	 *


	 * @readonly
	 */
	public readonly tooManyRequests = (): ApplicationResponse => this.response.status(HttpStatus.TooManyRequests);
	/**
	 * HTTP Header Fields too large response method.
	 *


	 * @readonly
	 */
	public readonly requestHeaderFieldsTooLarge = (): ApplicationResponse =>
		this.response.status(HttpStatus.RequestHeaderFieldsTooLarge);
	/**
	 * HTTP Unavailable for legal reasons response method.
	 *


	 * @readonly
	 */
	public readonly unavailableForLegalReasons = (): ApplicationResponse =>
		this.response.status(HttpStatus.UnavailableForLegalReasons);

	// 5xx Server errors
	/**
	 * HTTP Internal Server Error response method.
	 *


	 * @readonly
	 */
	public readonly internalServerError = (): ApplicationResponse =>
		this.response.status(HttpStatus.InternalServerError);
	/**
	 * HTTP Not Implemented response method.
	 *


	 * @readonly
	 */
	public readonly notImplemented = (): ApplicationResponse => this.response.status(HttpStatus.NotImplemented);
	/**
	 * HTTP Bad Gateway response method.
	 *


	 * @readonly
	 */
	public readonly badGateway = (): ApplicationResponse => this.response.status(HttpStatus.BadGateway);
	/**
	 * HTTP Service Unavailable response method.
	 *


	 * @readonly
	 */
	public readonly serviceUnavailable = (): ApplicationResponse => this.response.status(HttpStatus.ServiceUnavailable);
	/**
	 * HTTP Gateway Timeout response method.
	 *


	 * @readonly
	 */
	public readonly gatewayTimeout = (): ApplicationResponse => this.response.status(HttpStatus.GatewayTimeout);
	/**
	 * HTTP Version Unsupported response method.
	 *


	 * @readonly
	 */
	public readonly httpVersionNotSupported = (): ApplicationResponse =>
		this.response.status(HttpStatus.HTTPVersionNotSupported);
	/**
	 * HTTP Variant Also Negotiates response method.
	 *


	 * @readonly
	 */
	public readonly variantAlsoNegotiates = (): ApplicationResponse =>
		this.response.status(HttpStatus.VariantAlsoNegotiates);
	/**
	 * HTTP Insufficient Storage response method.
	 *


	 * @readonly
	 */
	public readonly insufficientStorage = (): ApplicationResponse =>
		this.response.status(HttpStatus.InsufficientStorage);
	/**
	 * HTTP Loop Detected response method.
	 *


	 * @readonly
	 */
	public readonly loopDetected = (): ApplicationResponse => this.response.status(HttpStatus.LoopDetected);
	/**
	 * HTTP Not Extended response method.
	 *


	 * @readonly
	 */
	public readonly notExtended = (): ApplicationResponse => this.response.status(HttpStatus.NotExtended);
	/**
	 * HTTP Network Authentication Required response method.
	 *


	 * @readonly
	 */
	public readonly networkAuthenticationRequired = (): ApplicationResponse =>
		this.response.status(HttpStatus.NetworkAuthenticationRequired);

	// Functions
	/**
	 * Sets a single header value. If the header already exists in the to-be-sent
	 * headers, its value will be replaced. Use an array of strings to send multiple
	 * headers with the same name.
	 *

	 * @param field
	 * The HTTP response header field.
	 * @param value
	 * The HTTP response header field value.
	 *

	 * @readonly
	 */
	public readonly sendHeader = (name: string, value: number | string | readonly string[]): ApplicationResponse =>
		this.response.setHeader(name, value);
	/**
	 * Set header `field` to `value`, or pass
	 * an object of header fields.
	 *
	 * @example
	 * ```typescript
	 * response.set('Foo', ['bar', 'baz']);
	 * response.set('Accept', 'application/json');
	 * response.set({ Accept: 'text/plain', 'X-API-Key': 'superPrivateKey' });
	 * ```
	 * @alias Aliased as `response.header()`.
	 *

	 * @param field
	 * The HTTP response header field.
	 * @param value
	 * The HTTP response header field value.
	 *

	 * @readonly
	 */
	public readonly setHeader = (field: any, value?: string | string[]): ApplicationResponse =>
		this.response.set(field, value);
	/**
	 * Set header `field` to `value`, or pass
	 * an object of header fields.
	 *
	 * @example
	 * ```typescript
	 * response.set('Foo', ['bar', 'baz']);
	 * response.set('Accept', 'application/json');
	 * response.set({ Accept: 'text/plain', 'X-API-Key': 'superPrivateKey' });
	 * ```
	 * @alias Aliased as `response.header()`.
	 *

	 * @param field
	 * The HTTP response header field.
	 * @param value
	 * The HTTP response header field value.
	 *

	 * @readonly
	 */
	public readonly set = (field: any, value?: string | string[]): ApplicationResponse =>
		this.response.set(field, value);
	/**
	 * Get value for header `field`.
	 *

	 * @param field
	 * The HTTP response header field.
	 *

	 * @readonly
	 */
	public readonly getHeader = (field: string): string | undefined => this.response.get(field);
	/**
	 * Get value for header `field`.
	 *

	 * @param field
	 * The HTTP response header field.
	 *

	 * @readonly
	 */
	public readonly header = (field: string): string | undefined => this.response.get(field);
	/**
	 * Get value for header `field`.
	 *

	 * @param field
	 * The HTTP response header field.


	 * @readonly
	 */
	public readonly get = (field: string): string | undefined => this.response.get(field);
	/**
	 * Appends the specified value to the HTTP response header field.
	 * If the header is not already set, it creates the header with the specified value.
	 * The value parameter can be a `string` or an `array`.
	 *
	 * Note: calling `response.set()` after `response.append()` will reset the previously-set header value.
	 *

	 * @param field
	 * The HTTP response header field.
	 * @param value
	 * The value to the header.
	 *

	 * @readonly
	 */
	public readonly append = (field: string, value?: string[] | string): ApplicationResponse =>
		this.response.append(field, value);
	/**
	 * Appends the specified value to the HTTP response header field.
	 * If the header is not already set, it creates the header with the specified value.
	 * The value parameter can be a `string` or an `array`.
	 *
	 * Note: calling `response.set()` after `response.append()` will reset the previously-set header value.
	 *

	 * @param field
	 * The HTTP response header field.
	 * @param value
	 * The value to the header.
	 *

	 * @readonly
	 */
	public readonly appendHeader = (field: string, value?: string[] | string): ApplicationResponse =>
		this.response.append(field, value);
	/**
	 * Appends the specified value to the HTTP response header field.
	 * If the header is not already set, it creates the header with the specified value.
	 * The value parameter can be a `string` or an `array`.
	 *
	 * Note: calling `response.set()` after `response.append()` will reset the previously-set header value.
	 *

	 * @param field
	 * The HTTP response header field.
	 * @param value
	 * The value to the header.

	 * @readonly
	 */
	public readonly addHeader = (field: string, value?: string[] | string): ApplicationResponse =>
		this.response.append(field, value);
	/**
	 * Set Link header field with the given `links`.
	 *
	 * @example
	 * ```typescript
	 * response.links({
	 *   next: 'http://api.example.com/users?page=2',
	 *   last: 'http://api.example.com/users?page=5'
	 * });
	 * ```
	 *

	 * @param links
	 * The links to be added to headers.

	 * @readonly
	 */
	public readonly link = (links: any): ApplicationResponse => this.response.links(links);
	/**
	 * Set Link header field with the given `links`.
	 *
	 * @example
	 * ```typescript
	 * response.links({
	 *   next: 'http://api.example.com/users?page=2',
	 *   last: 'http://api.example.com/users?page=5'
	 * });
	 * ```
	 *

	 * @param links
	 * The links to be added to headers.

	 * @readonly
	 */
	public readonly links = (links: any): ApplicationResponse => this.response.links(links);
	/**
	 * Set Link header field with the given `links`.
	 *
	 * @example
	 * ```typescript
	 * response.links({
	 *   next: 'http://api.example.com/users?page=2',
	 *   last: 'http://api.example.com/users?page=5'
	 * });
	 * ```
	 *

	 * @param links
	 * The links to be added to headers.

	 * @readonly
	 */
	public readonly linkHeaders = (links: any): ApplicationResponse => this.response.links(links);
	/**
	 * Set the location header to url.
	 * The given url can also be the name of a mapped url, for example by default express supports "back" which redirects to the Referrer or Referer headers or "/".
	 *
	 * Mounting:
	 *
	 * When an application is mounted and response.location() is given a path that does not lead with "/" it becomes relative to the mount-point. For example if the application is mounted at "/blog", the following would become "/blog/login".
	 *
	 * ```typescript
	 * response.location('login');
	 * ```
	 *
	 * @example
	 *
	 * response.location('/foo/bar'); 
	 * response.location('http://example.com'); 
	 * response.location('../login'); // /blog/post/1 -> /blog/login
	 * @param url
	 * The url for the location to be set to.

	 * @readonly
	 */
	public readonly addLocationHeader = (url: string): ApplicationResponse => this.response.location(url);
	/**
	 * Set the location header to url.
	 * The given url can also be the name of a mapped url, for example by default express supports "back" which redirects to the Referrer or Referer headers or "/".
	 *
	 * Mounting:
	 *
	 * When an application is mounted and response.location() is given a path that does not lead with "/" it becomes relative to the mount-point. For example if the application is mounted at "/blog", the following would become "/blog/login".
	 *
	 * ```typescript
	 * response.location('login');
	 * ```
	 *
	 * @example
	 * response.location('/foo/bar'); 
	 * response.location('http://example.com'); 
	 * response.location('../login'); // /blog/post/1 -> /blog/login
	 * @param url
	 * The url for the location to be set to.

	 * @readonly
	 */
	public readonly addLocation = (url: string): ApplicationResponse => this.response.location(url);
	/**
	 * Set the location header to url.
	 * The given url can also be the name of a mapped url, for example by default express supports "back" which redirects to the Referrer or Referer headers or "/".
	 *
	 * Mounting:
	 *
	 * When an application is mounted and response.location() is given a path that does not lead with "/" it becomes relative to the mount-point. For example if the application is mounted at "/blog", the following would become "/blog/login".
	 *
	 * ```typescript
	 * response.location('login');
	 * ```
	 *
	 * @example
	 * response.location('/foo/bar'); 
	 * response.location('http://example.com'); 
	 * response.location('../login'); // /blog/post/1 -> /blog/login
	 * @param url
	 * The url for the location to be set to.

	 * @readonly
	 */
	public readonly location = (url: string): ApplicationResponse => this.response.location(url);
	/**
	 * Set `"Content-Disposition"` header to attachment with optional `filename`.
	 *

	 * @param filename
	 * The filename for the attachment.

	 * @readonly
	 */
	public readonly attach = (filename?: string): ApplicationResponse => this.response.attachment(filename);
	/**
	 * Set `"Content-Disposition"` header to attachment with optional `filename`.
	 *

	 * @param filename
	 * The filename for the attachment.

	 * @readonly
	 */
	public readonly attachFile = (filename?: string): ApplicationResponse => this.response.attachment(filename);
	/**
	 * Set `"Content-Disposition"` header to attachment with optional `filename`.
	 *

	 * @param filename
	 * The filename for the attachment.

	 * @readonly
	 */
	public readonly sendAttachment = (filename?: string): ApplicationResponse => this.response.attachment(filename);
	/**
	 * Set `"Content-Disposition"` header to attachment with optional `filename`.
	 *

	 * @param filename
	 * The filename for the attachment.

	 * @readonly
	 */
	public readonly addAttachment = (filename?: string): ApplicationResponse => this.response.attachment(filename);
	/**
	 * Set `"Content-Disposition"` header to attachment with optional `filename`.
	 *

	 * @param filename
	 * The filename for the attachment.

	 * @readonly
	 */
	public readonly setAttachment = (filename?: string): ApplicationResponse => this.response.attachment(filename);
	/**
	 * Set `"Content-Disposition"` header to attachment with optional `filename`.
	 *

	 * @param filename
	 * The filename for the attachment.

	 * @readonly
	 */
	public readonly attachment = (filename?: string): ApplicationResponse => this.response.attachment(filename);
	/**
	 * Set cookie `name` to `val`, with the given `options`.
	 *

	 * @param name
	 * The name of the cookie.
	 * @param value
	 * The value of the cookie.
	 * @param options
	 * The cookie options.
	 *
	 * @example
	 * // "Remember Me" for 15 minutes
	 * response.cookie('remember-me', '1', { expires: new Date(Date.now() + 900000), httpOnly: true });
	 *
	 * // save as above
	 * response.cookie('remember-me', '1', { maxAge: 900000, httpOnly: true })

	 * @readonly
	 */
	public readonly setCookie = (name: string, value: string, options: CookieOptions): ApplicationResponse =>
		this.response.cookie(name, value, options);
	/**
	 * Set cookie `name` to `val`, with the given `options`.
	 *

	 * @param name
	 * The name of the cookie.
	 * @param value
	 * The value of the cookie.
	 * @param options
	 * The cookie options.
	 *
	 * @example
	 * // "Remember Me" for 15 minutes
	 * response.cookie('remember-me', '1', { expires: new Date(Date.now() + 900000), httpOnly: true });
	 *
	 * // save as above
	 * response.cookie('remember-me', '1', { maxAge: 900000, httpOnly: true })

	 * @readonly
	 */
	public readonly addCookie = (name: string, value: string, options: CookieOptions): ApplicationResponse =>
		this.response.cookie(name, value, options);
	/**
	 * Set cookie `name` to `val`, with the given `options`.
	 *

	 * @param name
	 * The name of the cookie.
	 * @param value
	 * The value of the cookie.
	 * @param options
	 * The cookie options.
	 *
	 * @example
	 * // "Remember Me" for 15 minutes
	 * response.cookie('remember-me', '1', { expires: new Date(Date.now() + 900000), httpOnly: true });
	 *
	 * // save as above
	 * response.cookie('remember-me', '1', { maxAge: 900000, httpOnly: true })

	 * @readonly
	 */
	public readonly cookie = (name: string, value: string, options: CookieOptions): ApplicationResponse =>
		this.response.cookie(name, value, options);
	/**
	 * Set cookie `name` to `val`, with the given `options`.
	 *

	 * @param name
	 * The name of the cookie.
	 * @param value
	 * The value of the cookie.
	 *
	 * @example
	 * // "Remember Me" for 15 minutes
	 * response.cookie('remember-me', '1', { expires: new Date(Date.now() + 900000), httpOnly: true });
	 *
	 * // save as above
	 * response.cookie('remember-me', '1', { maxAge: 900000, httpOnly: true })

	 * @readonly
	 */
	public readonly simpleCookie = (name: string, value: string): ApplicationResponse =>
		this.response.cookie(name, value);
	/**
	 * Clear cookie `name`.
	 *

	 * @param name
	 * The target cookie.
	 * @param options
	 * The target cookie options.
	 *

	 * @readonly
	 */
	public readonly clearCookie = (name: string, options?: CookieOptions): ApplicationResponse =>
		this.response.clearCookie(name, options);
	/**
	 * Clear cookie `name`.
	 *

	 * @param name
	 * The target cookie.
	 * @param options
	 * The target cookie options.
	 *

	 * @readonly
	 */
	public readonly clear = (name: string, options?: CookieOptions): ApplicationResponse =>
		this.response.clearCookie(name, options);
	/**
	 * Clear cookie `name`.
	 *

	 * @param name
	 * The target cookie.
	 * @param options
	 * The target cookie options.
	 *

	 * @readonly
	 */
	public readonly removeCookie = (name: string, options?: CookieOptions): ApplicationResponse =>
		this.response.clearCookie(name, options);
	/**
	 * Clear cookie `name`.
	 *

	 * @param name
	 * The target cookie.
	 * @param options
	 * The target cookie options.
	 *

	 * @readonly
	 */
	public readonly deleteCookie = (name: string, options?: CookieOptions): ApplicationResponse =>
		this.response.clearCookie(name, options);
	/**
	 * Transfer the file at the given path as an attachment.
	 *
	 * Optionally providing an alternate attachment `filename`, and optional `callback fn(err)`.
	 * The callback is invoked when the data transfer is complete, or when an error has occurred.
	 * Be sure to check `response.headersSent` if you plan to respond.
	 *
	 * The optional options argument passes through to the underlying `response.sendFile()` call, and takes the exact same parameters.
	 *
	 * This method uses `response.sendfile()`.
	 *

	 * @param path
	 * The target file path.
	 * @param filename
	 * The file name for when the client downloads the file.
	 * @param options
	 * The download options.
	 * @param callback
	 * The callback if an error occurs.
	 *
	 * @readonly
	 */
	public readonly advancedDownload = (
		path: string,
		filename: string,
		options: DownloadOptions,
		callback?: ApplicationErrorCallback
	): void => this.response.download(path, filename, options, callback);
	/**
	 * Transfer the file at the given path as an attachment.
	 *
	 * Optionally providing an alternate attachment `filename`, and optional `callback fn(err)`.
	 * The callback is invoked when the data transfer is complete, or when an error has occurred.
	 * Be sure to check `response.headersSent` if you plan to respond.
	 *
	 * The optional options argument passes through to the underlying `response.sendFile()` call, and takes the exact same parameters.
	 *
	 * This method uses `response.sendfile()`.
	 *

	 * @param path
	 * The target file path.
	 * @param filename
	 * The file name for when the client downloads the file.
	 * @param callback
	 * The callback if an error occurs.
	 *
	 * @readonly
	 */
	public readonly namedDownload = (path: string, filename: string, callback?: ApplicationErrorCallback): void =>
		this.response.download(path, filename, callback);
	/**
	 * Transfer the file at the given path as an attachment.
	 *
	 * Optionally providing an alternate attachment `filename`, and optional `callback fn(err)`.
	 * The callback is invoked when the data transfer is complete, or when an error has occurred.
	 * Be sure to check `response.headersSent` if you plan to respond.
	 *
	 * The optional options argument passes through to the underlying `response.sendFile()` call, and takes the exact same parameters.
	 *
	 * This method uses `response.sendfile()`.
	 *

	 * @param path
	 * The target file path.
	 * @param callback
	 * The callback if an error occurs.
	 *
	 * @readonly
	 */
	public readonly download = (path: string, callback?: ApplicationErrorCallback): void =>
		this.response.download(path, callback);
	/**
	 * Calling the `writable.end()` method signals that no more data will be written
	 * to the `Writable`. The optional `chunk` and `encoding` arguments allow one
	 * final additional chunk of data to be written immediately before closing the
	 * stream.
	 *
	 * Calling the `write` method after calling `end` will raise an error.
	 *
	 * ```typescript
	 * // Write 'hello, ' and then end with 'world!'.
	 * const fs = require('node:fs');
	 * const file = fs.createWriteStream('example.txt');
	 * file.write('hello, ');
	 * file.end('world!');
	 * // Writing more now is not allowed!
	 * ```
	 *

	 * @param chunk Optional data to write. For streams not operating in object mode, `chunk` must be a `string`, `Buffer`,
	 * `TypedArray` or `DataView`. For object mode streams, `chunk` may be any JavaScript value other than `null`.
	 * @param encoding The encoding if `chunk` is a `string`
	 * @param callback Callback for when the stream is finished.
	 *

	 * @readonly
	 */
	public readonly end = (): ApplicationResponse => this.response.end();
	/**
	 * Calling the `writable.end()` method signals that no more data will be written
	 * to the `Writable`. The optional `chunk` and `encoding` arguments allow one
	 * final additional chunk of data to be written immediately before closing the
	 * stream.
	 *
	 * Calling the `write` method after calling `end` will raise an error.
	 *
	 * ```typescript
	 * // Write 'hello, ' and then end with 'world!'.
	 * const fs = require('node:fs');
	 * const file = fs.createWriteStream('example.txt');
	 * file.write('hello, ');
	 * file.end('world!');
	 * // Writing more now is not allowed!
	 * ```
	 *

	 * @param chunk Optional data to write. For streams not operating in object mode, `chunk` must be a `string`, `Buffer`,
	 * `TypedArray` or `DataView`. For object mode streams, `chunk` may be any JavaScript value other than `null`.
	 * @param encoding The encoding if `chunk` is a `string`
	 * @param callback Callback for when the stream is finished.
	 *

	 * @readonly
	 */
	public readonly callbackedEnd = (callback?: () => void): ApplicationResponse => this.response.end(callback);
	/**
	 * Calling the `writable.end()` method signals that no more data will be written
	 * to the `Writable`. The optional `chunk` and `encoding` arguments allow one
	 * final additional chunk of data to be written immediately before closing the
	 * stream.
	 *
	 * Calling the `write` method after calling `end` will raise an error.
	 *
	 * ```typescript
	 * // Write 'hello, ' and then end with 'world!'.
	 * const fs = require('node:fs');
	 * const file = fs.createWriteStream('example.txt');
	 * file.write('hello, ');
	 * file.end('world!');
	 * // Writing more now is not allowed!
	 * ```
	 *

	 * @param chunk Optional data to write. For streams not operating in object mode, `chunk` must be a `string`, `Buffer`,
	 * `TypedArray` or `DataView`. For object mode streams, `chunk` may be any JavaScript value other than `null`.
	 * @param encoding The encoding if `chunk` is a `string`
	 * @param callback Callback for when the stream is finished.
	 *

	 * @readonly
	 */
	public readonly chunkedEnd = (chunk: any, callback?: () => void): ApplicationResponse =>
		this.response.end(chunk, callback);
	/**
	 * Calling the `writable.end()` method signals that no more data will be written
	 * to the `Writable`. The optional `chunk` and `encoding` arguments allow one
	 * final additional chunk of data to be written immediately before closing the
	 * stream.
	 *
	 * Calling the `write` method after calling `end` will raise an error.
	 *
	 * ```typescript
	 * // Write 'hello, ' and then end with 'world!'.
	 * const fs = require('node:fs');
	 * const file = fs.createWriteStream('example.txt');
	 * file.write('hello, ');
	 * file.end('world!');
	 * // Writing more now is not allowed!
	 * ```
	 *

	 * @param chunk Optional data to write. For streams not operating in object mode, `chunk` must be a `string`, `Buffer`,
	 * `TypedArray` or `DataView`. For object mode streams, `chunk` may be any JavaScript value other than `null`.
	 * @param encoding The encoding if `chunk` is a string
	 * @param callback Callback for when the stream is finished.
	 *

	 * @readonly
	 */
	public readonly encodedEnd = (chunk: any, encoding: BufferEncoding, callback?: () => void) =>
		this.response.end(chunk, encoding, callback);
	/**
	 * Respond to the Acceptable formats using an `obj`
	 * of mime-type callbacks.
	 *
	 * This method uses `req.accepted`, an array of
	 * acceptable types ordered by their quality values.
	 * When "Accept" is not present the _first_ callback
	 * is invoked, otherwise the first match is used. When
	 * no match is performed the server responds with
	 * 406 "Not Acceptable".
	 *
	 * Content-Type is set for you, however if you choose
	 * you may alter this within the callback using `response.type()`
	 * or `response.set('Content-Type', ...)`.
	 * ```typescript
	 * response.format({
	 * 'text/plain': function(){
	 *   response.send('hey');
	 * },
	 *
	 * 'text/html': function(){
	 *   response.send('<p>hey</p>');
	 * },
	 *
	 * 'application/json': function(){
	 *   response.send({ message: 'hey' });
	 * }
	 * });
	 * ```
	 *
	 * In addition to canonicalized MIME types you may
	 * also use `extnames` mapped to these types:
	 * ```typescript
	 * response.format({
	 * text: function(){
	 *   response.send('hey');
	 * },
	 *
	 * html: function(){
	 *   response.send('<p>hey</p>');
	 * },
	 *
	 * json: function(){
	 *   response.send({ message: 'hey' });
	 * }
	 * });
	 * ```
	 *
	 * By default Express passes an `Error`
	 * with a `.status` of 406 to `next(err)`
	 * if a match is not made. If you provide
	 * a `.default` callback it will be invoked
	 * instead.
	 *

	 * @param obj
	 * The object to be formatted.
	 *

	 * @readonly
	 */
	public readonly format = (obj: any): ApplicationResponse => this.response.format(obj);
	/**
	 * Respond to the Acceptable formats using an `obj`
	 * of mime-type callbacks.
	 *
	 * This method uses `req.accepted`, an array of
	 * acceptable types ordered by their quality values.
	 * When "Accept" is not present the _first_ callback
	 * is invoked, otherwise the first match is used. When
	 * no match is performed the server responds with
	 * 406 "Not Acceptable".
	 *
	 * Content-Type is set for you, however if you choose
	 * you may alter this within the callback using `response.type()`
	 * or `response.set('Content-Type', ...)`.
	 * ```typescript
	 * response.format({
	 * 'text/plain': function(){
	 *   response.send('hey');
	 * },
	 *
	 * 'text/html': function(){
	 *   response.send('<p>hey</p>');
	 * },
	 *
	 * 'application/json': function(){
	 *   response.send({ message: 'hey' });
	 * }
	 * });
	 * ```
	 *
	 * In addition to canonicalized MIME types you may
	 * also use `extnames` mapped to these types:
	 * ```typescript
	 * response.format({
	 * text: function(){
	 *   response.send('hey');
	 * },
	 *
	 * html: function(){
	 *   response.send('<p>hey</p>');
	 * },
	 *
	 * json: function(){
	 *   response.send({ message: 'hey' });
	 * }
	 * });
	 * ```
	 *
	 * By default Express passes an `Error`
	 * with a `.status` of 406 to `next(err)`
	 * if a match is not made. If you provide
	 * a `.default` callback it will be invoked
	 * instead.
	 *

	 * @param obj
	 * The object to be formatted.
	 *

	 * @readonly
	 */
	public readonly formatObject = (obj: any): ApplicationResponse => this.response.format(obj);
	/**
	 * Send JSON response.
	 *
	 * @example
	 * ```typescript
	 * response.json(null);
	 * response.json({ user: 'tj' });
	 * response.status(500).json('oh noes!');
	 * response.status(404).json("I don't have that");
	 * ```
	 *

	 * @param obj
	 * The object to be sent.
	 *

	 * @readonly
	 */
	public readonly json = (obj: any | object): ApplicationResponse => this.response.json(obj);
	/**
	 * Send JSON response with JSONP callback support.
	 *
	 * @example
	 * ```typescript
	 * response.jsonp(null);
	 * response.jsonp({ user: 'tj' });
	 * response.status(500).jsonp('oh noes!');
	 * response.status(404).jsonp("I don't have that");
	 * ```
	 *

	 * @param obj
	 * The object to be sent.
	 *

	 * @readonly
	 */
	public readonly jsonp = (obj: any): ApplicationResponse => this.response.jsonp(obj);
	/**
	 * Redirect to the given `url` with optional response `status`
	 * defaulting to 302.
	 *
	 * The resulting `url` is determined by `response.location()`, so
	 * it will play nicely with mounted apps, relative paths,
	 * `"back"` etc.
	 *
	 * @example
	 * ```typescript
	 * response.redirect('back');
	 * response.redirect('/foo/bar');
	 * response.redirect('http://example.com');
	 * response.redirect(301, 'http://example.com');
	 * response.redirect('../login'); // /blog/post/1 -> /blog/login
	 * ```
	 *

	 * @param url
	 * The url the request/response is being redirected to.
	 * @param status
	 * Optional status code to be sent with the redirect.
	 *

	 * @readonly
	 */
	public readonly redirect = (url: string, status?: HttpStatus | number): void => {
		if (status) return this.response.redirect(status, url);
		return this.response.redirect(url);
	};
	/**
	 * Redirect to the given `url` with optional response `status`
	 * defaulting to 302.
	 *
	 * The resulting `url` is determined by `response.location()`, so
	 * it will play nicely with mounted apps, relative paths,
	 * `"back"` etc.
	 *
	 * @example
	 * ```typescript
	 * response.redirect('back');
	 * response.redirect('/foo/bar');
	 * response.redirect('http://example.com');
	 * response.redirect(301, 'http://example.com');
	 * response.redirect('../login'); // /blog/post/1 -> /blog/login
	 * ```
	 *

	 * @param url
	 * The url the request/response is being redirected to.
	 * @param status
	 * Optional status code to be sent with the redirect.
	 *

	 * @readonly
	 */
	public readonly redirectResponse = (url: string, status?: HttpStatus | number): void => {
		if (status) return this.response.redirect(status, url);
		return this.response.redirect(url);
	};
	/**
	 * Redirect to the given `url` with optional response `status`
	 * defaulting to 302.
	 *
	 * The resulting `url` is determined by `response.location()`, so
	 * it will play nicely with mounted apps, relative paths,
	 * `"back"` etc.
	 *
	 * @example
	 * ```typescript
	 * response.redirect('back');
	 * response.redirect('/foo/bar');
	 * response.redirect('http://example.com');
	 * response.redirect(301, 'http://example.com');
	 * response.redirect('../login'); // /blog/post/1 -> /blog/login
	 * ```
	 *

	 * @param url
	 * The url the request/response is being redirected to.
	 * @param status
	 * Optional status code to be sent with the redirect.
	 *

	 * @readonly
	 */
	public readonly redirectRequest = (url: string, status?: HttpStatus | number): void => {
		if (status) return this.response.redirect(status, url);
		return this.response.redirect(url);
	};
	/**
	 * Render `view` with the given `options` and optional callback `fn`.
	 * When a callback function is given a response will _not_ be made
	 * automatically, otherwise a response of _200_ and _text/html_ is given.
	 *

	 * @param view
	 * The file path of the view file to render.
	 * @param callback
	 * Optional callback to the render function.
	 *

	 * @readonly
	 */
	public readonly render = (view: string, callback?: (err: Error, html: string) => void): void =>
		this.response.render(view, callback);
	/**
	 * Render `view` with the given `options` and optional callback `fn`.
	 * When a callback function is given a response will _not_ be made
	 * automatically, otherwise a response of _200_ and _text/html_ is given.
	 *
	 * Options:
	 *
	 *  - `cache` boolean hinting to the engine it should cache
	 *  - `filename` filename of the view being rendered
	 *

	 * @param view
	 * The file path of the view file to render.
	 * @param callback
	 * Optional callback to the render function.
	 *

	 * @readonly
	 */
	public readonly advancedRender = (
		view: string,
		options?: object,
		callback?: (err: Error, html: string) => void
	): void => this.response.render(view, options, callback);
	/**
	 * Send a response.
	 *
	 * @example
	 * ```typescript
	 * response.send(new Buffer('yay'));
	 * response.send({ some: 'json' });
	 * response.send('<p>some html</p>');
	 * response.status(404).send('Sorry, cant find that');
	 * ```
	 *

	 * @param body
	 * The response body to be sent.
	 *

	 * @readonly
	 */
	public readonly send = (body?: any): ApplicationResponse => this.response.send(body);
	/**
	 * Send a response.
	 *
	 * @example
	 * ```typescript
	 * response.send(new Buffer('yay'));
	 * response.send({ some: 'json' });
	 * response.send('<p>some html</p>');
	 * response.status(404).send('Sorry, cant find that');
	 * ```
	 *

	 * @param body
	 * The response body to be sent.
	 *

	 * @readonly
	 */
	public readonly sendContent = (body?: any): ApplicationResponse => this.response.send(body);
	/**
	 * Transfer the file at the given `path`.
	 *
	 * Automatically sets the _Content-Type_ response header field.
	 * The callback `fn(err)` is invoked when the transfer is complete
	 * or when an error occurs. Be sure to check `response.headersSent`
	 * if you wish to attempt responding, as the header and some data
	 * may have already been transferred.
	 *
	 * Options:
	 *
	 *   - `maxAge`   defaulting to 0 (can be string converted by `ms`)
	 *   - `root`     root directory for relative filenames
	 *   - `headers`  object of headers to serve with file
	 *   - `dotfiles` serve dotfiles, defaulting to false; can be `"allow"` to send them
	 *
	 * Other options are passed along to `send`.
	 *
	 * @example
	 * The following example illustrates how `response.sendFile()` may
	 * be used as an alternative for the `static()` middleware for
	 * dynamic situations. The code backing `response.sendFile()` is actually
	 * the same code, so HTTP cache support etc is identical.
	 *
	 * ```typescript
	 * application.get('/user/:uid/photos/:file', function(req, res) {
	 * 		var uid = req.params.uid;
	 * 		var file = req.params.file;
	 * 
	 * 		req.user.mayViewFilesFrom(uid, function(yes) {
	 * 			if (yes) {
	 * 				response.sendFile('/uploads/' + uid + '/' + file);
	 * 			} else {
	 * 				response.send(403, 'Sorry! you cant see that.');
	 * 			}
	 * 		});
	 * });
	 * ```
	 *

	 * @param body
	 * The response body to be sent.
	 *

	 * @readonly
	 */
	public readonly sendAdvancedFile = (path: string, options: SendFileOptions, callback?: ApplicationErrorCallback) =>
		this.response.sendFile(path, options, callback);
	/**
	 * Transfer the file at the given `path`.
	 *
	 * Automatically sets the _Content-Type_ response header field.
	 * The callback `fn(err)` is invoked when the transfer is complete
	 * or when an error occurs. Be sure to check `response.headersSent`
	 * if you wish to attempt responding, as the header and some data
	 * may have already been transferred.
	 *
	 * Other options are passed along to `send`.
	 *
	 * @example
	 * The following example illustrates how `response.sendFile()` may
	 * be used as an alternative for the `static()` middleware for
	 * dynamic situations. The code backing `response.sendFile()` is actually
	 * the same code, so HTTP cache support etc is identical.
	 *
	 * ```typescript
	 * application.get('/user/:uid/photos/:file', function(req, res) {
	 * 		var uid = req.params.uid;
	 * 		var file = req.params.file;
	 *  
	 * 		req.user.mayViewFilesFrom(uid, function(yes) {
	 * 			if (yes) {
	 * 				response.sendFile('/uploads/' + uid + '/' + file);
	 * 			} else {
	 * 				response.send(403, 'Sorry! you cant see that.');
	 * 			}
	 * 		});
	 * });
	 * ```
	 *

	 * @param body
	 * The response body to be sent.
	 *

	 * @readonly
	 */
	public readonly sendFile = (path: string, callback?: ApplicationErrorCallback) =>
		this.response.sendFile(path, callback);
	/**
	 * Transfer the file at the given `path`.
	 *
	 * Automatically sets the _Content-Type_ response header field.
	 * The callback `fn(err)` is invoked when the transfer is complete
	 * or when an error occurs. Be sure to check `response.headersSent`
	 * if you wish to attempt responding, as the header and some data
	 * may have already been transferred.
	 *
	 * Other options are passed along to `send`.
	 *
	 * @example
	 * The following example illustrates how `response.sendFile()` may
	 * be used as an alternative for the `static()` middleware for
	 * dynamic situations. The code backing `response.sendFile()` is actually
	 * the same code, so HTTP cache support etc is identical.
	 *
	 * ```typescript
	 * application.get('/user/:uid/photos/:file', function(req, res){
	 * 		var uid = req.params.uid;
	 * 		var file = req.params.file;
	 * 		
	 * 		req.user.mayViewFilesFrom(uid, function(yes){
	 * 			if (yes) {
	 * 				response.sendFile('/uploads/' + uid + '/' + file);
	 * 			} else {
	 * 				response.send(403, 'Sorry! you cant see that.');
	 * 			}
	 * 		});
	 * });
	 * ```
	 *

	 * @param body
	 * The response body to be sent.
	 *
	 * @readonly
	 */
	public readonly file = (path: string, callback?: ApplicationErrorCallback) =>
		this.response.sendFile(path, callback);
	/**
	 * Transfer the file at the given `path`.
	 *
	 * Automatically sets the _Content-Type_ response header field.
	 * The callback `fn(err)` is invoked when the transfer is complete
	 * or when an error occurs. Be sure to check `response.headersSent`
	 * if you wish to attempt responding, as the header and some data
	 * may have already been transferred.
	 *
	 * Other options are passed along to `send`.
	 *
	 * @example
	 * The following example illustrates how `response.sendFile()` may
	 * be used as an alternative for the `static()` middleware for
	 * dynamic situations. The code backing `response.sendFile()` is actually
	 * the same code, so HTTP cache support etc is identical.
	 *
	 * ```typescript
	 * application.get('/user/:uid/photos/:file', function(req, res){
	 * 		var uid = req.params.uid;
	 * 		var file = req.params.file;
	 * 
	 * 		req.user.mayViewFilesFrom(uid, function(yes){
	 * 			if (yes) {
	 * 				response.sendFile('/uploads/' + uid + '/' + file);
	 * 			} else {
	 * 				response.send(403, 'Sorry! you cant see that.');
	 * 			}
	 * 		});
	 * });
	 * ```
	 *

	 * @param body
	 * The response body to be sent.
	 *

	 * @readonly
	 */
	public readonly upload = (path: string, callback?: ApplicationErrorCallback) =>
		this.response.sendFile(path, callback);
	/**
	 * Transfer the file at the given `path`.
	 *
	 * Automatically sets the _Content-Type_ response header field.
	 * The callback `fn(err)` is invoked when the transfer is complete
	 * or when an error occurs. Be sure to check `response.headersSent`
	 * if you wish to attempt responding, as the header and some data
	 * may have already been transferred.
	 *
	 * Other options are passed along to `send`.
	 *
	 * @example
	 * The following example illustrates how `response.sendFile()` may
	 * be used as an alternative for the `static()` middleware for
	 * dynamic situations. The code backing `response.sendFile()` is actually
	 * the same code, so HTTP cache support etc is identical.
	 *
	 * ```typescript
	 * application.get('/user/:uid/photos/:file', function(req, res){
	 * 		var uid = req.params.uid;
	 * 		var file = req.params.file;
	 *
	 * 		req.user.mayViewFilesFrom(uid, function(yes){
	 * 			if (yes) {
	 * 				response.sendFile('/uploads/' + uid + '/' + file);
	 * 			} else {
	 * 				response.send(403, 'Sorry! you cant see that.');
	 * 			}
	 * 		});
	 * });
	 * ```
	 *
	 * @param body
	 * The response body to be sent.
	 *
	 * @readonly
	 */
	public readonly uploadFile = (path: string, callback?: ApplicationErrorCallback) =>
		this.response.sendFile(path, callback);
	/**
	 * Transfer the file at the given `path`.
	 *
	 * Automatically sets the _Content-Type_ response header field.
	 * The callback `fn(err)` is invoked when the transfer is complete
	 * or when an error occurs. Be sure to check `response.headersSent`
	 * if you wish to attempt responding, as the header and some data
	 * may have already been transferred.
	 *
	 * Other options are passed along to `send`.
	 *
	 * @example
	 * The following example illustrates how `response.sendFile()` may
	 * be used as an alternative for the `static()` middleware for
	 * dynamic situations. The code backing `response.sendFile()` is actually
	 * the same code, so HTTP cache support etc is identical.
	 *
	 * ```typescript
	 * application.get('/user/:uid/photos/:file', function(req, res){
	 * 		var uid = req.params.uid;
	 * 		var file = req.params.file;
	 * 
	 * 		req.user.mayViewFilesFrom(uid, function(yes){
	 * 			if (yes) {
	 * 				response.sendFile('/uploads/' + uid + '/' + file);
	 * 			} else {
	 * 				response.send(403, 'Sorry! you cant see that.');
	 * 			}
	 * 		});
	 * });
	 * ```
	 *

	 * @param body
	 * The response body to be sent.
	 *

	 * @readonly
	 */
	public readonly addFile = (path: string, callback?: ApplicationErrorCallback) =>
		this.response.sendFile(path, callback);
	/**
	 * @name sendStatus()
	 * @description Set the response HTTP status code to `statusCode` and send its string representation as the response body.
	 * @see {@link https://expressjs.com/4x/api.html#res.sendStatus Express Docs: Response.sendStatus()}
	 *
	 * @example
	 * ```typescript
	 * response.sendStatus(200); // equivalent to response.status(200).send('OK')
	 * response.sendStatus(403); // equivalent to response.status(403).send('Forbidden')
	 * response.sendStatus(404); // equivalent to response.status(404).send('Not Found')
	 * response.sendStatus(500); // equivalent to response.status(500).send('Internal Server Error')
	 * ```
	 *

	 * @param {number | HttpStatus} code - The response status code.
	 * @public
	 * @readonly
	 */
	public readonly sendStatus = (code: number | HttpStatus): ApplicationResponse => this.response.sendStatus(code);
	/**
	 * Set the response HTTP status code to `statusCode` and send its string representation as the response body.
	 * @see {@link https://expressjs.com/4x/api.html#res.sendStatus Express Docs: Response.sendStatus()}
	 *
	 * @example
	 * ```typescript
	 * response.sendStatus(200); // equivalent to response.status(200).send('OK')
	 * response.sendStatus(403); // equivalent to response.status(403).send('Forbidden')
	 * response.sendStatus(404); // equivalent to response.status(404).send('Not Found')
	 * response.sendStatus(500); // equivalent to response.status(500).send('Internal Server Error')
	 * ```
	 *

	 * @param code
	 * The response status code.
	 *

	 * @readonly
	 */
	public readonly code = (code: number | HttpStatus): ApplicationResponse => this.response.sendStatus(code);
	/**
	 * Set the response HTTP status code to `statusCode` and send its string representation as the response body.
	 * @see {@link https://expressjs.com/4x/api.html#res.sendStatus Express Docs: Result.sendStatus()}
	 *
	 * @example
	 * ```typescript
	 * response.sendStatus(200); // equivalent to response.status(200).send('OK')
	 * response.sendStatus(403); // equivalent to response.status(403).send('Forbidden')
	 * response.sendStatus(404); // equivalent to response.status(404).send('Not Found')
	 * response.sendStatus(500); // equivalent to response.status(500).send('Internal Server Error')
	 * ```
	 *

	 * @param code
	 * The response status code.
	 *

	 * @readonly
	 */
	public readonly setStatus = (code: number | HttpStatus): ApplicationResponse => this.response.sendStatus(code);
	/**
	 * Set the response HTTP status code to `statusCode` and send its string representation as the response body.
	 * @see {@link https://expressjs.com/4x/api.html#res.sendStatus Express Docs: Response.sendStatus()}
	 *
	 * @example
	 * ```typescript
	 * response.sendStatus(200); // equivalent to response.status(200).send('OK')
	 * response.sendStatus(403); // equivalent to response.status(403).send('Forbidden')
	 * response.sendStatus(404); // equivalent to response.status(404).send('Not Found')
	 * response.sendStatus(500); // equivalent to response.status(500).send('Internal Server Error')
	 * ```
	 *

	 * @param code
	 * The response status code.
	 *

	 * @readonly
	 */
	public readonly status = (code: number | HttpStatus): ApplicationResponse => this.response.status(code);
	/**
	 * Set _Content-Type_ response header with `type` through `mime.lookup()`
	 * when it does not contain "/", or set the Content-Type to `type` otherwise.
	 *
	 * @example
	 * ```typescript
	 * response.type('.html');
	 * response.type('html');
	 * response.type('json');
	 * response.type('application/json');
	 * response.type('png');
	 * ```
	 *
	 * @param type
	 * The response content type.
	 *

	 * @readonly
	 */
	public readonly type = (type: string | ContentType): ApplicationResponse => this.response.type(type);
	/**
	 * Set _Content-Type_ response header with `type` through `mime.lookup()`
	 * when it does not contain "/", or set the Content-Type to `type` otherwise.
	 *
	 * @example
	 * ```typescript
	 * response.type('.html');
	 * response.type('html');
	 * response.type('json');
	 * response.type('application/json');
	 * response.type('png');
	 * ```
	 *
	 * @param type
	 * The response content type.
	 *

	 
	 * @readonly
	 */
	public readonly responseType = (type: string | ContentType): ApplicationResponse => this.response.type(type);
	/**
	 * Set _Content-Type_ response header with `type` through `mime.lookup()`
	 * when it does not contain "/", or set the Content-Type to `type` otherwise.
	 *
	 * @example
	 * ```typescript
	 * response.type('.html');
	 * response.type('html');
	 * response.type('json');
	 * response.type('application/json');
	 * response.type('png');
	 * ```
	 *
	 * @param type
	 * The response content type.
	 *

	 
	 * @readonly
	 */
	public readonly setResponseType = (type: string | ContentType): ApplicationResponse => this.response.type(type);
	/**
	 * Set _Content-Type_ response header with `type` through `mime.lookup()`
	 * when it does not contain "/", or set the Content-Type to `type` otherwise.
	 *
	 * @example
	 * ```typescript
	 * response.type('.html');
	 * response.type('html');
	 * response.type('json');
	 * response.type('application/json');
	 * response.type('png');
	 * ```
	 *
	 * @param type
	 * The response content type.
	 *

	 
	 * @readonly
	 */
	public readonly setType = (type: string | ContentType): ApplicationResponse => this.response.type(type);
	/**
	 * Set _Content-Type_ response header with `type` through `mime.lookup()`
	 * when it does not contain "/", or set the Content-Type to `type` otherwise.
	 *
	 * @example
	 * ```typescript
	 * response.type('.html');
	 * response.type('html');
	 * response.type('json');
	 * response.type('application/json');
	 * response.type('png');
	 * ```
	 *
	 * @param type
	 * The response content type.
	 *

	 
	 * @readonly
	 */
	public readonly setResponse = (type: string | ContentType): ApplicationResponse => this.response.type(type);
	/**
	 * Set _Content-Type_ response header with `type` through `mime.lookup()`
	 * when it does not contain "/", or set the Content-Type to `type` otherwise.
	 *
	 * @example
	 * ```typescript
	 * response.type('.html');
	 * response.type('html');
	 * response.type('json');
	 * response.type('application/json');
	 * response.type('png');
	 * ```
	 *
	 * @param type
	 * The response content type.
	 *

	 
	 * @readonly
	 */
	public readonly setContent = (type: string | ContentType): ApplicationResponse => this.response.type(type);
	/**
	 * Set _Content-Type_ response header with `type` through `mime.lookup()`
	 * when it does not contain "/", or set the Content-Type to `type` otherwise.
	 *
	 * @example
	 * ```typescript
	 * response.type('.html');
	 * response.type('html');
	 * response.type('json');
	 * response.type('application/json');
	 * response.type('png');
	 * ```
	 *
	 * @param type
	 * The response content type.
	 *

	 
	 * @readonly
	 */
	public readonly setContentType = (type: string | ContentType): ApplicationResponse => this.response.type(type);
	/**
	 * Set _Content-Type_ response header with `type` through `mime.lookup()`
	 * when it does not contain "/", or set the Content-Type to `type` otherwise.
	 *
	 * @example
	 * ```typescript
	 * response.type('.html');
	 * response.type('html');
	 * response.type('json');
	 * response.type('application/json');
	 * response.type('png');
	 * ```
	 *
	 * @param type
	 * The response content type.
	 *

	 
	 * @readonly
	 */
	public readonly contentType = (type: string | ContentType): ApplicationResponse => this.response.type(type);
	/**
	 * Adds the field to the Vary response header, if it is not there already.
	 * @example
	 * ```typescript
	 * response.vary('User-Agent').render('docs');
	 * ```
	 *

	 * @param field
	 * The header.
	 *

	 * @readonly
	 */
	public readonly vary = (field: string): ApplicationResponse => this.response.vary(field);
}
