/*!
 * vary
 * Copyright(c) 2014-2017 Douglas Christopher Wilson
 * MIT Licensed
 */

// Typescript-ified vary by Eden Kneale (2025)

function parse(header: string): string[] {
	const list: Array<string> = [];
	let end: number = 0;
	let start: number = 0;

	// gather tokens
	for (var i = 0, len = header.length; i < len; i++) {
		switch (header.charCodeAt(i)) {
			case 0x20:
				if (start === end) start = end = i + 1;
				break;
			case 0x2c:
				list.push(header.substring(start, end));
				start = end = i + 1;
				break;
			default:
				end = i + 1;
				break;
		}
	}

	list.push(header.substring(start, end)); // final token
	return list;
}

export { parse };
