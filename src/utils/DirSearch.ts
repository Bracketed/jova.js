import * as fs from 'fs';
import * as path from 'path';

export function readdirSyncRecursive(directory: string): string[] {
	let fileList: string[] = [];

	const files = fs.readdirSync(directory);

	for (const file of files) {
		const filePath = path.join(directory, file);
		const stat = fs.statSync(filePath);

		if (stat.isDirectory()) {
			fileList = fileList.concat(readdirSyncRecursive(filePath));
		} else {
			if (!(filePath.endsWith('.js') || filePath.endsWith('.ts'))) continue;
			fileList.push(filePath);
		}
	}

	return fileList;
}
