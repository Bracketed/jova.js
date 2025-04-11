import type serveStatic from 'serve-static';

import type { Options } from 'express-rate-limit';
import type {
	ApplicationResponse,
	CorsOptions,
	JovaCustomOption,
	JovaHeaderSetting,
	JovaPathSettings,
	JovaSettings,
	LoggerOptions,
	ApplicationRequestHandler as RequestHandler,
} from '../../../index';

// this drove me insane
/**
 * @name ServeStaticConfig
 * @description Options for serve static.
 * @private
 * @module Types
 */
export type ServeStaticConfig = serveStatic.ServeStaticOptions<ApplicationResponse>;

/**
 * @name JovaServerOptions
 * @description Jova Server options.
 *
 * @module Types
 * @interface JovaServerOptions
 */
export interface JovaServerOptions {
	/**
	 * @name paths
	 * @description Deploy example middlewares and routes when running the Jova.js Server.
	 *
	 * @type JovaPathSettings
	 */
	paths?: JovaPathSettings;
	/**
	 * @name basePath
	 * @description An optional base path for all of your routes to begin at.
	 *
	 * @example "/api"
	 * @type string
	 */
	basePath?: string;
	/**
	 * @name middlewares
	 * @description
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
	middlewares?: Array<RequestHandler>;
	/**
	 * @name port
	 * @description The port for the Jova Server to run on.
	 * @default 3000
	 * @type string | number
	 */
	port?: string | number;
	/**
	 * @name ratelimiting
	 * @description The ratelimit config for a Jova Server Instance.
	 * @default undefined // (Disabled by default)
	 * @type Options
	 */
	ratelimiting?: Partial<Options>;
	/**
	 * @name settings
	 * @description Custom settings from express to be enabled or disabled upon the server starting.
	 * @default undefined
	 * @type JovaSettings
	 */
	settings?: JovaSettings;
	/**
	 * @name customOptions
	 * @description Custom options from express to be set upon the server starting, similar to `settings` but this sets any value unlike `settings` which only allows settings from the `JovaSettingsOptions` enum.
	 * @default []
	 * @type Array<JovaCustomOption>
	 */
	customOptions?: Array<JovaCustomOption>;
	/**
	 * @name customHeaders
	 * @description Custom headers to be applied to outgoing responses, this is a middleware of optional use but the headers put in here are read-only at runtime until the request is received by a request handler.
	 * @default []
	 * @type Array<JovaHeaderSetting>
	 */
	customHeaders?: Array<JovaHeaderSetting>;
	/**
	 * @name cors
	 * @description Enable cors and set up certain values for the cors middleware.
	 * @default undefined
	 * @type CorsOptions
	 */
	cors?: CorsOptions;
	/**
	 * @name logger
	 * @description Options for the logger output of Jova.js. Utilise the package `@bracketed/logger` for an understanding on how the configuration works.
	 * @default {}
	 * @type LoggerOptions
	 */
	logger?: LoggerOptions;
	/**
	 * @name customrc
	 * @description Define a custom resource config file for the Jova config to be loaded from.
	 * @default undefined
	 * @type string
	 */
	customrc?: string;
	/**
	 * @name static
	 * @description Configuration options for express.static. Static serving is automatically started when the `static` folder is found.
	 * @default undefined
	 */
	static?: {
		/**
		 * @name dir
		 * @description The directory for hosting static files, defaults to the same working directory that `routes`, `events` and `middlewares` are looked for under the folder name of `static`.
		 * @default undefined
		 * @type string
		 */
		dir: string;
		/**
		 * @name options
		 * @description Options for serve-static.
		 * @default undefined
		 * @type ServeStaticConfig
		 */
		options?: ServeStaticConfig;
	};
}
