import cors, { CorsOptions } from 'cors';
import { Express } from 'express';

export const loadApplicationCorsConfiguration = (application: Express, corsOpt: CorsOptions | undefined) => {
	if (!cors) return;

	application.use(cors(corsOpt));
};
