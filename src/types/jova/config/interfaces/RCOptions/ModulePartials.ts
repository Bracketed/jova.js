import type { JovaServerOptions } from '../jovaServerOptionsObject';

/**
 * @name JovaModuleRCOptions
 * @description Jova Server options for js or ts based resource configs.
 *
 * @module Types
 * @interface JovaModuleRCOptions
 */
export type JovaModuleRCOptions = Omit<JovaServerOptions, 'customrc' | 'logger'>;
