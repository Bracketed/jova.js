import type { JovaModuleRCOptions } from '../types/index';

/**
 * @name defineConfig
 * The Jova Config Definer, to be used to configure the Jova Server or to be used as a default export in the Jova Resource Config.
 *
 * @public
 * @param config JovaModuleRCOptions
 * @function defineConfig
 * @returns JovaModuleRCOptions
 * @module Core
 */
const defineConfig = (config: JovaModuleRCOptions) => () => config;

export {
	defineConfig as config,
	defineConfig as configure,
	defineConfig,
	defineConfig as defineJovaConfig,
	defineConfig as defineResourceConfig,
	defineConfig as setJovaConfig,
	defineConfig as setupJovaConfig,
};
