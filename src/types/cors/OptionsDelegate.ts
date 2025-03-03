import type { CorsOptions } from './Options';
import type { CorsRequest } from './Request';

/**
 * @name CorsOptionsDelegate
 * @description A function type for dynamically configuring CORS (Cross-Origin Resource Sharing) options based on the incoming request.
 * This allows custom logic to determine CORS settings, such as origin or methods, on a per-request basis.
 *
 * @property request
 * @property callback
 *
 * @module Types
 * @type CorsOptionsDelegate
 */
export type CorsOptionsDelegate<T extends CorsRequest = CorsRequest> = (
	request: T,
	callback: (err: Error | null, options?: CorsOptions) => void
) => void;
