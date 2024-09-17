/**
 * Custom express options to set when the Jova.js server starts.
 *
 
 * @interface JovaCustomOption
 * @typedef {JovaCustomOption}
 */
export interface JovaCustomOption {
	/**
	 * The name of the setting.
	 *
	 * @type {string}
	 */
	name: string;
	/**
	 * The value to set it to.
	 *
	 * @type {*}
	 */
	value: any;
}
