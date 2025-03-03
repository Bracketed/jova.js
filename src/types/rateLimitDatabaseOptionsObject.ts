/**
 * @name RatelimitDatabaseConfig
 * @description Redis configuration for the Jova.js Rate limiter.
 *
 * @module Types
 * @interface RatelimitDatabaseConfig
 */
export interface RatelimitDatabaseConfig {
	/**
	 * @name port
	 * @description The port number for your redis server.
	 * @default 6379
	 * @type number
	 */
	port?: number;
	/**
	 * @name host
	 * @description The host ip or hostname of your redis server.
	 *
	 * @type string
	 */
	host?: string;
	/**
	 * @name username
	 * @description The username to log into your redis server with, optional but can be configured in the settings of your redis server, this requires redis v6+
	 *
	 * @type string
	 */
	username?: string;
	/**
	 * @name password
	 * @description The username to log into your redis server with, optional but can be configured in the settings of your redis server.
	 *
	 * @type string
	 */
	password?: string;
	/**
	 * @name db
	 * @description The redis database to to use for your redis config, default `0`.
	 *
	 * @default 0
	 * @type number
	 */
	db?: number; // Defaults to 0
}
