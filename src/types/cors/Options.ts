import { CustomOrigin } from './CustomOrigin.js';
import { StaticOrigin } from './StaticOrigin.js';

export interface CorsOptions {
	/**
	 * @default '*''
	 */
	origin?: StaticOrigin | CustomOrigin | undefined;
	/**
	 * @default 'GET,HEAD,PUT,PATCH,POST,DELETE'
	 */
	methods?: string | string[] | undefined;
	allowedHeaders?: string | string[] | undefined;
	exposedHeaders?: string | string[] | undefined;
	credentials?: boolean | undefined;
	maxAge?: number | undefined;
	/**
	 * @default false
	 */
	preflightContinue?: boolean | undefined;
	/**
	 * @default 204
	 */
	optionsSuccessStatus?: number | undefined;
}
