import { RateLimitExceededEventHandler, ValueDeterminingMiddleware } from 'express-rate-limit';
import { RedisOptions } from 'ioredis';
import { HttpStatus } from '../http/HTTPResponseCodes.js';

/**
 * Ratelimit config for the Jova.js server.
 *
 * @export
 * @interface RatelimitConfig
 * @typedef {RatelimitConfig}
 */
export interface RatelimitConfig {
	/**
	 * Time in milliseconds until the Ratelimit bucket refreshes.
	 *
	 * @type {?number}
	 */
	refreshTime?: number;
	/**
	 * The amount of requests that can be made before being Ratelimited.
	 *
	 * @type {?(number | ValueDeterminingMiddleware<number>)}
	 */
	requestLimitAmount?: number | ValueDeterminingMiddleware<number>;
	/**
	 * The message for the server to respond when the rate limit is maxed.
	 *
	 * @type {?string}
	 */
	requestLimitMessage?: string;
	/**
	 * The HTTP response code to respond with when the rate limit is maxed.
	 * @example
	 * // All HTTP Response codes (HttpStatus ENUM)
	 * enum HttpStatus {
	 * 	// 1xx Informational responses
	 * 	Continue = 100,
	 * 	SwitchingProtocols = 101,
	 * 	Processing = 102,
	 * 	EarlyHints = 103,
	 * 
	 * 	// 2xx Success
	 * 	OK = 200,
	 * 	Created = 201,
	 * 	Accepted = 202,
	 * 	NonAuthoritativeInformation = 203,
	 * 	NoContent = 204,
	 * 	ResetContent = 205,
	 * 	PartialContent = 206,
	 * 	MultiStatus = 207,
	 * 	AlreadyReported = 208,
	 * 	IMUsed = 226,
	 * 
	 * 	// 3xx Redirection
	 * 	MultipleChoices = 300,
	 * 	MovedPermanently = 301,
	 * 	Found = 302,
	 * 	SeeOther = 303,
	 * 	NotModified = 304,
	 * 	UseProxy = 305,
	 * 	TemporaryRedirect = 307,
	 * 	PermanentRedirect = 308,
	 * 
	 * 	// 4xx Client errors
	 * 	BadRequest = 400,
	 * 	Unauthorized = 401,
	 * 	PaymentRequired = 402,
	 * 	Forbidden = 403,
	 * 	NotFound = 404,
	 * 	MethodNotAllowed = 405,
	 * 	NotAcceptable = 406,
	 * 	ProxyAuthenticationRequired = 407,
	 * 	RequestTimeout = 408,
	 * 	Conflict = 409,
	 * 	Gone = 410,
	 * 	LengthRequired = 411,
	 * 	PreconditionFailed = 412,
	 * 	PayloadTooLarge = 413,
	 * 	URITooLong = 414,
	 * 	UnsupportedMediaType = 415,
	 * 	RangeNotSatisfiable = 416,
	 * 	ExpectationFailed = 417,
	 * 	ImATeapot = 418,
	 * 	MisdirectedRequest = 421,
	 * 	UnprocessableEntity = 422,
	 * 	Locked = 423,
	 * 	FailedDependency = 424,
	 * 	TooEarly = 425,
	 * 	UpgradeRequired = 426,
	 * 	PreconditionRequired = 428,
	 * 	TooManyRequests = 429,
	 * 	RequestHeaderFieldsTooLarge = 431,
	 * 	UnavailableForLegalReasons = 451,
	 * 
	 * 	// 5xx Server errors
	 * 	InternalServerError = 500,
	 * 	NotImplemented = 501,
	 * 	BadGateway = 502,
	 * 	ServiceUnavailable = 503,
	 * 	GatewayTimeout = 504,
	 * 	HTTPVersionNotSupported = 505,
	 * 	VariantAlsoNegotiates = 506,
	 * 	InsufficientStorage = 507,
	 * 	LoopDetected = 508,
	 * 	NotExtended = 510,
	 * 	NetworkAuthenticationRequired = 511,
	 * }

	 * @type {?HttpStatus}
	 */
	requestLimitCode?: HttpStatus;
	/**
	 * A custom middleware to handle rate limited requests.
	 *
	 * @type {?RateLimitExceededEventHandler }
	 */
	requestLimitHandler?: RateLimitExceededEventHandler;
	/**
	 * Count all failed requests after the ratelimit bucket is full.
	 *
	 * @type {?boolean}
	 */
	countFailedRequests?: boolean;
	/**
	 * Allow requests to be counted into the bucket even if the Jova.js server fails to respond.
	 *
	 * @type {?boolean}
	 */
	allowOnInternalError?: boolean;
	/**
	 * Add an optional Redis server to manage limit buckets.
	 *
	 * Can be a connection string
	 * @example "redis://:authpassword@127.0.0.1:6380/4" // Connect to 127.0.0.1:6380, db 4, using password "authpassword":
	 * @example "redis://username:authpassword@127.0.0.1:6380/4" // Username can also be passed via URI.
	 * @type {?RedisOptions}
	 */
	ratelimitDatabase?: RedisOptions;
}
