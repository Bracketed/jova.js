import fs from 'node:fs';
import path from 'node:path';
import { getProjectRoot } from './Path/root';

export const loadResourceConfigOptions = () => {
	const cwd: string = getProjectRoot() as string; // Error checked beforehand, should always return what we need.
	const files = fs.readdirSync(cwd).map((v) => path.parse(v).base);

	if (fs.existsSync(path.join(cwd, 'package.json'))) {
	}

	console.log(files);
};
