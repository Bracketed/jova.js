import { Express } from 'express';
import { JovaSettings } from '../types/config/jovaSettingsObject.js';

export const loadApplicationSettingsConfiguration = (application: Express, settings: JovaSettings | undefined) => {
	if (!settings) return;

	if (settings.disabled) settings.disabled.forEach((d) => application.disable(d));
	if (settings.enabled) settings.enabled.forEach((e) => application.enable(e));
};
