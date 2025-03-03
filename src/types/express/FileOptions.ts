import type { SendOptions } from '../../types/index';

/**
 * @name SendFileOptions
 * @description File options for express serving extensions.
 *
 * @property headers
 *
 * @module Types
 * @interface SendFileOptions
 * @extends SendOptions
 */
export interface SendFileOptions extends SendOptions {
	/** Object containing HTTP headers to serve with the file. */
	headers?: Record<string, unknown>;
}
