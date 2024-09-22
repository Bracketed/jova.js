import {
	ApplicationResponse,
	ContentType,
	CookieOptions,
	DownloadOptions,
	ErrorCallback,
	HttpStatus,
	SendFileOptions,
} from '../../types/index.js';

/**
 * A utility for managing responses.
 *
 * @readonly
 */
export class response {
	// Response Codes
	// 1xx Informational responses
	/**
	 * HTTP CONTINUE response method.
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.

	 * @readonly
	 */
	public readonly continue = (response: ApplicationResponse): ApplicationResponse =>
		response.status(HttpStatus.Continue);
	/**
	 * HTTP Switching Protocols response method.
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.

	 * @readonly
	 */
	public readonly switchingProtocols = (response: ApplicationResponse): ApplicationResponse =>
		response.status(HttpStatus.SwitchingProtocols);
	/**
	 * HTTP Processing response method.
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.

	 * @readonly
	 */
	public readonly processing = (response: ApplicationResponse): ApplicationResponse =>
		response.status(HttpStatus.Processing);
	/**
	 * HTTP Early Hints response method.
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.

	 * @readonly
	 */
	public readonly earlyHints = (response: ApplicationResponse): ApplicationResponse =>
		response.status(HttpStatus.EarlyHints);

	// 2xx Success codes
	public readonly ok = (response: ApplicationResponse): ApplicationResponse => response.status(HttpStatus.OK);
	/**
	 * HTTP OK response method.
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.

	 * @readonly
	 */
	public readonly created = (response: ApplicationResponse): ApplicationResponse =>
		response.status(HttpStatus.Created);
	/**
	 * HTTP Created response method.
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.

	 * @readonly
	 */
	public readonly accepted = (response: ApplicationResponse): ApplicationResponse =>
		response.status(HttpStatus.Accepted);
	/**
	 * HTTP Non Authoritative Information response method.
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.

	 * @readonly
	 */
	public readonly nonAuthoritativeInformation = (response: ApplicationResponse): ApplicationResponse =>
		response.status(HttpStatus.NonAuthoritativeInformation);
	/**
	 * HTTP No Content response method.
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.

	 * @readonly
	 */
	public readonly noContent = (response: ApplicationResponse): ApplicationResponse =>
		response.status(HttpStatus.NoContent);
	/**
	 * HTTP Reset Content response method.
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.

	 * @readonly
	 */
	public readonly resetContent = (response: ApplicationResponse): ApplicationResponse =>
		response.status(HttpStatus.ResetContent);
	/**
	 * HTTP Partial Content response method.
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.

	 * @readonly
	 */
	public readonly partialContent = (response: ApplicationResponse): ApplicationResponse =>
		response.status(HttpStatus.PartialContent);
	/**
	 * HTTP Multi Status response method.
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.

	 * @readonly
	 */
	public readonly multiStatus = (response: ApplicationResponse): ApplicationResponse =>
		response.status(HttpStatus.MultiStatus);
	/**
	 * HTTP Already Reported response method.
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.

	 * @readonly
	 */
	public readonly alreadyReported = (response: ApplicationResponse): ApplicationResponse =>
		response.status(HttpStatus.AlreadyReported);
	/**
	 * HTTP I'm Used response method.
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.

	 * @readonly
	 */
	public readonly imUsed = (response: ApplicationResponse): ApplicationResponse => response.status(HttpStatus.IMUsed);

	// 3xx Redirection
	/**
	 * HTTP Multiple Choices response method.
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.

	 * @readonly
	 */
	public readonly multipleChoices = (response: ApplicationResponse): ApplicationResponse =>
		response.status(HttpStatus.MultipleChoices);
	/**
	 * HTTP Permanently Moved response method.
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.

	 * @readonly
	 */
	public readonly movedPermanently = (response: ApplicationResponse): ApplicationResponse =>
		response.status(HttpStatus.MovedPermanently);
	/**
	 * HTTP Found response method.
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.

	 * @readonly
	 */
	public readonly found = (response: ApplicationResponse): ApplicationResponse => response.status(HttpStatus.Found);
	/**
	 * HTTP See Other response method.
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.

	 * @readonly
	 */
	public readonly seeOther = (response: ApplicationResponse): ApplicationResponse =>
		response.status(HttpStatus.SeeOther);
	/**
	 * HTTP Not Modified response method.
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.

	 * @readonly
	 */
	public readonly notModified = (response: ApplicationResponse): ApplicationResponse =>
		response.status(HttpStatus.NotModified);
	/**
	 * HTTP Use Proxy response method.
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.

	 * @readonly
	 */
	public readonly useProxy = (response: ApplicationResponse): ApplicationResponse =>
		response.status(HttpStatus.UseProxy);
	/**
	 * HTTP Temporary Redirect response method.
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.

	 * @readonly
	 */
	public readonly temporaryRedirect = (response: ApplicationResponse): ApplicationResponse =>
		response.status(HttpStatus.TemporaryRedirect);
	/**
	 * HTTP Permanent Redirect response method.
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.

	 * @readonly
	 */
	public readonly permanentRedirect = (response: ApplicationResponse): ApplicationResponse =>
		response.status(HttpStatus.PermanentRedirect);

