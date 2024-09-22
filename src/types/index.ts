import { CookieOptions, Errback, NextFunction, Request, Response } from '@bracketed/express';
import { CorsOptions } from 'cors';
import { RateLimitExceededEventHandler, ValueDeterminingMiddleware } from 'express-rate-limit';
import { RedisOptions as IORedisOptions } from 'ioredis';
import RangeParser from 'range-parser';
import { Registry } from '../registry/Registry.js';

export * from './config/jovaCustomOptions.js';
export * from './config/jovaCustomSettingEnum.js';
export * from './config/jovaHeaderAdditionObject.js';
export * from './config/jovaPathOptions.js';
export * from './config/jovaServerOptionsObject.js';
export * from './config/jovaSettingsObject.js';
export * from './config/rateLimitDatabaseOptionsObject.js';
export * from './config/rateLimitOptionsObject.js';

export * from './http/Charsets.js';
export * from './http/ContentTypes.js';
export * from './http/Encoders.js';
export * from './http/Languages.js';
export * from './http/RequestMethods.js';
export * from './http/ResponseCodes.js';

export * from './express/DownloadOptions.js';
export * from './express/FileOptions.js';
export * from './express/SendOptions.js';

export * from '../registry/types/Routes/AppRouteType.js';
export * from '../registry/types/Routes/RouteHandlerType.js';

export * from '../registry/types/Events/BaseEventType.js';
export * from '../registry/types/Middlewares/BaseMiddlewareType.js';
export * from '../registry/types/Routes/BaseRouteType.js';

export * from '../registry/types/Middlewares/AppMiddlewareType.js';
export * from '../registry/types/Middlewares/MiddlewareHandlerType.js';

export * from '../registry/types/Events/AppEventType.js';
export * from '../registry/types/Events/EventHandlerType.js';

export * from './JovaEvents.js';

export {
	NextFunction as ApplicationNextFunction,
	Registry as ApplicationRegistry,
	Request as ApplicationRequest,
	Response as ApplicationResponse,
	CookieOptions,
	CorsOptions,
	Errback as ErrorCallback,
	IORedisOptions,
	RangeParser,
	RateLimitExceededEventHandler,
	ValueDeterminingMiddleware,
};
