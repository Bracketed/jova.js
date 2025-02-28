import type { JovaCustomOption } from '../../types/index';
import { BaseResourceLoader } from '../BaseResource';

export class ResourceLoader extends BaseResourceLoader {
	public override async load(config: Array<JovaCustomOption> | undefined) {
		if (!config) return;

		config.forEach((c) => {
			this.application?.set(c.name, c.value);
			this.logger.info(`Updated setting "${c.name}" to contain value "${c.value}".`);
		});
		this.logger.info('Custom config was detected and set up!');
	}
}
