import esbuild, { type Loader } from 'esbuild';
import fs from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import vm from 'node:vm';
import YAML from 'yaml';
import { container } from '../shared/Container';
import type { JovaModuleRCOptions, JovaPartialRCOptions, JovaServerOptions } from '../types';
import { getProjectRoot } from './path';

type Type = 'module' | 'yaml' | 'json';

interface Association {
	extension: string;
	type: Type;
}

const extensionAssociations: Array<Association> = [
	{ extension: '.js', type: 'module' },
	{ extension: '.ts', type: 'module' },
	{ extension: '.json', type: 'json' },
	{ extension: '.jsonc', type: 'json' },
	{ extension: '.yml', type: 'yaml' },
	{ extension: '.yaml', type: 'yaml' },
];
const validExtensions: Array<string> = extensionAssociations.map((ext) => ext.extension);
const validStarts: Array<string> = [
	'.jovarc',
	'jovarc',
	'jova.config',
	'.jovaconf',
	'jovaconf',
	'jovacfg',
	'.jovacfg',
	'jova',
	'.jova',
];

const validPartialKeys: Array<keyof JovaPartialRCOptions> = [
	'port',
	'basePath',
	'cors',
	'customHeaders',
	'customOptions',
	'paths',
	'settings',
];
const validKeys: Array<keyof JovaModuleRCOptions> = [
	'port',
	'basePath',
	'cors',
	'customHeaders',
	'customOptions',
	'paths',
	'settings',
	'middlewares',
	'ratelimiting',
];

const extToType = (ext: string): Type => (extensionAssociations.find((e) => e.extension === ext) as Association).type;

export const loadResourceConfigOptions = (customRC: string | undefined): JovaServerOptions => {
	const cwd: string = getProjectRoot();
	const packageJSON = JSON.parse(fs.readFileSync(path.join(cwd, 'package.json'), 'utf8'));
	const files: Array<string> = fs.readdirSync(cwd).map((v) => path.parse(v).base);
	const rcFiles: Array<string> = [];

	validExtensions.forEach((ext) => validStarts.map((start) => start + ext).forEach((f) => rcFiles.push(f)));

	if (customRC)
		if (validExtensions.find((e) => customRC.endsWith(e))) rcFiles.push(customRC);
		else
			container.logger?.warn(
				'Error when loading custom Resource Config, custom RCFILE does not meet the requirements to be considered as one.'
			);

	if (packageJSON['jova']) {
		container.logger?.info('Loading Package-based Resource Config from package.json');

		return Object.fromEntries(
			Object.entries(packageJSON['jova']).filter(([key]) =>
				validPartialKeys.includes(key as keyof JovaPartialRCOptions)
			)
		) satisfies JovaServerOptions;
	}

	const RCFileName = rcFiles.find((rc) => files.find((f) => f === rc));
	if (!RCFileName) return {};

	const RCFilePath = path.resolve(cwd, RCFileName);
	const RCFileInfo = {
		name: RCFileName,
		type: extToType(path.parse(RCFilePath).ext),
		ext: path.parse(RCFilePath).ext.slice(1),
		url: pathToFileURL(RCFilePath),
		path: RCFilePath,
	};

	switch (RCFileInfo.type) {
		case 'json':
			const JSONConfig = JSON.parse(fs.readFileSync(RCFileInfo.path, 'utf8'));
			container.logger?.info('Loading JSON-based Resource Config from', RCFileInfo.name);

			return Object.fromEntries(
				Object.entries(JSONConfig).filter(([key]) =>
					validPartialKeys.includes(key as keyof JovaPartialRCOptions)
				)
			) satisfies JovaServerOptions;
		case 'module':
			const filePath = fileURLToPath(RCFileInfo.url);

			// This is all so i don't have to use async T_T
			// but it works, so im not complaining ¯\_(ツ)_/¯

			const { code } = esbuild.transformSync(fs.readFileSync(filePath, 'utf-8'), {
				loader: RCFileInfo.ext as Loader,
				format: 'cjs',
				sourcemap: false,
				sourcefile: filePath,
			});

			const sandbox: vm.Context = {
				module: { exports: {} },
				exports: {},
				require: createRequire(filePath),
				process: process,
				console: console,
				__filename: filePath,
				__dirname: path.dirname(filePath),
			};

			vm.createContext(sandbox);
			const script = new vm.Script(code, { filename: filePath });
			sandbox.module = { exports: {} };
			script.runInContext(sandbox);

			const result = sandbox.module.exports.default ?? undefined;
			if (!result) return {};

			container.logger?.info('Loading Module-based Resource Config from', RCFileInfo.name);

			if (typeof result === 'function') {
				const config = result();
				if (typeof config !== 'object') return {} satisfies JovaServerOptions;

				return Object.fromEntries(
					Object.entries(config).filter(([key]) => validKeys.includes(key as keyof JovaModuleRCOptions))
				) satisfies JovaServerOptions;
			} else if (typeof result === 'object' && result !== null)
				return Object.fromEntries(
					Object.entries(result).filter(([key]) => validKeys.includes(key as keyof JovaModuleRCOptions))
				) satisfies JovaServerOptions;

			return {} satisfies JovaServerOptions;
		case 'yaml':
			const YAMLConfig = YAML.parse(fs.readFileSync(RCFileInfo.path, 'utf8'));
			container.logger?.info('Loading YAML-based Resource Config from', RCFileInfo.name);

			return Object.fromEntries(
				Object.entries(YAMLConfig).filter(([key]) =>
					validPartialKeys.includes(key as keyof JovaPartialRCOptions)
				)
			) satisfies JovaServerOptions;

		default:
			return {} satisfies JovaServerOptions;
	}
};
