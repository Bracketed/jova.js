import { Express } from 'express';
import { JovaCustomOption } from '../types/config/jovaCustomOptions.js';

export const loadApplicationCustomConfiguration = (
	application: Express,
	config: Array<JovaCustomOption> | undefined
) => {
	if (!config) return;

	config.forEach((c) => application.set(c.name, c.value));
};
