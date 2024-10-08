/**
 * Custom paths for searching when the server runs.
 *
 
 * @interface JovaPathSettings
 */
export interface JovaPathSettings {
	/**
	 * Folder where your routes are contained.
	 *
	 * @type string
	 * @default "routes"
	 */
	routes?: string;
	/**
	 * Folder where your middlewares are contained.
	 *
	 * @type string
	 * @default "middlewares"
	 */
	middlewares?: string;
	/**
	 * Folder where your event listeners are contained.
	 *
	 * @type string
	 * @default "events"
	 */
	events?: string;
}
