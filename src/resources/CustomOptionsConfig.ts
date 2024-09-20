import { Express } from '@bracketed/express';
import { Logger } from '@bracketed/logger';
import { JovaCustomOption } from '../types/index.js';

export const loadApplicationCustomConfiguration = (
	application: Express,
	logger: Logger,
	config: Array<JovaCustomOption> | undefined
) => {
	if (!config) return;

	config.forEach((c) => {
		application.set(c.name, c.value);
		logger.info(`ApplicationCustomSettings: Updated setting "${c.name}" to contain value "${c.value}".`);
	});
	logger.info('ApplicationCustomSettings: Custom config was detected and set up!');
};
