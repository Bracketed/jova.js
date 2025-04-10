import { Logger } from '@bracketed/logger';
import type {
	EventController,
	LoggerOptions,
	MiddlewareController,
	RegisterFunctionContext,
	RouteController,
} from '../types/index';

interface ApplicationStats {
	message: string;
}

export class HandlerFunction {
	protected readonly logger: Logger;

	constructor(logger: LoggerOptions) {
		this.logger = new Logger({ ...logger, prefix: 'ApplicationRegistry' });

		this.run = this.run.bind(this);
	}

	public async run(
		_Module: RouteController | MiddlewareController | EventController,
		_Context: RegisterFunctionContext
	): Promise<ApplicationStats | undefined> {
		return undefined;
	}
}
