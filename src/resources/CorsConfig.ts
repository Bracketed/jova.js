import { Logger } from '@bracketed/logger';
import cors from 'cors';
import { Express } from 'express';
import { CorsOptions } from '../types/index.js';

export const loadApplicationCorsConfiguration = (
	application: Express,
	logger: Logger,
	corsOpt: CorsOptions | undefined
) => {
	if (!cors) return;

	application.use(cors(corsOpt));
	logger.info('ApplicationMiddlewareRegistry: CORS config was detected and set up!');
};
