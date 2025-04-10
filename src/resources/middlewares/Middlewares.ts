import type { ApplicationRequestHandler } from '../../types/index';
import { BaseResourceLoader } from '../BaseResource';

export class ResourceLoader extends BaseResourceLoader {
	public override async load(middlewares: Array<ApplicationRequestHandler> | undefined) {
		if (!middlewares) return;

		middlewares.forEach((m) => {
			this.application?.use(m);
			this.logger.info(`Registered Instance-set middleware, "${m.name}" - Runs on all Routes: true`);
		});
	}
}
