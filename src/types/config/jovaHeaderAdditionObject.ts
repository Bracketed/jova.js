/**
 * Headings to be added to any request made into the Jova.js server.
 *
 * @export
 * @interface JovaHeaderSetting
 * @typedef {JovaHeaderSetting}
 */
export interface JovaHeaderSetting {
	/**
	 * The name of the header.
	 *
	 * @type {string}
	 */
	header: string;
	/**
	 * The value of the header.
	 *
	 * @type {*}
	 */
	value: any;
}
