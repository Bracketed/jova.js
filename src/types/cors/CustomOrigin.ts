import type { StaticOrigin } from './StaticOrigin';

/**
 * @name CustomOrigin
 * @description
 * Options for the CORS (Cross-Origin Resource Sharing) middleware, control the custom origin policy with the `requestOrigin` field and `callback` props.
 *
 * @property requestOrigin
 * @property callback
 *
 * @module Types
 * @type CustomOrigin
 */
export type CustomOrigin = (
	requestOrigin: string | undefined,
	callback: (err: Error | null, origin?: StaticOrigin) => void
) => void;
