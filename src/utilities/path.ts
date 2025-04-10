import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

interface PartialPackage {
	main: string;
	module: string;
}

type Package = Partial<PartialPackage>;

function dirnameWithPath(cwd: string, joinablePath: string): string {
	return dirname(join(cwd, joinablePath));
}

export function resolvePath(path: string | URL): string {
	if (typeof path === 'string') return path;
	return fileURLToPath(path);
}

export function getProjectRoot(): string {
	const cwd = process.cwd();
	let file: string | null = null;

	try {
		if (existsSync(join(cwd, 'package.json'))) file = cwd;
	} catch (error) {
		return file as string;
	}

	return file as string;
}

export function parseRootData(): string {
	const cwd = process.cwd();

	try {
		const packageJSON = JSON.parse(readFileSync(join(cwd, 'package.json'), 'utf8')) as Package;

		if (packageJSON.main) return dirnameWithPath(cwd, packageJSON.main);
		if (packageJSON.module) return dirnameWithPath(cwd, packageJSON.module);

		return cwd;
	} catch (error) {
		return cwd;
	}
}
