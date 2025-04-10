import cors from 'cors';
import type { ApplicationRequestHandler, CorsOptions } from '../../types/index';
import { BaseResourceLoader } from '../BaseResource';

export class ResourceLoader extends BaseResourceLoader {
	public override async load(corsOpt: CorsOptions | undefined) {
		if (!corsOpt) return;

		this.application?.use(cors(corsOpt) as ApplicationRequestHandler);
		this.logger.info('CORS Middleware config was detected and set up!');
	}
}
