/**
 * Custom express options to set when the Jova.js server starts.
 *
 
 * @interface JovaCustomOption
 */
export interface JovaCustomOption {
	/**
	 * The name of the setting.
	 *
	 * @type string
	 */
	name: string;
	/**
	 * The value to set it to.
	 *
	 * @type any
	 */
	value: any;
}
