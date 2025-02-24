import * as fs from 'node:fs';
import * as path from 'node:path';

function search(dir: string, regex: RegExp): string[] {
	let results: string[] = [];

	const list = fs.readdirSync(dir);

	list.forEach((file) => {
		const filePath = path.join(dir, file);
		const stat = fs.statSync(filePath);

		if (stat && stat.isDirectory()) results = results.concat(search(filePath, regex));
		else if (regex.test(file)) results.push(filePath);
	});

	return results;
}

export { search };
