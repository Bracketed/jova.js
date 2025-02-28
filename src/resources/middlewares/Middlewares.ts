import type { RequestHandler } from '@bracketed/express';
import type { MiddlewareHandler } from '../../types/index';
import { BaseResourceLoader } from '../BaseResource';

export class ResourceLoader extends BaseResourceLoader {
	public override async load(middlewares: Array<MiddlewareHandler | RequestHandler> | undefined) {
		if (!middlewares) return;

		middlewares.forEach((m) => {
			this.application?.use(m);
			this.logger.info(`Registered Instance-set middleware, "${m.name}" - Runs on all Routes: true`);
		});
	}
}
