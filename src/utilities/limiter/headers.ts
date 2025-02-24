import { Buffer } from 'node:buffer';
import { createHash } from 'node:crypto';
import type { ApplicationResponse as Response } from '../../types/index';
import type { RateLimitInfo } from './types';

export const SUPPORTED_DRAFT_VERSIONS = ['draft-6', 'draft-7', 'draft-8'];

const getResetSeconds = (resetTime?: Date, windowMs?: number): number | undefined => {
	let resetSeconds: number | undefined = undefined; // eslint-disable-line no-undef-init
	if (resetTime) {
		const deltaSeconds = Math.ceil((resetTime.getTime() - Date.now()) / 1000);
		resetSeconds = Math.max(0, deltaSeconds);
	} else if (windowMs)
		// This isn't really correct, but the field is required by the spec in `draft-7`,
		// so this is the best we can do. The validator should have already logged a
		// warning by this point.
		resetSeconds = Math.ceil(windowMs / 1000);

	return resetSeconds;
};

const getPartitionKey = (key: string): string => {
	const hash = createHash('sha256');
	hash.update(key);

	const partitionKey = hash.digest('hex').slice(0, 12);
	return Buffer.from(partitionKey).toString('base64');
};

export const setLegacyHeaders = (response: Response, info: RateLimitInfo): void => {
	if (response.headersSent) return;

	response.setHeader('X-RateLimit-Limit', info.limit.toString());
	response.setHeader('X-RateLimit-Remaining', info.remaining.toString());

	// If we have a resetTime, also provide the current date to help avoid
	// issues with incorrect clocks.
	if (info.resetTime instanceof Date) {
		response.setHeader('Date', new Date().toUTCString());
		response.setHeader('X-RateLimit-Reset', Math.ceil(info.resetTime.getTime() / 1000).toString());
	}
};

export const setDraft6Headers = (response: Response, info: RateLimitInfo, windowMs: number): void => {
	if (response.headersSent) return;

	const windowSeconds = Math.ceil(windowMs / 1000);
	const resetSeconds = getResetSeconds(info.resetTime);

	response.setHeader('RateLimit-Policy', `${info.limit};w=${windowSeconds}`);
	response.setHeader('RateLimit-Limit', info.limit.toString());
	response.setHeader('RateLimit-Remaining', info.remaining.toString());

	// Set this header only if the store returns a `resetTime`.
	if (resetSeconds) response.setHeader('RateLimit-Reset', resetSeconds.toString());
};

export const setDraft7Headers = (response: Response, info: RateLimitInfo, windowMs: number): void => {
	if (response.headersSent) return;

	const windowSeconds = Math.ceil(windowMs / 1000);
	const resetSeconds = getResetSeconds(info.resetTime, windowMs);

	response.setHeader('RateLimit-Policy', `${info.limit};w=${windowSeconds}`);
	response.setHeader('RateLimit', `limit=${info.limit}, remaining=${info.remaining}, reset=${resetSeconds!}`);
};

export const setDraft8Headers = (
	response: Response,
	info: RateLimitInfo,
	windowMs: number,
	name: string,
	key: string
): void => {
	if (response.headersSent) return;

	const windowSeconds = Math.ceil(windowMs / 1000);
	const resetSeconds = getResetSeconds(info.resetTime, windowMs);
	const partitionKey = getPartitionKey(key);

	const policy = `q=${info.limit}; w=${windowSeconds}; pk=:${partitionKey}:`;
	const header = `r=${info.remaining}; t=${resetSeconds!}`;

	response.append('RateLimit-Policy', `"${name}"; ${policy}`);
	response.append('RateLimit', `"${name}"; ${header}`);
};

export const setRetryAfterHeader = (response: Response, info: RateLimitInfo, windowMs: number): void => {
	if (response.headersSent) return;

	const resetSeconds = getResetSeconds(info.resetTime, windowMs);
	response.setHeader('Retry-After', resetSeconds!.toString());
};

