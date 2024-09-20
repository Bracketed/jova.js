import { JovaSettingsTable } from '../../types/index.js';

/**
 * The enableable and disableable settings for the Jova.js server.
 *
 
 * @interface JovaSettings
 */
export interface JovaSettings {
	/**
	 * Settings to enable.
	 *
	 * Allows boolean-based settings only.
	 *
	 * @type Array<JovaSettingsTable>
	 */
	enabled?: Array<JovaSettingsTable>;
	/**
	 * Settings to disable.
	 *
	 * Allows boolean-based settings only.
	 *
	 * @type Array<JovaSettingsTable>
	 */
	disabled?: Array<JovaSettingsTable>;
}
