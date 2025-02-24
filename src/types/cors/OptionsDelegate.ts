import type { CorsOptions } from './Options';
import type { CorsRequest } from './Request';

export type CorsOptionsDelegate<T extends CorsRequest = CorsRequest> = (
	req: T,
	callback: (err: Error | null, options?: CorsOptions) => void
) => void;
