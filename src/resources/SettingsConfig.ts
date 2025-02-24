import type { Express } from '@bracketed/express';
import { Logger } from '@bracketed/logger';
import type { JovaSettings } from '../types/index';

export const loadApplicationSettingsConfiguration = (
	application: Express,
	logger: Logger,
	settings: JovaSettings | undefined
) => {
	if (!settings) return;

	if (settings.disabled)
		settings.disabled.forEach((d) => {
			application.disable(d);
			logger.info(`ApplicationSettings: Setting "${d}" was disabled.`);
		});
	if (settings.enabled)
		settings.enabled.forEach((e) => {
			application.enable(e);
			logger.info(`ApplicationSettings: Setting "${e}" was enabled.`);
		});

	logger.info(`ApplicationSettings: All settings updated and set to the according values!`);
};
