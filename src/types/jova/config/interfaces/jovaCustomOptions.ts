/**
 * @name JovaCustomOption
 * @description Custom express options to set when the Jova.js server starts.
 *
 * @module Types
 * @interface JovaCustomOption
 */
export interface JovaCustomOption {
	/**
	 * @name name
	 * @description The name of the setting.
	 *
	 * @type string
	 */
	name: string;
	/**
	 * @name value
	 * @description The value to set it to.
	 *
	 * @type any
	 */
	value: any;
}
