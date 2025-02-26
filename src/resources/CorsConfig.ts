import type { Express } from '@bracketed/express';
import { Logger } from '@bracketed/logger';
import cors from '../middlewares/CORS';
import type { CorsOptions } from '../types/index';

export const loadApplicationCorsConfiguration = (
	application: Express,
	logger: Logger,
	corsOpt: CorsOptions | undefined
) => {
	if (!cors) return;

	application.use(cors(corsOpt));
	logger.info('ApplicationRegistry: CORS Middleware config was detected and set up!');
};
