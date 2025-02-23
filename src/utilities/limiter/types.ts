import type { NextFunction, RequestHandler } from '@bracketed/express';
import type { ApplicationRequest as Request, ApplicationResponse as Response } from '../../types/index.js';
import type { SUPPORTED_DRAFT_VERSIONS } from './headers.js';
import type { Validations } from './validations.js';

export type IncrementCallback = (error: Error | undefined, totalHits: number, resetTime: Date | undefined) => void;
export type ValueDeterminingMiddleware<T> = (request: Request, response: Response) => T | Promise<T>;

export type RateLimitExceededEventHandler = (
	request: Request,
	response: Response,
	next: NextFunction,
	optionsUsed: Options
) => void;

export type RateLimitReachedEventHandler = (request: Request, response: Response, optionsUsed: Options) => void;

export type ClientRateLimitInfo = {
	totalHits: number;
	resetTime: Date | undefined;
};

export type IncrementResponse = ClientRateLimitInfo;

export type RateLimitRequestHandler = RequestHandler & {
	resetKey: (key: string) => void;
	getKey: (key: string) => Promise<ClientRateLimitInfo | undefined> | ClientRateLimitInfo | undefined;
};

export type LegacyStore = {
	incr: (key: string, callback: IncrementCallback) => void;
	decrement: (key: string) => void;
	resetKey: (key: string) => void;
	resetAll?: () => void;
};

export type Store = {
	init?: (options: Options) => void;
	get?: (key: string) => Promise<ClientRateLimitInfo | undefined> | ClientRateLimitInfo | undefined;
	increment: (key: string) => Promise<IncrementResponse> | IncrementResponse;
	decrement: (key: string) => Promise<void> | void;
	resetKey: (key: string) => Promise<void> | void;
	resetAll?: () => Promise<void> | void;
	shutdown?: () => Promise<void> | void;
	localKeys?: boolean;
	prefix?: string;
};

export type DraftHeadersVersion = (typeof SUPPORTED_DRAFT_VERSIONS)[number];

export type EnabledValidations = {
	[key in keyof Omit<Validations, 'enabled' | 'disable'> | 'default']?: boolean;
};

export type Options = {
	windowMs: number;
	limit: number | ValueDeterminingMiddleware<number>;
	message: any | ValueDeterminingMiddleware<any>;
	statusCode: number;
	legacyHeaders: boolean;
	standardHeaders: boolean | DraftHeadersVersion;
	identifier: string | ValueDeterminingMiddleware<string>;
	requestPropertyName: string;
	skipFailedRequests: boolean;
	skipSuccessfulRequests: boolean;
	keyGenerator: ValueDeterminingMiddleware<string>;
	handler: RateLimitExceededEventHandler;
	skip: ValueDeterminingMiddleware<boolean>;
	requestWasSuccessful: ValueDeterminingMiddleware<boolean>;
	store: Store | LegacyStore;
	validate: boolean | EnabledValidations;
	headers?: boolean;
	max?: number | ValueDeterminingMiddleware<number>;
	passOnStoreError: boolean;
};

export type AugmentedRequest = Request & {
	[key: string]: RateLimitInfo;
};

export type RateLimitInfo = {
	limit: number;
	used: number;
	remaining: number;
	resetTime: Date | undefined;
};

