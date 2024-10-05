import { CorsOptions } from './Options.js';
import { CorsRequest } from './Request.js';

export type CorsOptionsDelegate<T extends CorsRequest = CorsRequest> = (
	req: T,
	callback: (err: Error | null, options?: CorsOptions) => void
) => void;
