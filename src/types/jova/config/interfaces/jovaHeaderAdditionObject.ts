/**
 * @name JovaHeaderSetting
 * @description Headings to be added to any request made into the Jova.js server.
 *
 * @module Types
 * @interface JovaHeaderSetting
 */
export interface JovaHeaderSetting {
	/**
	 * @name header
	 * @description The name of the header.
	 *
	 * @type string
	 */
	header: string;
	/**
	 * @name value
	 * @description The value of the header.
	 *
	 * @type any
	 */
	value: any;
}
