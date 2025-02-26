import 'reflect-metadata';
import { Handlers } from '../utilities/handlers';

function createClassDecorator<TFunction extends (...args: any[]) => void>(fn: TFunction): ClassDecorator {
	return fn;
}
export function ApplyHandlerOptions<T extends Handlers.Options>(options: T): ClassDecorator {
	return createClassDecorator((target) => {
		Reflect.defineMetadata('handler:options', options, target);
	});
}

export function getHandlerOptions(target: any): Handlers.Options | undefined {
	const options: Handlers.Options = {
		type: Handlers.Type.AUTO,
		enabled: true,
	};

	const decoratedOptions: Handlers.Options = Reflect.getMetadata('handler:options', target);

	if (decoratedOptions.enabled === false) options.enabled = false;
	if (decoratedOptions.type !== undefined || decoratedOptions.type !== Handlers.Type.AUTO)
		options.type = decoratedOptions.type;

	return;
}
