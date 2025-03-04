// https://github.com/sapphiredev/pieces/blob/main/src/lib/internal/RootScan.ts

import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';

type PartialPackageJson = Partial<{
	main: string;
	module: string;
	type: 'commonjs' | 'module';
}>;

export interface RootData {
	root: string;
	type: 'ESM' | 'CommonJS';
}

let data: RootData | null = null;

function dirnameWithPath(cwd: string, joinablePath: string) {
	return dirname(join(cwd, joinablePath));
}

export function getRootData(): RootData {
	return (data ??= parseRootData());
}

export function getProjectRoot(): null | string {
	const cwd = process.cwd();
	let file: string | null = null;

	try {
		if (existsSync(join(cwd, 'package.json'))) file = cwd;
	} catch (error) {
		return file;
	}

	return file;
}

export function parseRootData(): RootData {
	const cwd = process.cwd();
	let file: PartialPackageJson | undefined;

	try {
		file = JSON.parse(readFileSync(join(cwd, 'package.json'), 'utf8')) as PartialPackageJson;
	} catch (error) {
		return { root: cwd, type: 'CommonJS' };
	}

	const { main: packageMain, module: packageModule, type: packageType } = file;

	const lowerCasedType = packageType?.toLowerCase() as PartialPackageJson['type'];

	if (lowerCasedType === 'commonjs') {
		if (packageMain) return { root: dirnameWithPath(cwd, packageMain), type: 'CommonJS' };
		if (packageModule) return { root: dirnameWithPath(cwd, packageModule), type: 'CommonJS' };
		return { root: cwd, type: 'CommonJS' };
	}

	if (lowerCasedType === 'module') {
		if (packageMain) return { root: dirnameWithPath(cwd, packageMain), type: 'ESM' };
		if (packageModule) return { root: dirnameWithPath(cwd, packageModule), type: 'ESM' };
		return { root: cwd, type: 'ESM' };
	}

	if (packageMain) return { root: dirnameWithPath(cwd, packageMain), type: 'CommonJS' };
	if (packageModule) return { root: dirnameWithPath(cwd, packageModule), type: 'ESM' };

	return { root: cwd, type: 'CommonJS' };
}
