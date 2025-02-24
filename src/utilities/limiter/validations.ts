import { isIP } from 'node:net';
import type { ApplicationRequest as Request } from '../../types/index';
import { SUPPORTED_DRAFT_VERSIONS } from './headers';
import type { EnabledValidations, Store } from './types';

class ValidationError extends Error {
	override name: string;
	code: string;
	help: string;

	constructor(code: string, message: string) {
		const url = `https://express-rate-limit.github.io/${code}/`;
		super(`${message} See ${url} for more information.`);

		// `this.constructor.name` is the class name
		this.name = this.constructor.name;
		this.code = code;
		this.help = url;
	}
}

class ChangeWarning extends ValidationError {}

const usedStores = new Set<Store>();
const singleCountKeys = new WeakMap<Request, Map<Store | string, string[]>>();
const validations = {
	enabled: {
		default: true,
	} as { [key: string]: boolean }, // Should be EnabledValidations type, but that's a circular reference

	disable() {
		for (const k of Object.keys(this.enabled)) this.enabled[k] = false;
	},

	ip(ip: string | undefined) {
		if (ip === undefined)
			throw new ValidationError(
				'ERR_ERL_UNDEFINED_IP_ADDRESS',
				`An undefined 'request.ip' was detected. This might indicate a misconfiguration or the connection being destroyed prematurely.`
			);

		if (!isIP(ip))
			throw new ValidationError(
				'ERR_ERL_INVALID_IP_ADDRESS',
				`An invalid 'request.ip' (${ip}) was detected. Consider passing a custom 'keyGenerator' function to the rate limiter.`
			);
	},

	trustProxy(request: Request) {
		if (request.app.get('trust proxy') === true)
			throw new ValidationError(
				'ERR_ERL_PERMISSIVE_TRUST_PROXY',
				`The Express 'trust proxy' setting is true, which allows anyone to trivially bypass IP-based rate limiting.`
			);
	},

	xForwardedForHeader(request: Request) {
		if (request.headers['x-forwarded-for'] && request.app.get('trust proxy') === false)
			throw new ValidationError(
				'ERR_ERL_UNEXPECTED_X_FORWARDED_FOR',
				`The 'X-Forwarded-For' header is set but the Express 'trust proxy' setting is false (default). This could indicate a misconfiguration which would prevent express-rate-limit from accurately identifying users.`
			);
	},

	positiveHits(hits: any) {
		if (typeof hits !== 'number' || hits < 1 || hits !== Math.round(hits))
			throw new ValidationError(
				'ERR_ERL_INVALID_HITS',
				`The totalHits value returned from the store must be a positive integer, got ${hits}`
			);
	},

	unsharedStore(store: Store) {
		if (usedStores.has(store)) {
			const maybeUniquePrefix = store?.localKeys ? '' : ' (with a unique prefix)';
			throw new ValidationError(
				'ERR_ERL_STORE_REUSE',
				`A Store instance must not be shared across multiple rate limiters. Create a new instance of ${store.constructor.name}${maybeUniquePrefix} for each limiter instead.`
			);
		}

		usedStores.add(store);
	},

	singleCount(request: Request, store: Store, key: string) {
		let storeKeys = singleCountKeys.get(request);
		if (!storeKeys) {
			storeKeys = new Map();
			singleCountKeys.set(request, storeKeys);
		}

		const storeKey = store.localKeys ? store : store.constructor.name;
		let keys = storeKeys.get(storeKey);
		if (!keys) {
			keys = [];
			storeKeys.set(storeKey, keys);
		}

		const prefixedKey = `${store.prefix ?? ''}${key}`;

		if (keys.includes(prefixedKey))
			throw new ValidationError(
				'ERR_ERL_DOUBLE_COUNT',
				`The hit count for ${key} was incremented more than once for a single request.`
			);

		keys.push(prefixedKey);
	},

	limit(limit: number) {
		if (limit === 0)
			throw new ChangeWarning(
				'WRN_ERL_MAX_ZERO',
				`Setting limit or max to 0 disables rate limiting in express-rate-limit v6 and older, but will cause all requests to be blocked in v7`
			);
	},

	draftPolliHeaders(draft_polli_ratelimit_headers?: any) {
		if (draft_polli_ratelimit_headers)
			throw new ChangeWarning(
				'WRN_ERL_DEPRECATED_DRAFT_POLLI_HEADERS',
				`The draft_polli_ratelimit_headers configuration option is deprecated and has been removed in express-rate-limit v7, please set standardHeaders: 'draft-6' instead.`
			);
	},

	onLimitReached(onLimitReached?: any) {
		if (onLimitReached)
			throw new ChangeWarning(
				'WRN_ERL_DEPRECATED_ON_LIMIT_REACHED',
				`The onLimitReached configuration option is deprecated and has been removed in express-rate-limit v7.`
			);
	},

	headersDraftVersion(version?: any) {
		if (typeof version !== 'string' || !SUPPORTED_DRAFT_VERSIONS.includes(version)) {
			const versionString = SUPPORTED_DRAFT_VERSIONS.join(', ');
			throw new ValidationError(
				'ERR_ERL_HEADERS_UNSUPPORTED_DRAFT_VERSION',
				`standardHeaders: only the following versions of the IETF draft specification are supported: ${versionString}.`
			);
		}
	},

	headersResetTime(resetTime?: Date) {
		if (!resetTime)
			throw new ValidationError(
				'ERR_ERL_HEADERS_NO_RESET',
				`standardHeaders:  'draft-7' requires a 'resetTime', but the store did not provide one. The 'windowMs' value will be used instead, which may cause clients to wait longer than necessary.`
			);
	},

	validationsConfig() {
		const supportedValidations = Object.keys(this).filter((k) => !['enabled', 'disable'].includes(k));
		supportedValidations.push('default');
		for (const key of Object.keys(this.enabled)) {
			if (!supportedValidations.includes(key))
				throw new ValidationError(
					'ERR_ERL_UNKNOWN_VALIDATION',
					`options.validate.${key} is not recognized. Supported validate options are: ${supportedValidations.join(
						', '
					)}.`
				);
		}
	},

	creationStack(store: Store) {
		const { stack } = new Error(
			'express-rate-limit validation check (set options.validate.creationStack=false to disable)'
		);

		if (stack?.includes('Layer.handle [as handle_request]')) {
			if (!store.localKeys)
				// This means the user is using an external store, which may be safe.
				// Print out an error anyway, to alert them of the possibility that
				// the rate limiter may not work as intended.

				// See the discussion here: https://github.com/express-rate-limit/express-rate-limit/pull/461#discussion_r1626940562.
				throw new ValidationError(
					'ERR_ERL_CREATED_IN_REQUEST_HANDLER',
					'express-rate-limit instance should *usually* be created at app initialization, not when responding to a request.'
				);

			// Otherwise, make sure they know not to do this.
			throw new ValidationError(
				'ERR_ERL_CREATED_IN_REQUEST_HANDLER',
				`express-rate-limit instance should be created at app initialization, not when responding to a request.`
			);
		}
	},
};

export type Validations = typeof validations;

export const getValidations = (_enabled: boolean | EnabledValidations): Validations => {
	let enabled: { [key: string]: boolean };
	if (typeof _enabled === 'boolean') {
		enabled = {
			default: _enabled,
		};
	} else {
		enabled = {
			default: true,
			..._enabled,
		};
	}

	const wrappedValidations = {
		enabled,
	} as Validations;
	// Wrap all validations to handle disabling and thrown errors
	for (const [name, validation] of Object.entries(validations)) {
		if (typeof validation === 'function')
			(wrappedValidations as { [index: string]: any })[name] = (...args: any[]) => {
				if (!(enabled[name] ?? enabled.default)) return;

				try {
					(validation as (...args: any[]) => void).apply(wrappedValidations, args);
				} catch (error: any) {
					if (error instanceof ChangeWarning) console.warn(error);
					else console.error(error);
				}
			};
	}

	return wrappedValidations;
};

