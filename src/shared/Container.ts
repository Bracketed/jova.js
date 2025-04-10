import type { Logger } from '@bracketed/logger';
import express, { type Express } from 'express';
import type { ApplicationRegistry } from '../types/index';
import { parseRootData } from '../utilities/path';

/**
 * @name Container
 * The Jova container, to be used to contain values, config and other content, this is the type of the exported container object.
 *
 * @example
 * The `container` object can be extended or used like this:
 *
 * ```typescript
 * console.log(container.value); // container.value doesn't exist
 *
 * declare module '@bracketed/jova.js' {
 *     interface Container {
 *         value: string; // defining container.value to allow usage from it
 *     }
 * }
 *
 * console.log(container.value); // container.value now exists, but is undefined
 *
 * container.value = "Hello World!"; // defining container.value
 *
 * console.log(container.value); // "Hello World!"
 * ```
 *
 * @public
 * @interface Container
 * @module Core
 */
export interface Container {
	/**
	 * @name express
	 *
	 * Express content required by basic functions of `jova.js`.
	 *
	 * The Express instance that the `jova.js` server is running off.
	 *
	 * @public
	 * @property
	 */
	express: Express;
	logger?: Logger;
	cwd: string;
	registry?: ApplicationRegistry;
}

/**
 * @name container
 * The Jova container, to be used to contain values, config and other content.
 *
 * @example
 * The `container` object can be extended or used like this:
 *
 * ```typescript
 * console.log(container.value); // container.value doesn't exist
 *
 * declare module '@bracketed/jova.js' {
 *     interface Container {
 *         value: string; // defining container.value to allow usage from it
 *     }
 * }
 *
 * console.log(container.value); // container.value now exists, but is undefined
 *
 * container.value = "Hello World!"; // defining container.value
 *
 * console.log(container.value); // "Hello World!"
 * ```
 *
 * @public
 * @constant
 * @module Core
 */
export const container: Container = {
	express: express(),
	cwd: parseRootData(),
};
