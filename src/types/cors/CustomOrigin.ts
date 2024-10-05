import { StaticOrigin } from './StaticOrigin.js';

export type CustomOrigin = (
	requestOrigin: string | undefined,
	callback: (err: Error | null, origin?: StaticOrigin) => void
) => void;
