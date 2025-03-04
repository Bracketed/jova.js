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
 * @name JovaRequiredPathSettings
 * @description
 * Custom paths for searching when the server runs.
 * - Has all properties marked as required.
 *
 * Same as `JovaPathSettings`, but all fields are marked as required.
 *
 * @module Types
 * @interface JovaRequiredPathSettings
 */
export interface JovaRequiredPathSettings {
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
