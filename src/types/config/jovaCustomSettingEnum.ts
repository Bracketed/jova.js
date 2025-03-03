/**
 * @name JovaSettingsTable
 * @description The Jova Settings enum.
 *
 * @module Types
 * @enum number
 */
export enum JovaSettingsTable {
	/**
	 * @name CaseSensitive
	 * @description
	 * Enable case sensitivity. When enabled, `"/Foo"` and `"/foo"` are different routes.
	 * When disabled, `"/Foo"` and `"/foo"` are treated the same.
	 *
	 * NOTE: Sub-apps will inherit the value of this setting.
	 *
	 * @see {@link https://expressjs.com/en/api.html#app.settings.table Express.js Documentation}
	 *
	 * @default undefined
	 * @type boolean
	 */
	CaseSensitive = 'case sensitive routing',
	/**
	 * @name Environment
	 * @description Environment mode. Be sure to set to `"production"` in a production environment
	 *
	 * @see {@link https://expressjs.com/en/api.html#app.settings.table Express.js Documentation}
	 *
	 * @default process.env.NODE_ENV | "development"
	 * @type string
	 */
	Environment = 'env',
	/**
	 * @name ETag
	 * @description Set the ETag response header.
	 *
	 * @see {@link https://expressjs.com/en/api.html#app.settings.table Express.js Documentation}
	 *
	 * @default "weak"
	 * @type any
	 */
	ETag = 'etag',
	/**
	 * @name JSONPCallback
	 * @description Specifies the default JSONP callback name.
	 *
	 * @see {@link https://expressjs.com/en/api.html#app.settings.table Express.js Documentation}
	 *
	 * @default "callback"
	 * @type string
	 */
	JSONPCallback = 'jsonp callback name',
	/**
	 * @name JSONEscape
	 * @description
	 * Enable escaping JSON responses from the `res.json`, `res.jsonp`, and `res.send` APIs.
	 * The purpose of this it to assist with mitigating certain types of persistent XSS attacks when clients sniff responses for HTML.
	 *
	 * @see {@link https://expressjs.com/en/api.html#app.settings.table Express.js Documentation}
	 *
	 * @default undefined
	 * @type boolean
	 */
	JSONEscape = 'json escape',
	/**
	 * @name JSONReplacer
	 * @description
	 * The `'replacer'` argument used by `JSON.stringify`.
	 *
	 * **NOTE**: *Sub-apps will inherit the value of this setting.*
	 *
	 * @see {@link https://expressjs.com/en/api.html#app.settings.table Express.js Documentation}
	 *
	 * @default undefined
	 * @type any
	 */
	JSONReplacer = 'json replacer',
	/**
	 * @name JSONSpaces
	 * @description
	 * The 'space' argument used by `JSON.stringify`.
	 * This is typically set to the number of spaces to use to indent prettified JSON.
	 *
	 * **NOTE**: *Sub-apps will inherit the value of this setting.*
	 *
	 * @see {@link https://expressjs.com/en/api.html#app.settings.table Express.js Documentation}
	 *
	 * @default undefined
	 * @type any
	 */
	JSONSpaces = 'json spaces',
	/**
	 * @name QueryParser
	 * @description
	 * Disable query parsing by setting the value to false, or set the query parser to use either `"simple"` or `"extended"` or a custom query string parsing function.
	 *
	 * The simple query parser is based on Node’s native query parser, querystring.
	 *
	 * The extended query parser is based on qs.
	 *
	 * A custom query string parsing function will receive the complete query string, and must return an object of query keys and their values.
	 *
	 * @see {@link https://expressjs.com/en/api.html#app.settings.table Express.js Documentation}
	 *
	 * @default "extended"
	 * @type any
	 */
	QueryParser = 'query parser',
	/**
	 * @name StrictRouting
	 * @description
	 * Enable strict routing. When enabled, the router treats `"/foo"` and `"/foo/"` as different.
	 * Otherwise, the router treats `"/foo"` and `"/foo/"` as the same.
	 *
	 * **NOTE**: *Sub-apps will inherit the value of this setting.*
	 *
	 * @see {@link https://expressjs.com/en/api.html#app.settings.table Express.js Documentation}
	 *
	 * @default undefined
	 * @type boolean
	 */
	StrictRouting = 'strict routing',
	/**
	 * @name SubdomainOffset
	 * @description
	 * The number of dot-separated parts of the host to remove to access subdomain.
	 *
	 * @see {@link https://expressjs.com/en/api.html#app.settings.table Express.js Documentation}
	 *
	 * @default 2
	 * @type boolean
	 */
	SubdomainOffset = 'subdomain offset',
	/**
	 * @name TrustProxy
	 * @description
	 * Indicates the app is behind a front-facing proxy, and to use the `X-Forwarded-*` headers to determine the connection and the IP address of the client.
	 *
	 * **NOTE**: *`X-Forwarded-*` headers are easily spoofed and the detected IP addresses are unreliable.*
	 *
	 * When enabled, Express attempts to determine the IP address of the client connected through the front-facing proxy, or series of proxies.
	 * The `req.ips` property, then contains an array of IP addresses the client is connected through.
	 * To enable it, use the values described in the trust proxy options table.
	 *
	 * The `trust proxy` setting is implemented using the `proxy-addr` package. For more information, see its documentation.
	 *
	 * **NOTE**: *Sub-apps will inherit the value of this setting, even though it has a default value.*
	 *
	 * @see {@link https://expressjs.com/en/api.html#app.settings.table Express.js Documentation}
	 *
	 * @default false
	 * @type any
	 */
	TrustProxy = 'trust proxy',
	/**
	 * @name Views
	 * @description
	 * A directory or an array of directories for the application's views. If an array, the views are looked up in the order they occur in the array
	 *
	 * @see {@link https://expressjs.com/en/api.html#app.settings.table Express.js Documentation}
	 *
	 * @default process.cwd() + '/views'
	 * @type string | Array<string>
	 */
	Views = 'views',
	/**
	 * @name ViewCache
	 * @description
	 * Enables view template compilation caching.
	 *
	 * **NOTE**: *Sub-apps will not inherit the value of this setting in production (when `NODE_ENV` is `"production"`).*
	 *
	 * @see {@link https://expressjs.com/en/api.html#app.settings.table Express.js Documentation}
	 *
	 * @default true | undefined
	 * @type boolean
	 */
	ViewCache = 'view cache',
	/**
	 * @name ViewEngine
	 * @description
	 * The default engine extension to use when omitted.
	 *
	 * **NOTE**: *Sub-apps will inherit the value of this setting.*
	 *
	 * @see {@link https://expressjs.com/en/api.html#app.settings.table Express.js Documentation}
	 *
	 * @default undefined
	 * @type string
	 */
	ViewEngine = 'view engine',
	/**
	 * @name PoweredBy
	 * @description
	 * Enables the `"X-Powered-By: Express"` HTTP header.
	 *
	 * @see {@link https://expressjs.com/en/api.html#app.settings.table Express.js Documentation}
	 *
	 * @default true
	 * @type boolean
	 */
	PoweredBy = 'x-powered-by',
}
