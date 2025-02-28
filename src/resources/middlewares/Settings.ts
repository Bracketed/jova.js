import type { JovaSettings } from '../../types/index';
import { BaseResourceLoader } from '../BaseResource';

export class ResourceLoader extends BaseResourceLoader {
	public override async load(settings: JovaSettings | undefined) {
		if (!settings) return;

		if (settings.disabled)
			settings.disabled.forEach((d) => {
				this.application?.disable(d);
				this.logger.info(`Application Setting "${d}" was disabled.`);
			});
		if (settings.enabled)
			settings.enabled.forEach((e) => {
				this.application?.enable(e);
				this.logger.info(`Application Setting "${e}" was enabled.`);
			});

		this.logger.info(`All application settings updated and set to the according values!`);
	}
}
