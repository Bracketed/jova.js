import type { Stopwatch } from '@sapphire/stopwatch';
import type { ParsedPath } from 'node:path';
import type { HandlerController, HandlerOptions } from '../../../decorators/index';

export interface RegisterFunctionContext {
	name: string;
	import: HandlerController | undefined;
	clock: Stopwatch;
	decorators: HandlerOptions;
	url: URL;
	data: ParsedPath;
	path: string;
}
