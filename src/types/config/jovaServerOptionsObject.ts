import {
	CorsOptions,
	JovaCustomOption,
	JovaHeaderSetting,
	JovaPathSettings,
	JovaSettings,
	MiddlewareHandler,
	RatelimitConfig,
} from '../../types/index.js';

/**
 * Jova Server options.
 *
 
 * @interface JovaServerOptions
 */
export interface JovaServerOptions {
	/**
	 * Deploy example middlewares and routes when running the Jova.js Server.
	 *
	 * @type JovaPathSettings
	 */
	paths?: JovaPathSettings;
	/**
	 * An optional base path for all of your routes to begin at.
	 *
	 * @example "/api"
	 * @type string
	 */
	basePath?: string;
	/**
	 * An array containing middlewares you would like to use in your application.
	 *
	 * Middlewares built to support __Express__ only, or alternatively you can write them in yourself.
	 *
	 * @example
	 * // An example of a middleware component coded raw into Jova's Middleware Array.
	 * ((request: Request, response: Response, next: NextFunction) => {
	 * 	console.log(`New request at ${request.path}!`)
	 * 	return next()
	 * })
	 * @type Array<Middleware>
	 */
	middlewares?: Array<MiddlewareHandler>;
	/**
	 * The port for the Jova Server to run on.
	 * @default 3000
	 * @type string | number
	 */
	port?: string | number;
	/**
	 * The ratelimit config for a Jova Server Instance.
	 * @default undefined // (Disabled by default)
	 * @example
	 * // Config types for the ratelimiting feature for Jova
	 * interface LimitConfig {
	 *		refreshTime: number;
	 *		requestLimitAmount: number | Middleware;
	 *		requestLimitMessage?: string;
	 *		requestLimitCode?: string;
	 *		requestLimitHandler?: Middleware;
	 *		countFailedRequests?: boolean;
	 *		allowOnInternalError?: boolean;
	 *		ratelimitDatabase?: string | RatelimitDatabaseConfig;
	 * }
	 * @type RatelimitConfig
	 */
	ratelimiting?: RatelimitConfig;
	/**
	 * Custom settings from express to be enabled or disabled upon the server starting.
	 * @default undefined
	 * @type JovaSettings
	 */
	settings?: JovaSettings;
	/**
	 * Custom options from express to be set upon the server starting, similar to `settings` but this sets any value unlike `settings` which only allows settings from the `JovaSettingsTable` enum.
	 * @default []
	 * @type Array<JovaCustomOption>
	 */
	customOptions?: Array<JovaCustomOption>;
	/**
	 * Custom headers to be applied to outgoing responses, this is a middleware of optional use but the headers put in here are read-only at runtime until the request is received by a request handler.
	 * @default []
	 * @type Array<JovaHeaderSetting>
	 */
	customHeaders?: Array<JovaHeaderSetting>;
	/**
	 * Enable cors and set up certain values for the cors middleware.
	 * @default undefined
	 * @type CorsOptions
	 */
	cors?: CorsOptions;
}
