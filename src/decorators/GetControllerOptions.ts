import 'reflect-metadata';
import { Handlers } from '../handlers/index';

export function getHandlerOptions(target: any): Handlers.Options {
	const options: Handlers.Options = {
		type: Handlers.Type.AUTO,
		enabled: true,
	};

	const decoratedOptions: Handlers.Options = Reflect.getMetadata('handler:options', target);

	//console.log(decoratedOptions);

	if (decoratedOptions.enabled === false) options.enabled = false;
	if (decoratedOptions.type !== undefined || decoratedOptions.type !== Handlers.Type.AUTO)
		options.type = decoratedOptions.type;

	return options;
}
