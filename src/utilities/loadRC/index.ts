import fs from 'node:fs';
import path from 'node:path';
import { getProjectRoot } from '../Path/root';

const rcFiles: Array<string> = [
	`.jovarc.yml`,
	`.jovarc.yaml`,
	`.jovarc.json`,
	`.jovarc.jsonc`,
	`jova.config.ts`,
	`jova.config.js`,
	`.jovarc.env`,
	`.jovarc.local.env`,
];

// WIP.

export const loadResourceConfigOptions = () => {
	const cwd: string = getProjectRoot(); // Error checked beforehand, should always return what we need.
	const files: string[] = fs.readdirSync(cwd).map((v) => path.parse(v).base);

	if (fs.existsSync(path.join(cwd, 'package.json'))) {
		const configuration = JSON.parse(fs.readFileSync(path.join(cwd, 'package.json'), 'utf8'));

		if (configuration['jova']) {
		}
	}

	rcFiles.find((rc) => files.find((f) => f === rc)); // get back to writing the rc configs soon
};
