import type { RequestUtility } from '../../shared/utilities/RequestUtilities';
import type { ResponseUtility } from '../../shared/utilities/ResponseUtilities';

import 'express';

declare global {
	namespace Express {
		interface Response {
			/**
			 * A utility for managing responses.
			 *
			 * @readonly
			 */
			utilities: ResponseUtility;
		}

		interface Request {
			/**
			 * A utility for managing responses.
			 *
			 * @readonly
			 */
			utilities: RequestUtility;
		}
	}
}
export type {
	Errback as ApplicationErrorCallback,
	NextFunction as ApplicationNextFunction,
	PathParams as ApplicationPathParameters,
	Request as ApplicationRequest,
	RequestHandler as ApplicationRequestHandler,
	Response as ApplicationResponse,
	CookieOptions,
} from 'express-serve-static-core';
