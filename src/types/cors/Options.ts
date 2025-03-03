import type { CustomOrigin } from './CustomOrigin';
import type { StaticOrigin } from './StaticOrigin';

/**
 * @name CorsOptions
 * @description
 * Options for the CORS (Cross-Origin Resource Sharing) middleware, which controls access to resources on a server from different origins.
 * It allows configuration of request origins, methods, headers, and more.
 *
 * @module Types
 * @interface CorsOptions
 */
export interface CorsOptions {
	/**
	 * @name origin
	 * @default '*'
	 * @description
	 * Configures the Access-Control-Allow-Origin CORS header.
	 * This determines which origins are allowed to access the resource.
	 * It can be:
	 * - A string representing a specific origin (e.g., 'https://example.com')
	 * - An asterisk (*) to allow all origins
	 * - A function for custom logic to determine the allowed origin
	 * - Undefined to default to '*'
	 * @type StaticOrigin | CustomOrigin | undefined
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin MDN: Access-Control-Allow-Origin}
	 */
	origin?: StaticOrigin | CustomOrigin | undefined;
	/**
	 * @name methods
	 * @description
	 * Specifies the HTTP methods allowed when accessing the resource.
	 * This sets the Access-Control-Allow-Methods header.
	 * It can be:
	 * - A comma-separated string (e.g., 'GET, POST')
	 * - An array of strings (e.g., ['GET', 'POST'])
	 * - Undefined to allow all standard methods
	 * @default 'GET, HEAD, PUT, PATCH, POST, DELETE'
	 * @type string | string[] | undefined
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Methods MDN: Access-Control-Allow-Methods}
	 */
	methods?: string | string[] | undefined;
	/**
	 * @name allowedHeaders
	 * @description
	 * Defines the headers that are allowed in the request.
	 * This corresponds to the Access-Control-Allow-Headers header.
	 * It can be:
	 * - A comma-separated string (e.g., 'Content-Type, Authorization')
	 * - An array of strings (e.g., ['Content-Type', 'Authorization'])
	 * - Undefined to allow all headers requested by the client
	 * @type string | string[] | undefined
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Headers MDN: Access-Control-Allow-Headers}
	 */
	allowedHeaders?: string | string[] | undefined;
	/**
	 * @name exposedHeaders
	 * @description
	 * Lists the headers exposed to the browser.
	 * This sets the Access-Control-Expose-Headers header.
	 * This is used to allow the client to read certain headers from the response.
	 * It can be:
	 * - A comma-separated string (e.g., 'X-Custom-Header')
	 * - An array of strings (e.g., ['X-Custom-Header'])
	 * - Undefined to expose no additional headers
	 * @type string | string[] | undefined
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Expose-Headers MDN: Access-Control-Expose-Headers}
	 */
	exposedHeaders?: string | string[] | undefined;
	/**
	 * @name credentials
	 * @description
	 * Indicates whether the request can include user credentials like cookies, HTTP authentication, or client-side SSL certificates.
	 * This sets the Access-Control-Allow-Credentials header.
	 * - If true, credentials are allowed
	 * - If false or undefined, credentials are not allowed
	 * @type boolean | undefined
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Credentials MDN: Access-Control-Allow-Credentials}
	 */
	credentials?: boolean | undefined;
	/**
	 * @name maxAge
	 * @description
	 * Specifies how long (in seconds) the results of a preflight request can be cached.
	 * This sets the Access-Control-Max-Age header.
	 * - A number representing the cache duration in seconds
	 * - Undefined to not specify a max age
	 * @type number | undefined
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Max-Age MDN: Access-Control-Max-Age}
	 */
	maxAge?: number | undefined;
	/**
	 * @name preflightContinue
	 * @description
	 * Determines if the middleware should pass the preflight request to the next handler.
	 * - If true, the next middleware will handle the OPTIONS request
	 * - If false or undefined, the middleware responds directly to the preflight request
	 * @default false
	 * @type boolean | undefined
	 */
	preflightContinue?: boolean | undefined;
	/**
	 * @name optionsSuccessStatus
	 * @description
	 * Sets the HTTP status code sent for successful OPTIONS preflight requests.
	 * - Typically set to 204 (No Content)
	 * - Can be customized for legacy browsers that require a different status code (e.g., 200)
	 * @default 204
	 * @type number | undefined
	 */
	optionsSuccessStatus?: number | undefined;
}
