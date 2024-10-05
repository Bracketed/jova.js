import { IncomingHttpHeaders } from 'node:http';

export interface CorsRequest {
	method?: string | undefined;
	headers: IncomingHttpHeaders;
}
