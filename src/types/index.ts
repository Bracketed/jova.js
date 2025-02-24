import type { CookieOptions, Errback, NextFunction, Request, Response } from '@bracketed/express';
import type { RedisOptions as IORedisOptions } from 'ioredis';
import { Registry } from '../Registry';
import type { RateLimitExceededEventHandler, ValueDeterminingMiddleware } from '../utilities/limiter/index';
import { RangeParser } from '../utilities/range';

export * from './config/jovaCustomOptions';
export * from './config/jovaCustomSettingEnum';
export * from './config/jovaHeaderAdditionObject';
export * from './config/jovaPathOptions';
export * from './config/jovaServerOptionsObject';
export * from './config/jovaSettingsObject';
export * from './config/rateLimitDatabaseOptionsObject';
export * from './config/rateLimitOptionsObject';

export * from './http/Charsets';
export * from './http/ContentTypes';
export * from './http/Encoders';
export * from './http/Languages';
export * from './http/RequestMethods';
export * from './http/ResponseCodes';

export * from './express/DownloadOptions';
export * from './express/FileOptions';
export * from './express/SendOptions';

export * from './registry/Routes/AppRouteType';
export * from './registry/Routes/BaseRouteType';
export * from './registry/Routes/RouteHandlerType';

export * from './registry/Middlewares/AppMiddlewareType';
export * from './registry/Middlewares/BaseMiddlewareType';
export * from './registry/Middlewares/MiddlewareHandlerType';
export * from './registry/Middlewares/MiddlewareOptions';

export * from './registry/Events/AppEventType';
export * from './registry/Events/BaseEventType';
export * from './registry/Events/EventHandlerType';
export * from './registry/Events/EventListenerOptions';

export * from './jova/Events';

export * from './cors/CustomOrigin';
export * from './cors/Options';
export * from './cors/OptionsDelegate';
export * from './cors/Request';
export * from './cors/StaticOrigin';

export { RangeParser };
export type {
	NextFunction as ApplicationNextFunction,
	Registry as ApplicationRegistry,
	Request as ApplicationRequest,
	Response as ApplicationResponse,
	CookieOptions,
	Errback as ErrorCallback,
	IORedisOptions,
	RateLimitExceededEventHandler,
	ValueDeterminingMiddleware,
};
