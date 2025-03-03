import type { SendOptions } from '../../types/index';

/**
 * @name DownloadOptions
 * @description Download options for express extensions.
 *
 * @property headers
 *
 * @module Types
 * @interface DownloadOptions
 * @extends SendOptions
 */
export interface DownloadOptions extends SendOptions {
	/** Object containing HTTP headers to serve with the file. The header `Content-Disposition` will be overridden by the filename argument. */
	headers?: Record<string, unknown>;
}
