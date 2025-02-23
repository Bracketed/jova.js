/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject<T>(val: T): T {
	if (val === null || val === undefined) throw new TypeError('Object.assign cannot be called with null or undefined');

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) return false;

		// Detect buggy property enumeration order in older V8 versions.
		// https://bugs.chromium.org/p/v8/issues/detail?id=4118

		const test1: Record<number, string> = Object(new String('abc'));

		test1[5] = 'de';

		if (Object.getOwnPropertyNames(test1)[0] === '5') return false;

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056

		var test2: Record<string, number> = {};

		for (var i = 0; i < 10; i++) test2['_' + String.fromCharCode(i)] = i;

		var order2 = Object.getOwnPropertyNames(test2).map((n) => {
			return test2[n];
		});

		if (order2.join('') !== '0123456789') return false;

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056

		var test3: Record<string, string> = {};

		'abcdefghijklmnopqrst'.split('').forEach((letter) => {
			test3[letter] = letter;
		});

		if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') return false;

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.

		return false;
	}
}

const assign = shouldUseNative()
	? Object.assign
	: function (target: any, ..._sources: any[]): any {
			var from;
			var to = toObject(target);
			var symbols;

			for (var s = 1; s < arguments.length; s++) {
				from = Object(arguments[s]);

				for (var key in from) {
					if (hasOwnProperty.call(from, key)) to[key] = from[key];
				}

				if (getOwnPropertySymbols) {
					symbols = getOwnPropertySymbols(from);

					for (var i = 0; i < symbols.length; i++) {
						if (propIsEnumerable.call(from, symbols[i])) to[symbols[i]] = from[symbols[i]];
					}
				}
			}

			return to;
		};

export { assign };
