import { JovaSettingsTable } from '../../../index';

/**
 * @name JovaSettings
 * @description The boolean-based settings for the Jova.js server.
 *
 * @module Types
 * @interface JovaSettings
 */
export interface JovaSettings {
	/**
	 * @name enabled
	 * @description
	 * Settings to enable.
	 *
	 * Allows boolean-based settings only.
	 *
	 * @type Array<JovaSettingsTable>
	 */
	enabled?: Array<JovaSettingsTable>;
	/**
	 * @name disabled
	 * @description
	 * Settings to disable.
	 *
	 * Allows boolean-based settings only.
	 *
	 * @type Array<JovaSettingsTable>
	 */
	disabled?: Array<JovaSettingsTable>;
}
