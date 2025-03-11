import cors from '../../middlewares/CORS';
import type { CorsOptions } from '../../types/index';
import { BaseResourceLoader } from '../BaseResource';

export class ResourceLoader extends BaseResourceLoader {
	public override async load(corsOpt: CorsOptions | undefined) {
		if (!corsOpt) return;
		if (!cors) return;

		this.application?.use(cors(corsOpt));
		this.logger.info('CORS Middleware config was detected and set up!');
	}
}