	// 4xx Client errors
	/**
	 * HTTP Bad Request response method.
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.

	 * @readonly
	 */
	public readonly badRequest = (response: ApplicationResponse): ApplicationResponse =>
		response.status(HttpStatus.BadRequest);
	/**
	 * HTTP Unauthorised response method.
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.

	 * @readonly
	 */
	public readonly unauthorized = (response: ApplicationResponse): ApplicationResponse =>
		response.status(HttpStatus.Unauthorized);
	/**
	 * HTTP Payment Required response method.
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.

	 * @readonly
	 */
	public readonly paymentRequired = (response: ApplicationResponse): ApplicationResponse =>
		response.status(HttpStatus.PaymentRequired);
	/**
	 * HTTP Forbidden response method.
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.

	 * @readonly
	 */
	public readonly forbidden = (response: ApplicationResponse): ApplicationResponse =>
		response.status(HttpStatus.Forbidden);
	/**
	 * HTTP Not Found response method.
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.

	 * @readonly
	 */
	public readonly notFound = (response: ApplicationResponse): ApplicationResponse =>
		response.status(HttpStatus.NotFound);
	/**
	 * HTTP Method Not Allowed response method.
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.

	 * @readonly
	 */
	public readonly methodNotAllowed = (response: ApplicationResponse): ApplicationResponse =>
		response.status(HttpStatus.MethodNotAllowed);
	/**
	 * HTTP Not Acceptable response method.
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.

	 * @readonly
	 */
	public readonly notAcceptable = (response: ApplicationResponse): ApplicationResponse =>
		response.status(HttpStatus.NotAcceptable);
	/**
	 * HTTP Proxy Auth Required response method.
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.

	 * @readonly
	 */
	public readonly proxyAuthenticationRequired = (response: ApplicationResponse): ApplicationResponse =>
		response.status(HttpStatus.ProxyAuthenticationRequired);
	/**
	 * HTTP Timeout response method.
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.

	 * @readonly
	 */
	public readonly requestTimeout = (response: ApplicationResponse): ApplicationResponse =>
		response.status(HttpStatus.RequestTimeout);
	/**
	 * HTTP Request conflict response method.
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.

	 * @readonly
	 */
	public readonly conflict = (response: ApplicationResponse): ApplicationResponse =>
		response.status(HttpStatus.Conflict);
	/**
	 * HTTP Gone response method.
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.

	 * @readonly
	 */
	public readonly gone = (response: ApplicationResponse): ApplicationResponse => response.status(HttpStatus.Gone);
	/**
	 * HTTP Length Required response method.
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.

	 * @readonly
	 */
	public readonly lengthRequired = (response: ApplicationResponse): ApplicationResponse =>
		response.status(HttpStatus.LengthRequired);
	/**
	 * HTTP Precondition Failed response method.
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.

	 * @readonly
	 */
	public readonly preconditionFailed = (response: ApplicationResponse): ApplicationResponse =>
		response.status(HttpStatus.PreconditionFailed);
	/**
	 * HTTP Payload too large response method.
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.

	 * @readonly
	 */
	public readonly payloadTooLarge = (response: ApplicationResponse): ApplicationResponse =>
		response.status(HttpStatus.PayloadTooLarge);
	/**
	 * HTTP URI too long response method.
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.

	 * @readonly
	 */
	public readonly uriTooLong = (response: ApplicationResponse): ApplicationResponse =>
		response.status(HttpStatus.URITooLong);
	/**
	 * HTTP Unsupported Media Type response method.
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.

	 * @readonly
	 */
	public readonly unsupportedMediaType = (response: ApplicationResponse): ApplicationResponse =>
		response.status(HttpStatus.UnsupportedMediaType);
	/**
	 * HTTP Range error response method.
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.

	 * @readonly
	 */
	public readonly rangeNotSatisfiable = (response: ApplicationResponse): ApplicationResponse =>
		response.status(HttpStatus.RangeNotSatisfiable);
	/**
	 * HTTP Expectation failure response method.
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.

	 * @readonly
	 */
	public readonly expectationFailed = (response: ApplicationResponse): ApplicationResponse =>
		response.status(HttpStatus.ExpectationFailed);
	/**
	 * HTTP I'm A Teapot response method.
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.

	 * @readonly
	 */
	public readonly imATeapot = (response: ApplicationResponse): ApplicationResponse =>
		response.status(HttpStatus.ImATeapot);
	/**
	 * HTTP Misdirected response method.
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.

	 * @readonly
	 */
	public readonly misdirectedRequest = (response: ApplicationResponse): ApplicationResponse =>
		response.status(HttpStatus.MisdirectedRequest);
	/**
	 * HTTP Unprocessable Entity response method.
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.

	 * @readonly
	 */
	public readonly unprocessableEntity = (response: ApplicationResponse): ApplicationResponse =>
		response.status(HttpStatus.UnprocessableEntity);
	/**
	 * HTTP Request Locked response method.
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.

	 * @readonly
	 */
	public readonly locked = (response: ApplicationResponse): ApplicationResponse => response.status(HttpStatus.Locked);
	/**
	 * HTTP Dependency Failure response method.
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.

	 * @readonly
	 */
	public readonly failedDependency = (response: ApplicationResponse): ApplicationResponse =>
		response.status(HttpStatus.FailedDependency);
	/**
	 * HTTP Too Early response method.
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.

	 * @readonly
	 */
	public readonly tooEarly = (response: ApplicationResponse): ApplicationResponse =>
		response.status(HttpStatus.TooEarly);
	/**
	 * HTTP Upgrade Required response method.
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.

	 * @readonly
	 */
	public readonly upgradeRequired = (response: ApplicationResponse): ApplicationResponse =>
		response.status(HttpStatus.UpgradeRequired);
	/**
	 * HTTP Required Precondition response method.
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.

	 * @readonly
	 */
	public readonly preconditionRequired = (response: ApplicationResponse): ApplicationResponse =>
		response.status(HttpStatus.PreconditionRequired);
	/**
	 * HTTP Too many requests response method.
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.

	 * @readonly
	 */
	public readonly tooManyRequests = (response: ApplicationResponse): ApplicationResponse =>
		response.status(HttpStatus.TooManyRequests);
	/**
	 * HTTP Header Fields too large response method.
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.

	 * @readonly
	 */
	public readonly requestHeaderFieldsTooLarge = (response: ApplicationResponse): ApplicationResponse =>
		response.status(HttpStatus.RequestHeaderFieldsTooLarge);
	/**
	 * HTTP Unavailable for legal reasons response method.
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.

	 * @readonly
	 */
	public readonly unavailableForLegalReasons = (response: ApplicationResponse): ApplicationResponse =>
		response.status(HttpStatus.UnavailableForLegalReasons);

	// 5xx Server errors
	/**
	 * HTTP Internal Server Error response method.
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.

	 * @readonly
	 */
	public readonly internalServerError = (response: ApplicationResponse): ApplicationResponse =>
		response.status(HttpStatus.InternalServerError);
	/**
	 * HTTP Not Implemented response method.
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.

	 * @readonly
	 */
	public readonly notImplemented = (response: ApplicationResponse): ApplicationResponse =>
		response.status(HttpStatus.NotImplemented);
	/**
	 * HTTP Bad Gateway response method.
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.

	 * @readonly
	 */
	public readonly badGateway = (response: ApplicationResponse): ApplicationResponse =>
		response.status(HttpStatus.BadGateway);
	/**
	 * HTTP Service Unavailable response method.
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.

	 * @readonly
	 */
	public readonly serviceUnavailable = (response: ApplicationResponse): ApplicationResponse =>
		response.status(HttpStatus.ServiceUnavailable);
	/**
	 * HTTP Gateway Timeout response method.
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.

	 * @readonly
	 */
	public readonly gatewayTimeout = (response: ApplicationResponse): ApplicationResponse =>
		response.status(HttpStatus.GatewayTimeout);
	/**
	 * HTTP Version Unsupported response method.
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.

	 * @readonly
	 */
	public readonly httpVersionNotSupported = (response: ApplicationResponse): ApplicationResponse =>
		response.status(HttpStatus.HTTPVersionNotSupported);
	/**
	 * HTTP Variant Also Negotiates response method.
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.

	 * @readonly
	 */
	public readonly variantAlsoNegotiates = (response: ApplicationResponse): ApplicationResponse =>
		response.status(HttpStatus.VariantAlsoNegotiates);
	/**
	 * HTTP Insufficient Storage response method.
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.

	 * @readonly
	 */
	public readonly insufficientStorage = (response: ApplicationResponse): ApplicationResponse =>
		response.status(HttpStatus.InsufficientStorage);
	/**
	 * HTTP Loop Detected response method.
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.

	 * @readonly
	 */
	public readonly loopDetected = (response: ApplicationResponse): ApplicationResponse =>
		response.status(HttpStatus.LoopDetected);
	/**
	 * HTTP Not Extended response method.
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.

	 * @readonly
	 */
	public readonly notExtended = (response: ApplicationResponse): ApplicationResponse =>
		response.status(HttpStatus.NotExtended);
	/**
	 * HTTP Network Authentication Required response method.
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.

	 * @readonly
	 */
	public readonly networkAuthenticationRequired = (response: ApplicationResponse): ApplicationResponse =>
		response.status(HttpStatus.NetworkAuthenticationRequired);

