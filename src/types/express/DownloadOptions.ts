import type { SendOptions } from '../../types/index';

export interface DownloadOptions extends SendOptions {
	/** Object containing HTTP headers to serve with the file. The header `Content-Disposition` will be overridden by the filename argument. */
	headers?: Record<string, unknown>;
}
