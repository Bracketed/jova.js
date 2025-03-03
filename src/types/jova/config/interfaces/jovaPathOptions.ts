/**
 * @name JovaPathSettings
 * @description Custom paths for searching when the server runs.
 *
 * @module Types
 * @interface JovaPathSettings
 */
export interface JovaPathSettings {
	/**
	 * @name routes
	 * @description Folder where your routes are contained.
	 *
	 * @type string
	 * @default "routes"
	 */
	routes?: string;
	/**
	 * @name middlewares
	 * @description Folder where your middlewares are contained.
	 *
	 * @type string
	 * @default "middlewares"
	 */
	middlewares?: string;
	/**
	 * @name events
	 * @description Folder where your event listeners are contained.
	 *
	 * @type string
	 * @default "events"
	 */
	events?: string;
}

/**
 * @name JovaPathSettings$1
 * @description
 * Custom paths for searching when the server runs.
 * - Has all properties marked as required.
 *
 * @module Types
 * @interface JovaPathSettings$1
 */
export interface JovaPathSettings$1 {
	/**
	 * @name routes
	 * @description Folder where your routes are contained.
	 *
	 * @type string
	 * @default "routes"
	 */
	routes: string;
	/**
	 * @name middlewares
	 * @description Folder where your middlewares are contained.
	 *
	 * @type string
	 * @default "middlewares"
	 */
	middlewares: string;
	/**
	 * @name events
	 * @description Folder where your event listeners are contained.
	 *
	 * @type string
	 * @default "events"
	 */
	events: string;
}
