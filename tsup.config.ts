import { esbuildPluginFilePathExtensions } from 'esbuild-plugin-file-path-extensions';
import { esbuildPluginVersionInjector } from 'esbuild-plugin-version-injector';
import { defineConfig, type Options } from 'tsup';

const baseOptions: Options = {
	clean: true,
	entry: ['src/**/*.ts'],
	dts: true,
	minify: false,
	skipNodeModulesBundle: true,
	sourcemap: true,
	target: 'es2021',
	tsconfig: 'tsconfig.json',
	keepNames: true,
	esbuildPlugins: [esbuildPluginVersionInjector(), esbuildPluginFilePathExtensions()],
	treeshake: true,
};

export default [
	defineConfig({
		...baseOptions,
		outDir: 'lib/cjs',
		format: 'cjs',
		outExtension: () => ({ js: '.cjs' }),
	}),
	defineConfig({
		...baseOptions,
		outDir: 'lib/esm',
		format: 'esm',
	}),
];

