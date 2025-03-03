import type { IncomingHttpHeaders } from 'node:http';

/**
 * @name CorsRequest
 * @description The CORS request object.
 *
 * @property method
 * @property headers
 *
 * @module Types
 * @interface CorsRequest
 */
export interface CorsRequest {
	method?: string | undefined;
	headers: IncomingHttpHeaders;
}
