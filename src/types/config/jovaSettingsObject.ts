import { JovaSettingsTable } from './jovaCustomSettingEnum.js';

/**
 * The enableable and disableable settings for the Jova.js server.
 *
 * @export
 * @interface JovaSettings
 * @typedef {JovaSettings}
 */
export interface JovaSettings {
	/**
	 * Settings to enable.
	 *
	 * Allows boolean-based settings only.
	 *
	 * @type {?Array<JovaSettingsTable>}
	 */
	enabled?: Array<JovaSettingsTable>;
	/**
	 * Settings to disable.
	 *
	 * Allows boolean-based settings only.
	 *
	 * @type {?Array<JovaSettingsTable>}
	 */
	disabled?: Array<JovaSettingsTable>;
}