	// Functions
	/**
	 * Sets a single header value. If the header already exists in the to-be-sent
	 * headers, its value will be replaced. Use an array of strings to send multiple
	 * headers with the same name.
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.
	 * @param field
	 * The HTTP response header field.
	 * @param value
	 * The HTTP response header field value.
	 *

	 * @readonly
	 */
	public readonly sendHeader = (
		response: ApplicationResponse,
		name: string,
		value: number | string | readonly string[]
	): ApplicationResponse => response.setHeader(name, value);
	/**
	 * Set header `field` to `value`, or pass
	 * an object of header fields.
	 *
	 * Examples:
	 * ```js
	 * response.set('Foo', ['bar', 'baz']);
	 * response.set('Accept', 'application/json');
	 * response.set({ Accept: 'text/plain', 'X-API-Key': 'tobi' });
	 * ```
	 * Aliased as `response.header()`.
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.
	 * @param field
	 * The HTTP response header field.
	 * @param value
	 * The HTTP response header field value.
	 *

	 * @readonly
	 */
	public readonly setHeader = (
		response: ApplicationResponse,
		field: any,
		value?: string | string[]
	): ApplicationResponse => response.set(field, value);
	/**
	 * Set header `field` to `value`, or pass
	 * an object of header fields.
	 *
	 * Examples:
	 * ```js
	 * response.set('Foo', ['bar', 'baz']);
	 * response.set('Accept', 'application/json');
	 * response.set({ Accept: 'text/plain', 'X-API-Key': 'tobi' });
	 * ```
	 * Aliased as `response.header()`.
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.
	 * @param field
	 * The HTTP response header field.
	 * @param value
	 * The HTTP response header field value.
	 *

	 * @readonly
	 */
	public readonly set = (response: ApplicationResponse, field: any, value?: string | string[]): ApplicationResponse =>
		response.set(field, value);
	/**
	 * Get value for header `field`.
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.
	 * @param field
	 * The HTTP response header field.
	 *

	 * @readonly
	 */
	public readonly getHeader = (response: ApplicationResponse, field: string): string | undefined =>
		response.get(field);
	/**
	 * Get value for header `field`.
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.
	 * @param field
	 * The HTTP response header field.
	 *

	 * @readonly
	 */
	public readonly header = (response: ApplicationResponse, field: string): string | undefined => response.get(field);
	/**
	 * Get value for header `field`.
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.
	 * @param field
	 * The HTTP response header field.


	 * @readonly
	 */
	public readonly get = (response: ApplicationResponse, field: string): string | undefined => response.get(field);
	/**
	 * Appends the specified value to the HTTP response header field.
	 * If the header is not already set, it creates the header with the specified value.
	 * The value parameter can be a `string` or an `array`.
	 *
	 * Note: calling `response.set()` after `response.append()` will reset the previously-set header value.
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.
	 * @param field
	 * The HTTP response header field.
	 * @param value
	 * The value to the header.
	 *

	 * @readonly
	 */
	public readonly append = (
		response: ApplicationResponse,
		field: string,
		value?: string[] | string
	): ApplicationResponse => response.append(field, value);
	/**
	 * Appends the specified value to the HTTP response header field.
	 * If the header is not already set, it creates the header with the specified value.
	 * The value parameter can be a `string` or an `array`.
	 *
	 * Note: calling `response.set()` after `response.append()` will reset the previously-set header value.
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.
	 * @param field
	 * The HTTP response header field.
	 * @param value
	 * The value to the header.
	 *

	 * @readonly
	 */
	public readonly appendHeader = (
		response: ApplicationResponse,
		field: string,
		value?: string[] | string
	): ApplicationResponse => response.append(field, value);
	/**
	 * Appends the specified value to the HTTP response header field.
	 * If the header is not already set, it creates the header with the specified value.
	 * The value parameter can be a `string` or an `array`.
	 *
	 * Note: calling `response.set()` after `response.append()` will reset the previously-set header value.
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.
	 * @param field
	 * The HTTP response header field.
	 * @param value
	 * The value to the header.

	 * @readonly
	 */
	public readonly addHeader = (
		response: ApplicationResponse,
		field: string,
		value?: string[] | string
	): ApplicationResponse => response.append(field, value);
	/**
	 * Set Link header field with the given `links`.
	 *
	 * Examples:
	 * ```js
	 * response.links({
	 *   next: 'http://api.example.com/users?page=2',
	 *   last: 'http://api.example.com/users?page=5'
	 * });
	 * ```
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.
	 * @param links
	 * The links to be added to headers.

	 * @readonly
	 */
	public readonly link = (response: ApplicationResponse, links: any): ApplicationResponse => response.links(links);
	/**
	 * Set Link header field with the given `links`.
	 *
	 * Examples:
	 * ```js
	 * response.links({
	 *   next: 'http://api.example.com/users?page=2',
	 *   last: 'http://api.example.com/users?page=5'
	 * });
	 * ```
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.
	 * @param links
	 * The links to be added to headers.

	 * @readonly
	 */
	public readonly links = (response: ApplicationResponse, links: any): ApplicationResponse => response.links(links);
	/**
	 * Set Link header field with the given `links`.
	 *
	 * Examples:
	 * ```js
	 * response.links({
	 *   next: 'http://api.example.com/users?page=2',
	 *   last: 'http://api.example.com/users?page=5'
	 * });
	 * ```
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.
	 * @param links
	 * The links to be added to headers.

	 * @readonly
	 */
	public readonly linkHeaders = (response: ApplicationResponse, links: any): ApplicationResponse =>
		response.links(links);
	/**
	 * Set the location header to url.
	 * The given url can also be the name of a mapped url, for example by default express supports "back" which redirects to the Referrer or Referer headers or "/".
	 *
	 * Examples:
	 *
	 * response.location('/foo/bar').; response.location('http://example.com'); response.location('../login'); // /blog/post/1 -> /blog/login
	 *
	 * Mounting:
	 *
	 * When an application is mounted and response.location() is given a path that does not lead with "/" it becomes relative to the mount-point. For example if the application is mounted at "/blog", the following would become "/blog/login".
	 *
	 * ```response.location('login');```
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.
	 * @param url
	 * The url for the location to be set to.

	 * @readonly
	 */
	public readonly addLocationHeader = (response: ApplicationResponse, url: string): ApplicationResponse =>
		response.location(url);
	/**
	 * Set the location header to url.
	 * The given url can also be the name of a mapped url, for example by default express supports "back" which redirects to the Referrer or Referer headers or "/".
	 *
	 * Examples:
	 *
	 * response.location('/foo/bar').; response.location('http://example.com'); response.location('../login'); // /blog/post/1 -> /blog/login
	 *
	 * Mounting:
	 *
	 * When an application is mounted and response.location() is given a path that does not lead with "/" it becomes relative to the mount-point. For example if the application is mounted at "/blog", the following would become "/blog/login".
	 *
	 * ```response.location('login');```
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.
	 * @param url
	 * The url for the location to be set to.

	 * @readonly
	 */
	public readonly addLocation = (response: ApplicationResponse, url: string): ApplicationResponse =>
		response.location(url);
	/**
	 * Set the location header to url.
	 * The given url can also be the name of a mapped url, for example by default express supports "back" which redirects to the Referrer or Referer headers or "/".
	 *
	 * Examples:
	 *
	 * response.location('/foo/bar').; response.location('http://example.com'); response.location('../login'); // /blog/post/1 -> /blog/login
	 *
	 * Mounting:
	 *
	 * When an application is mounted and response.location() is given a path that does not lead with "/" it becomes relative to the mount-point. For example if the application is mounted at "/blog", the following would become "/blog/login".
	 *
	 * ```response.location('login');```
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.
	 * @param url
	 * The url for the location to be set to.

	 * @readonly
	 */
	public readonly location = (response: ApplicationResponse, url: string): ApplicationResponse =>
		response.location(url);
	/**
	 * Set `"Content-Disposition"` header to attachment with optional `filename`.
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.
	 * @param filename
	 * The filename for the attachment.

	 * @readonly
	 */
	public readonly attach = (response: ApplicationResponse, filename?: string): ApplicationResponse =>
		response.attachment(filename);
	/**
	 * Set `"Content-Disposition"` header to attachment with optional `filename`.
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.
	 * @param filename
	 * The filename for the attachment.

	 * @readonly
	 */
	public readonly attachFile = (response: ApplicationResponse, filename?: string): ApplicationResponse =>
		response.attachment(filename);
	/**
	 * Set `"Content-Disposition"` header to attachment with optional `filename`.
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.
	 * @param filename
	 * The filename for the attachment.

	 * @readonly
	 */
	public readonly sendAttachment = (response: ApplicationResponse, filename?: string): ApplicationResponse =>
		response.attachment(filename);
	/**
	 * Set `"Content-Disposition"` header to attachment with optional `filename`.
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.
	 * @param filename
	 * The filename for the attachment.

	 * @readonly
	 */
	public readonly addAttachment = (response: ApplicationResponse, filename?: string): ApplicationResponse =>
		response.attachment(filename);
	/**
	 * Set `"Content-Disposition"` header to attachment with optional `filename`.
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.
	 * @param filename
	 * The filename for the attachment.

	 * @readonly
	 */
	public readonly setAttachment = (response: ApplicationResponse, filename?: string): ApplicationResponse =>
		response.attachment(filename);
	/**
	 * Set `"Content-Disposition"` header to attachment with optional `filename`.
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.
	 * @param filename
	 * The filename for the attachment.

	 * @readonly
	 */
	public readonly attachment = (response: ApplicationResponse, filename?: string): ApplicationResponse =>
		response.attachment(filename);
	/**
	 * Set cookie `name` to `val`, with the given `options`.
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.
	 * @param name
	 * The name of the cookie.
	 * @param value
	 * The value of the cookie.
	 * @param options
	 * The cookie options.
	 *
	 * @example
	 * // "Remember Me" for 15 minutes
	 * response.cookie('rememberme', '1', { expires: new Date(Date.now() + 900000), httpOnly: true });
	 *
	 * // save as above
	 * response.cookie('rememberme', '1', { maxAge: 900000, httpOnly: true })

	 * @readonly
	 */
	public readonly setCookie = (
		response: ApplicationResponse,
		name: string,
		value: string,
		options: CookieOptions
	): ApplicationResponse => response.cookie(name, value, options);
	/**
	 * Set cookie `name` to `val`, with the given `options`.
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.
	 * @param name
	 * The name of the cookie.
	 * @param value
	 * The value of the cookie.
	 * @param options
	 * The cookie options.
	 *
	 * @example
	 * // "Remember Me" for 15 minutes
	 * response.cookie('rememberme', '1', { expires: new Date(Date.now() + 900000), httpOnly: true });
	 *
	 * // save as above
	 * response.cookie('rememberme', '1', { maxAge: 900000, httpOnly: true })

	 * @readonly
	 */
	public readonly addCookie = (
		response: ApplicationResponse,
		name: string,
		value: string,
		options: CookieOptions
	): ApplicationResponse => response.cookie(name, value, options);
	/**
	 * Set cookie `name` to `val`, with the given `options`.
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.
	 * @param name
	 * The name of the cookie.
	 * @param value
	 * The value of the cookie.
	 * @param options
	 * The cookie options.
	 *
	 * @example
	 * // "Remember Me" for 15 minutes
	 * response.cookie('rememberme', '1', { expires: new Date(Date.now() + 900000), httpOnly: true });
	 *
	 * // save as above
	 * response.cookie('rememberme', '1', { maxAge: 900000, httpOnly: true })

	 * @readonly
	 */
	public readonly cookie = (
		response: ApplicationResponse,
		name: string,
		value: string,
		options: CookieOptions
	): ApplicationResponse => response.cookie(name, value, options);
	/**
	 * Set cookie `name` to `val`, with the given `options`.
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.
	 * @param name
	 * The name of the cookie.
	 * @param value
	 * The value of the cookie.
	 *
	 * @example
	 * // "Remember Me" for 15 minutes
	 * response.cookie('rememberme', '1', { expires: new Date(Date.now() + 900000), httpOnly: true });
	 *
	 * // save as above
	 * response.cookie('rememberme', '1', { maxAge: 900000, httpOnly: true })

	 * @readonly
	 */
	public readonly simpleCookie = (response: ApplicationResponse, name: string, value: string): ApplicationResponse =>
		response.cookie(name, value);
	/**
	 * Clear cookie `name`.
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.
	 * @param name
	 * The target cookie.
	 * @param options
	 * The target cookie options.
	 *

	 * @readonly
	 */
	public readonly clearCookie = (
		response: ApplicationResponse,
		name: string,
		options?: CookieOptions
	): ApplicationResponse => response.clearCookie(name, options);
	/**
	 * Clear cookie `name`.
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.
	 * @param name
	 * The target cookie.
	 * @param options
	 * The target cookie options.
	 *

	 * @readonly
	 */
	public readonly clear = (
		response: ApplicationResponse,
		name: string,
		options?: CookieOptions
	): ApplicationResponse => response.clearCookie(name, options);
	/**
	 * Clear cookie `name`.
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.
	 * @param name
	 * The target cookie.
	 * @param options
	 * The target cookie options.
	 *

	 * @readonly
	 */
	public readonly removeCookie = (
		response: ApplicationResponse,
		name: string,
		options?: CookieOptions
	): ApplicationResponse => response.clearCookie(name, options);
	/**
	 * Clear cookie `name`.
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.
	 * @param name
	 * The target cookie.
	 * @param options
	 * The target cookie options.
	 *

	 * @readonly
	 */
	public readonly deleteCookie = (
		response: ApplicationResponse,
		name: string,
		options?: CookieOptions
	): ApplicationResponse => response.clearCookie(name, options);
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
	 * @param response
	 * The `ApplicationResponse` object from your route handler.
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
		response: ApplicationResponse,
		path: string,
		filename: string,
		options: DownloadOptions,
		callback?: ErrorCallback
	): void => response.download(path, filename, options, callback);
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
	 * @param response
	 * The `ApplicationResponse` object from your route handler.
	 * @param path
	 * The target file path.
	 * @param filename
	 * The file name for when the client downloads the file.
	 * @param callback
	 * The callback if an error occurs.
	 *
	 * @readonly
	 */
	public readonly namedDownload = (
		response: ApplicationResponse,
		path: string,
		filename: string,
		callback?: ErrorCallback
	): void => response.download(path, filename, callback);
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
	 * @param response
	 * The `ApplicationResponse` object from your route handler.
	 * @param path
	 * The target file path.
	 * @param callback
	 * The callback if an error occurs.
	 *
	 * @readonly
	 */
	public readonly download = (response: ApplicationResponse, path: string, callback?: ErrorCallback): void =>
		response.download(path, callback);
	/**
	 * Calling the `writable.end()` method signals that no more data will be written
	 * to the `Writable`. The optional `chunk` and `encoding` arguments allow one
	 * final additional chunk of data to be written immediately before closing the
	 * stream.
	 *
	 * Calling the `write` method after calling `end` will raise an error.
	 *
	 * ```js
	 * // Write 'hello, ' and then end with 'world!'.
	 * const fs = require('node:fs');
	 * const file = fs.createWriteStream('example.txt');
	 * file.write('hello, ');
	 * file.end('world!');
	 * // Writing more now is not allowed!
	 * ```
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.
	 * @param chunk Optional data to write. For streams not operating in object mode, `chunk` must be a `string`, `Buffer`,
	 * `TypedArray` or `DataView`. For object mode streams, `chunk` may be any JavaScript value other than `null`.
	 * @param encoding The encoding if `chunk` is a `string`
	 * @param callback Callback for when the stream is finished.
	 *

	 * @readonly
	 */
	public readonly end = (response: ApplicationResponse): ApplicationResponse => response.end();
	/**
	 * Calling the `writable.end()` method signals that no more data will be written
	 * to the `Writable`. The optional `chunk` and `encoding` arguments allow one
	 * final additional chunk of data to be written immediately before closing the
	 * stream.
	 *
	 * Calling the `write` method after calling `end` will raise an error.
	 *
	 * ```js
	 * // Write 'hello, ' and then end with 'world!'.
	 * const fs = require('node:fs');
	 * const file = fs.createWriteStream('example.txt');
	 * file.write('hello, ');
	 * file.end('world!');
	 * // Writing more now is not allowed!
	 * ```
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.
	 * @param chunk Optional data to write. For streams not operating in object mode, `chunk` must be a `string`, `Buffer`,
	 * `TypedArray` or `DataView`. For object mode streams, `chunk` may be any JavaScript value other than `null`.
	 * @param encoding The encoding if `chunk` is a `string`
	 * @param callback Callback for when the stream is finished.
	 *

	 * @readonly
	 */
	public readonly callbackedEnd = (response: ApplicationResponse, callback?: () => void): ApplicationResponse =>
		response.end(callback);
	/**
	 * Calling the `writable.end()` method signals that no more data will be written
	 * to the `Writable`. The optional `chunk` and `encoding` arguments allow one
	 * final additional chunk of data to be written immediately before closing the
	 * stream.
	 *
	 * Calling the `write` method after calling `end` will raise an error.
	 *
	 * ```js
	 * // Write 'hello, ' and then end with 'world!'.
	 * const fs = require('node:fs');
	 * const file = fs.createWriteStream('example.txt');
	 * file.write('hello, ');
	 * file.end('world!');
	 * // Writing more now is not allowed!
	 * ```
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.
	 * @param chunk Optional data to write. For streams not operating in object mode, `chunk` must be a `string`, `Buffer`,
	 * `TypedArray` or `DataView`. For object mode streams, `chunk` may be any JavaScript value other than `null`.
	 * @param encoding The encoding if `chunk` is a `string`
	 * @param callback Callback for when the stream is finished.
	 *

	 * @readonly
	 */
	public readonly chunkedEnd = (
		response: ApplicationResponse,
		chunk: any,
		callback?: () => void
	): ApplicationResponse => response.end(chunk, callback);
	/**
	 * Calling the `writable.end()` method signals that no more data will be written
	 * to the `Writable`. The optional `chunk` and `encoding` arguments allow one
	 * final additional chunk of data to be written immediately before closing the
	 * stream.
	 *
	 * Calling the `write` method after calling `end` will raise an error.
	 *
	 * ```js
	 * // Write 'hello, ' and then end with 'world!'.
	 * const fs = require('node:fs');
	 * const file = fs.createWriteStream('example.txt');
	 * file.write('hello, ');
	 * file.end('world!');
	 * // Writing more now is not allowed!
	 * ```
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.
	 * @param chunk Optional data to write. For streams not operating in object mode, `chunk` must be a `string`, `Buffer`,
	 * `TypedArray` or `DataView`. For object mode streams, `chunk` may be any JavaScript value other than `null`.
	 * @param encoding The encoding if `chunk` is a string
	 * @param callback Callback for when the stream is finished.
	 *

	 * @readonly
	 */
	public readonly encodedEnd = (
		response: ApplicationResponse,
		chunk: any,
		encoding: BufferEncoding,
		callback?: () => void
	) => response.end(chunk, encoding, callback);
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
	 * ```js
	 * response.format({
	 * 'text/plain': function(){
	 *   response.send('hey');
	 * },
	 *
	 * 'text/html': function(){
	 *   response.send('<p>hey</p>');
	 * },
	 *
	 * 'appliation/json': function(){
	 *   response.send({ message: 'hey' });
	 * }
	 * });
	 * ```
	 *
	 * In addition to canonicalized MIME types you may
	 * also use `extnames` mapped to these types:
	 * ```js
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
	 * @param response
	 * The `ApplicationResponse` object from your route handler.
	 * @param obj
	 * The object to be formatted.
	 *

	 * @readonly
	 */
	public readonly format = (response: ApplicationResponse, obj: any): ApplicationResponse => response.format(obj);
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
	 * ```js
	 * response.format({
	 * 'text/plain': function(){
	 *   response.send('hey');
	 * },
	 *
	 * 'text/html': function(){
	 *   response.send('<p>hey</p>');
	 * },
	 *
	 * 'appliation/json': function(){
	 *   response.send({ message: 'hey' });
	 * }
	 * });
	 * ```
	 *
	 * In addition to canonicalized MIME types you may
	 * also use `extnames` mapped to these types:
	 * ```js
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
	 * @param response
	 * The `ApplicationResponse` object from your route handler.
	 * @param obj
	 * The object to be formatted.
	 *

	 * @readonly
	 */
	public readonly formatObject = (response: ApplicationResponse, obj: any): ApplicationResponse =>
		response.format(obj);
	/**
	 * Send JSON response.
	 *
	 * Examples:
	 * ```js
	 * response.json(null);
	 * response.json({ user: 'tj' });
	 * response.status(500).json('oh noes!');
	 * response.status(404).json("I don't have that");
	 * ```
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.
	 * @param obj
	 * The object to be sent.
	 *

	 * @readonly
	 */
	public readonly json = (response: ApplicationResponse, obj: any | object): ApplicationResponse =>
		response.json(obj);
	/**
	 * Send JSON response with JSONP callback support.
	 *
	 * Examples:
	 * ```js
	 * response.jsonp(null);
	 * response.jsonp({ user: 'tj' });
	 * response.status(500).jsonp('oh noes!');
	 * response.status(404).jsonp("I don't have that");
	 * ```
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.
	 * @param obj
	 * The object to be sent.
	 *

	 * @readonly
	 */
	public readonly jsonp = (response: ApplicationResponse, obj: any): ApplicationResponse => response.jsonp(obj);
	/**
	 * Redirect to the given `url` with optional response `status`
	 * defaulting to 302.
	 *
	 * The resulting `url` is determined by `response.location()`, so
	 * it will play nicely with mounted apps, relative paths,
	 * `"back"` etc.
	 *
	 * Examples:
	 * ```js
	 * response.redirect('back');
	 * response.redirect('/foo/bar');
	 * response.redirect('http://example.com');
	 * response.redirect(301, 'http://example.com');
	 * response.redirect('../login'); // /blog/post/1 -> /blog/login
	 * ```
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.
	 * @param url
	 * The url the request/response is being redirected to.
	 * @param status
	 * Optional status code to be sent with the redirect.
	 *

	 * @readonly
	 */
	public readonly redirect = (response: ApplicationResponse, url: string, status?: HttpStatus | number): void => {
		if (status) return response.redirect(status, url);
		return response.redirect(url);
	};
	/**
	 * Redirect to the given `url` with optional response `status`
	 * defaulting to 302.
	 *
	 * The resulting `url` is determined by `response.location()`, so
	 * it will play nicely with mounted apps, relative paths,
	 * `"back"` etc.
	 *
	 * Examples:
	 * ```js
	 * response.redirect('back');
	 * response.redirect('/foo/bar');
	 * response.redirect('http://example.com');
	 * response.redirect(301, 'http://example.com');
	 * response.redirect('../login'); // /blog/post/1 -> /blog/login
	 * ```
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.
	 * @param url
	 * The url the request/response is being redirected to.
	 * @param status
	 * Optional status code to be sent with the redirect.
	 *

	 * @readonly
	 */
	public readonly redirectResponse = (
		response: ApplicationResponse,
		url: string,
		status?: HttpStatus | number
	): void => {
		if (status) return response.redirect(status, url);
		return response.redirect(url);
	};
	/**
	 * Redirect to the given `url` with optional response `status`
	 * defaulting to 302.
	 *
	 * The resulting `url` is determined by `response.location()`, so
	 * it will play nicely with mounted apps, relative paths,
	 * `"back"` etc.
	 *
	 * Examples:
	 * ```js
	 * response.redirect('back');
	 * response.redirect('/foo/bar');
	 * response.redirect('http://example.com');
	 * response.redirect(301, 'http://example.com');
	 * response.redirect('../login'); // /blog/post/1 -> /blog/login
	 * ```
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.
	 * @param url
	 * The url the request/response is being redirected to.
	 * @param status
	 * Optional status code to be sent with the redirect.
	 *

	 * @readonly
	 */
	public readonly redirectRequest = (
		response: ApplicationResponse,
		url: string,
		status?: HttpStatus | number
	): void => {
		if (status) return response.redirect(status, url);
		return response.redirect(url);
	};
	/**
	 * Render `view` with the given `options` and optional callback `fn`.
	 * When a callback function is given a response will _not_ be made
	 * automatically, otherwise a response of _200_ and _text/html_ is given.
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.
	 * @param view
	 * The file path of the view file to render.
	 * @param callback
	 * Optional callback to the render function.
	 *

	 * @readonly
	 */
	public readonly render = (
		response: ApplicationResponse,
		view: string,
		callback?: (err: Error, html: string) => void
	): void => response.render(view, callback);
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
	 * @param response
	 * The `ApplicationResponse` object from your route handler.
	 * @param view
	 * The file path of the view file to render.
	 * @param callback
	 * Optional callback to the render function.
	 *

	 * @readonly
	 */
	public readonly advancedRender = (
		response: ApplicationResponse,
		view: string,
		options?: object,
		callback?: (err: Error, html: string) => void
	): void => response.render(view, options, callback);
	/**
	 * Send a response.
	 *
	 * Examples:
	 * ```js
	 * response.send(new Buffer('wahoo'));
	 * response.send({ some: 'json' });
	 * response.send('<p>some html</p>');
	 * response.status(404).send('Sorry, cant find that');
	 * ```
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.
	 * @param body
	 * The response body to be sent.
	 *

	 * @readonly
	 */
	public readonly send = (response: ApplicationResponse, body?: any): ApplicationResponse => response.send(body);
	/**
	 * Send a response.
	 *
	 * Examples:
	 * ```js
	 * response.send(new Buffer('wahoo'));
	 * response.send({ some: 'json' });
	 * response.send('<p>some html</p>');
	 * response.status(404).send('Sorry, cant find that');
	 * ```
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.
	 * @param body
	 * The response body to be sent.
	 *

	 * @readonly
	 */
	public readonly sendContent = (response: ApplicationResponse, body?: any): ApplicationResponse =>
		response.send(body);
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
	 * Examples:
	 *
	 * The following example illustrates how `response.sendFile()` may
	 * be used as an alternative for the `static()` middleware for
	 * dynamic situations. The code backing `response.sendFile()` is actually
	 * the same code, so HTTP cache support etc is identical.
	 *
	 * ```js
	 * application.get('/user/:uid/photos/:file', function(req, res){
	 *   var uid = req.params.uid
	 * , file = req.params.file;
	 *   req.user.mayViewFilesFrom(uid, function(yes){
	 * if (yes) {
	 *  response.sendFile('/uploads/' + uid + '/' + file);
	 * } else {
	 *  response.send(403, 'Sorry! you cant see that.');
	 * }
	 *   });
	 * });
	 * ```
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.
	 * @param body
	 * The response body to be sent.
	 *

	 * @readonly
	 */
	public readonly sendAdvancedFile = (
		response: ApplicationResponse,
		path: string,
		options: SendFileOptions,
		callback?: ErrorCallback
	) => response.sendFile(path, options, callback);
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
	 * Examples:
	 *
	 * The following example illustrates how `response.sendFile()` may
	 * be used as an alternative for the `static()` middleware for
	 * dynamic situations. The code backing `response.sendFile()` is actually
	 * the same code, so HTTP cache support etc is identical.
	 *
	 * ```js
	 * application.get('/user/:uid/photos/:file', function(req, res){
	 *   var uid = req.params.uid
	 * , file = req.params.file;
	 *   req.user.mayViewFilesFrom(uid, function(yes){
	 * if (yes) {
	 *  response.sendFile('/uploads/' + uid + '/' + file);
	 * } else {
	 *  response.send(403, 'Sorry! you cant see that.');
	 * }
	 *   });
	 * });
	 * ```
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.
	 * @param body
	 * The response body to be sent.
	 *

	 * @readonly
	 */
	public readonly sendFile = (response: ApplicationResponse, path: string, callback?: ErrorCallback) =>
		response.sendFile(path, callback);
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
	 * Examples:
	 *
	 * The following example illustrates how `response.sendFile()` may
	 * be used as an alternative for the `static()` middleware for
	 * dynamic situations. The code backing `response.sendFile()` is actually
	 * the same code, so HTTP cache support etc is identical.
	 *
	 * ```js
	 * application.get('/user/:uid/photos/:file', function(req, res){
	 *   var uid = req.params.uid
	 * , file = req.params.file;
	 *   req.user.mayViewFilesFrom(uid, function(yes){
	 * if (yes) {
	 *  response.sendFile('/uploads/' + uid + '/' + file);
	 * } else {
	 *  response.send(403, 'Sorry! you cant see that.');
	 * }
	 *   });
	 * });
	 * ```
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.
	 * @param body
	 * The response body to be sent.
	 *

	 * @readonly
	 */
	public readonly file = (response: ApplicationResponse, path: string, callback?: ErrorCallback) =>
		response.sendFile(path, callback);
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
	 * Examples:
	 *
	 * The following example illustrates how `response.sendFile()` may
	 * be used as an alternative for the `static()` middleware for
	 * dynamic situations. The code backing `response.sendFile()` is actually
	 * the same code, so HTTP cache support etc is identical.
	 *
	 * ```js
	 * application.get('/user/:uid/photos/:file', function(req, res){
	 *   var uid = req.params.uid
	 * , file = req.params.file;
	 *   req.user.mayViewFilesFrom(uid, function(yes){
	 * if (yes) {
	 *  response.sendFile('/uploads/' + uid + '/' + file);
	 * } else {
	 *  response.send(403, 'Sorry! you cant see that.');
	 * }
	 *   });
	 * });
	 * ```
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.
	 * @param body
	 * The response body to be sent.
	 *

	 * @readonly
	 */
	public readonly upload = (response: ApplicationResponse, path: string, callback?: ErrorCallback) =>
		response.sendFile(path, callback);
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
	 * Examples:
	 *
	 * The following example illustrates how `response.sendFile()` may
	 * be used as an alternative for the `static()` middleware for
	 * dynamic situations. The code backing `response.sendFile()` is actually
	 * the same code, so HTTP cache support etc is identical.
	 *
	 * ```js
	 * application.get('/user/:uid/photos/:file', function(req, res){
	 *   var uid = req.params.uid
	 * , file = req.params.file;
	 *   req.user.mayViewFilesFrom(uid, function(yes){
	 * if (yes) {
	 *  response.sendFile('/uploads/' + uid + '/' + file);
	 * } else {
	 *  response.send(403, 'Sorry! you cant see that.');
	 * }
	 *   });
	 * });
	 * ```
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.
	 * @param body
	 * The response body to be sent.
	 *

	 * @readonly
	 */
	public readonly uploadFile = (response: ApplicationResponse, path: string, callback?: ErrorCallback) =>
		response.sendFile(path, callback);
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
	 * Examples:
	 *
	 * The following example illustrates how `response.sendFile()` may
	 * be used as an alternative for the `static()` middleware for
	 * dynamic situations. The code backing `response.sendFile()` is actually
	 * the same code, so HTTP cache support etc is identical.
	 *
	 * ```js
	 * application.get('/user/:uid/photos/:file', function(req, res){
	 *   var uid = req.params.uid
	 * , file = req.params.file;
	 *   req.user.mayViewFilesFrom(uid, function(yes){
	 * if (yes) {
	 *  response.sendFile('/uploads/' + uid + '/' + file);
	 * } else {
	 *  response.send(403, 'Sorry! you cant see that.');
	 * }
	 *   });
	 * });
	 * ```
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.
	 * @param body
	 * The response body to be sent.
	 *

	 * @readonly
	 */
	public readonly addFile = (response: ApplicationResponse, path: string, callback?: ErrorCallback) =>
		response.sendFile(path, callback);
	/**
	 * Set the response HTTP status code to `statusCode` and send its string representation as the response body.
	 * Source: http://expressjs.com/4x/api.html#res.sendStatus
	 *
	 * Examples:
	 * ```js
	 * response.sendStatus(200); // equivalent to response.status(200).send('OK')
	 * response.sendStatus(403); // equivalent to response.status(403).send('Forbidden')
	 * response.sendStatus(404); // equivalent to response.status(404).send('Not Found')
	 * response.sendStatus(500); // equivalent to response.status(500).send('Internal Server Error')
	 * ```
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.
	 * @param code
	 * The response status code.
	 *

	 * @readonly
	 */
	public readonly sendStatus = (response: ApplicationResponse, code: number | HttpStatus): ApplicationResponse =>
		response.sendStatus(code);
	/**
	 * Set the response HTTP status code to `statusCode` and send its string representation as the response body.
	 * Source: http://expressjs.com/4x/api.html#res.sendStatus
	 *
	 * Examples:
	 * ```js
	 * response.sendStatus(200); // equivalent to response.status(200).send('OK')
	 * response.sendStatus(403); // equivalent to response.status(403).send('Forbidden')
	 * response.sendStatus(404); // equivalent to response.status(404).send('Not Found')
	 * response.sendStatus(500); // equivalent to response.status(500).send('Internal Server Error')
	 * ```
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.
	 * @param code
	 * The response status code.
	 *

	 * @readonly
	 */
	public readonly code = (response: ApplicationResponse, code: number | HttpStatus): ApplicationResponse =>
		response.sendStatus(code);
	/**
	 * Set the response HTTP status code to `statusCode` and send its string representation as the response body.
	 * Source: http://expressjs.com/4x/api.html#res.sendStatus
	 *
	 * Examples:
	 * ```js
	 * response.sendStatus(200); // equivalent to response.status(200).send('OK')
	 * response.sendStatus(403); // equivalent to response.status(403).send('Forbidden')
	 * response.sendStatus(404); // equivalent to response.status(404).send('Not Found')
	 * response.sendStatus(500); // equivalent to response.status(500).send('Internal Server Error')
	 * ```
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.
	 * @param code
	 * The response status code.
	 *

	 * @readonly
	 */
	public readonly setStatus = (response: ApplicationResponse, code: number | HttpStatus): ApplicationResponse =>
		response.sendStatus(code);
	/**
	 * Set the response HTTP status code to `statusCode` and send its string representation as the response body.
	 * Source: http://expressjs.com/4x/api.html#res.sendStatus
	 *
	 * Examples:
	 * ```js
	 * response.sendStatus(200); // equivalent to response.status(200).send('OK')
	 * response.sendStatus(403); // equivalent to response.status(403).send('Forbidden')
	 * response.sendStatus(404); // equivalent to response.status(404).send('Not Found')
	 * response.sendStatus(500); // equivalent to response.status(500).send('Internal Server Error')
	 * ```
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.
	 * @param code
	 * The response status code.
	 *

	 * @readonly
	 */
	public readonly status = (response: ApplicationResponse, code: number | HttpStatus): ApplicationResponse =>
		response.status(code);
	/**
	 * Set _Content-Type_ response header with `type` through `mime.lookup()`
	 * when it does not contain "/", or set the Content-Type to `type` otherwise.
	 *
	 * Examples:
	 * ```js
	 * response.type('.html');
	 * response.type('html');
	 * response.type('json');
	 * response.type('application/json');
	 * response.type('png');
	 * ```
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.
	 * @param type
	 * The response content type.
	 *

	 * @readonly
	 */
	public readonly type = (response: ApplicationResponse, type: string | ContentType): ApplicationResponse =>
		response.type(type);
	/**
	 * Set _Content-Type_ response header with `type` through `mime.lookup()`
	 * when it does not contain "/", or set the Content-Type to `type` otherwise.
	 *
	 * Examples:
	 * ```js
	 * response.type('.html');
	 * response.type('html');
	 * response.type('json');
	 * response.type('application/json');
	 * response.type('png');
	 * ```
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.
	 * @param type
	 * The response content type.
	 *

	 
	 * @readonly
	 */
	public readonly responseType = (response: ApplicationResponse, type: string | ContentType): ApplicationResponse =>
		response.type(type);
	/**
	 * Set _Content-Type_ response header with `type` through `mime.lookup()`
	 * when it does not contain "/", or set the Content-Type to `type` otherwise.
	 *
	 * Examples:
	 * ```js
	 * response.type('.html');
	 * response.type('html');
	 * response.type('json');
	 * response.type('application/json');
	 * response.type('png');
	 * ```
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.
	 * @param type
	 * The response content type.
	 *

	 
	 * @readonly
	 */
	public readonly setResponseType = (
		response: ApplicationResponse,
		type: string | ContentType
	): ApplicationResponse => response.type(type);
	/**
	 * Set _Content-Type_ response header with `type` through `mime.lookup()`
	 * when it does not contain "/", or set the Content-Type to `type` otherwise.
	 *
	 * Examples:
	 * ```js
	 * response.type('.html');
	 * response.type('html');
	 * response.type('json');
	 * response.type('application/json');
	 * response.type('png');
	 * ```
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.
	 * @param type
	 * The response content type.
	 *

	 
	 * @readonly
	 */
	public readonly setType = (response: ApplicationResponse, type: string | ContentType): ApplicationResponse =>
		response.type(type);
	/**
	 * Set _Content-Type_ response header with `type` through `mime.lookup()`
	 * when it does not contain "/", or set the Content-Type to `type` otherwise.
	 *
	 * Examples:
	 * ```js
	 * response.type('.html');
	 * response.type('html');
	 * response.type('json');
	 * response.type('application/json');
	 * response.type('png');
	 * ```
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.
	 * @param type
	 * The response content type.
	 *

	 
	 * @readonly
	 */
	public readonly setResponse = (response: ApplicationResponse, type: string | ContentType): ApplicationResponse =>
		response.type(type);
	/**
	 * Set _Content-Type_ response header with `type` through `mime.lookup()`
	 * when it does not contain "/", or set the Content-Type to `type` otherwise.
	 *
	 * Examples:
	 * ```js
	 * response.type('.html');
	 * response.type('html');
	 * response.type('json');
	 * response.type('application/json');
	 * response.type('png');
	 * ```
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.
	 * @param type
	 * The response content type.
	 *

	 
	 * @readonly
	 */
	public readonly setContent = (response: ApplicationResponse, type: string | ContentType): ApplicationResponse =>
		response.type(type);
	/**
	 * Set _Content-Type_ response header with `type` through `mime.lookup()`
	 * when it does not contain "/", or set the Content-Type to `type` otherwise.
	 *
	 * Examples:
	 * ```js
	 * response.type('.html');
	 * response.type('html');
	 * response.type('json');
	 * response.type('application/json');
	 * response.type('png');
	 * ```
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.
	 * @param type
	 * The response content type.
	 *

	 
	 * @readonly
	 */
	public readonly setContentType = (response: ApplicationResponse, type: string | ContentType): ApplicationResponse =>
		response.type(type);
	/**
	 * Set _Content-Type_ response header with `type` through `mime.lookup()`
	 * when it does not contain "/", or set the Content-Type to `type` otherwise.
	 *
	 * Examples:
	 * ```js
	 * response.type('.html');
	 * response.type('html');
	 * response.type('json');
	 * response.type('application/json');
	 * response.type('png');
	 * ```
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.
	 * @param type
	 * The response content type.
	 *

	 
	 * @readonly
	 */
	public readonly contentType = (response: ApplicationResponse, type: string | ContentType): ApplicationResponse =>
		response.type(type);
	/**
	 * Adds the field to the Vary response header, if it is not there already.
	 * Examples:
	 * ```js
	 * response.vary('User-Agent').render('docs');
	 * ```
	 *
	 * @param response
	 * The `ApplicationResponse` object from your route handler.
	 * @param field
	 * The header.
	 *

	 * @readonly
	 */
	public readonly vary = (response: ApplicationResponse, field: string): ApplicationResponse => response.vary(field);
}
