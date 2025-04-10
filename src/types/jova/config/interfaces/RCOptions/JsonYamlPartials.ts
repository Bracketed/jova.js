/**
 * @name JovaPathSettings
 * @description Custom paths for searching when the server runs.
 */
interface JovaPathSettings {
	/**
	 * @name routes
	 * @description Folder where your routes are contained.
	 */
	routes?: string;
	/**
	 * @name middlewares
	 * @description Folder where your middlewares are contained.
	 */
	middlewares?: string;
	/**
	 * @name events
	 * @description Folder where your event listeners are contained.
	 */
	events?: string;
}

/**
 * @name JovaSettings
 * @description The boolean-based settings for the Jova.js server.
 */
interface JovaSettings {
	/**
	 * @name enabled
	 * @description
	 * Settings to enable.
	 *
	 * Allows boolean-based settings only.
	 *
	 * @type Array<string>
	 */
	enabled?: Array<string>;
	/**
	 * @name disabled
	 * @description
	 * Settings to disable.
	 *
	 * Allows boolean-based settings only.
	 *
	 * @type Array<string>
	 */
	disabled?: Array<string>;
}

/**
 * @name JovaCustomOption
 * @description Custom express options to set when the Jova.js server starts.
 */
interface JovaCustomOption {
	/**
	 * @name name
	 * @description The name of the setting.
	 */
	name: string;
	/**
	 * @name value
	 * @description The value to set it to.
	 */
	value: string | number | boolean;
}

/**
 * @name CorsOptions
 * @description
 * Options for the CORS (Cross-Origin Resource Sharing) middleware, which controls access to resources on a server from different origins.
 * It allows configuration of request origins, methods, headers, and more.
 */
interface CorsOptions {
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
	 */
	origin?: boolean | string | RegExp | Array<boolean | string | RegExp> | undefined;
	/**
	 * @name methods
	 * @description
	 * Specifies the HTTP methods allowed when accessing the resource.
	 * This sets the Access-Control-Allow-Methods header.
	 * It can be:
	 * - A comma-separated string (e.g., 'GET, POST')
	 * - An array of strings (e.g., ['GET', 'POST'])
	 * - Undefined to allow all standard methods
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
	 */
	exposedHeaders?: string | string[] | undefined;
	/**
	 * @name credentials
	 * @description
	 * Indicates whether the request can include user credentials like cookies, HTTP authentication, or client-side SSL certificates.
	 * This sets the Access-Control-Allow-Credentials header.
	 * - If true, credentials are allowed
	 * - If false or undefined, credentials are not allowed
	 */
	credentials?: boolean | undefined;
	/**
	 * @name maxAge
	 * @description
	 * Specifies how long (in seconds) the results of a preflight request can be cached.
	 * This sets the Access-Control-Max-Age header.
	 * - A number representing the cache duration in seconds
	 * - Undefined to not specify a max age
	 */
	maxAge?: number | undefined;
	/**
	 * @name preflightContinue
	 * @description
	 * Determines if the middleware should pass the preflight request to the next handler.
	 * - If true, the next middleware will handle the OPTIONS request
	 * - If false or undefined, the middleware responds directly to the preflight request
	 */
	preflightContinue?: boolean | undefined;
	/**
	 * @name optionsSuccessStatus
	 * @description
	 * Sets the HTTP status code sent for successful OPTIONS preflight requests.
	 * - Typically set to 204 (No Content)
	 * - Can be customized for legacy browsers that require a different status code (e.g., 200)
	 */
	optionsSuccessStatus?: number | undefined;
}

/**
 * @name JovaHeaderSetting
 * @description Headings to be added to any request made into the Jova.js server.
 */
interface JovaHeaderSetting {
	/**
	 * @name header
	 * @description The name of the header.
	 */
	header: string;
	/**
	 * @name value
	 * @description The value of the header.
	 */
	value: any;
}

/**
 * @name JovaPartialRCOptions
 * @description Jova Server options for simple resource configs.
 *
 * @module Types
 * @interface JovaPartialRCOptions
 */
export interface JovaPartialRCOptions {
	/**
	 * @name paths
	 * @description Deploy example middlewares and routes when running the Jova.js Server.
	 */
	paths?: JovaPathSettings;
	/**
	 * @name basePath
	 * @description An optional base path for all of your routes to begin at.
	 */
	basePath?: string;
	/**
	 * @name port
	 * @description The port for the Jova Server to run on.
	 */
	port?: string | number;
	/**
	 * @name settings
	 * @description Custom settings from express to be enabled or disabled upon the server starting.
	 */
	settings?: JovaSettings;
	/**
	 * @name customOptions
	 * @description Custom options from express to be set upon the server starting, similar to `settings` but this sets any value unlike `settings` which only allows settings from the `JovaSettingsOptions` enum.
	 */
	customOptions?: Array<JovaCustomOption>;
	/**
	 * @name customHeaders
	 * @description Custom headers to be applied to outgoing responses, this is a middleware of optional use but the headers put in here are read-only at runtime until the request is received by a request handler.
	 */
	customHeaders?: Array<JovaHeaderSetting>;
	/**
	 * @name cors
	 * @description Enable cors and set up certain values for the cors middleware.
	 */
	cors?: CorsOptions;
}
