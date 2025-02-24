/*!
 * vary
 * Copyright(c) 2014-2017 Douglas Christopher Wilson
 * MIT Licensed
 */

// Typescript-ified vary by Eden Kneale (2025)

import { ServerResponse } from 'node:http';
import { append } from './append';

function vary(res: ServerResponse, field: string | string[]): void {
	if (!res || !res.getHeader || !res.setHeader) throw new TypeError('res argument is required');

	// get existing header
	var val = res.getHeader('Vary') || '';
	const header = Array.isArray(val) ? val.join(', ') : String(val);

	// set new header
	if ((val = append(header, field))) res.setHeader('Vary', val);
}

export { vary };
