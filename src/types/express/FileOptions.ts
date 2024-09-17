import { SendOptions } from '../../types/index.js';

export interface SendFileOptions extends SendOptions {
	/** Object containing HTTP headers to serve with the file. */
	headers?: Record<string, unknown>;
}
