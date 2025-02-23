/*!
 * vary
 * Copyright(c) 2014-2017 Douglas Christopher Wilson
 * MIT Licensed
 */

// Typescript-ified vary by Eden Kneale (2025)

import { parse } from './parse.js';

const FIELD_NAME_REGEXP: RegExp = /^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;

function append(header: string, field: string | string[]): string {
	if (typeof header !== 'string') throw new TypeError('header argument is required');

	if (!field) throw new TypeError('field argument is required');

	// get fields array
	var fields = !Array.isArray(field) ? parse(String(field)) : field;

	// assert on invalid field names
	for (var j = 0; j < fields.length; j++)
		if (!FIELD_NAME_REGEXP.test(fields[j])) throw new TypeError('field argument contains an invalid header name');

	// existing, unspecified vary
	if (header === '*') return header;

	// enumerate current values
	var val = header;
	var vals = parse(header.toLowerCase());

	// unspecified vary
	if (fields.indexOf('*') !== -1 || vals.indexOf('*') !== -1) return '*';

	for (var i = 0; i < fields.length; i++) {
		var fld = fields[i].toLowerCase();

		// append value (case-preserving)
		if (vals.indexOf(fld) === -1) {
			vals.push(fld);

			val = val ? val + ', ' + fields[i] : fields[i];
		}
	}

	return val;
}

export { append };
