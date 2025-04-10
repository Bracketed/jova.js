import * as express from 'express';

/**
 * @module Core
 * @preferred
 * @description Main entry point of Jova.js framework.
 */

export { Router } from 'express';

export * from './handlers/index';
export * from './JovaServer';
export * from './shared/index';

/**
 * @module Core
 * @name Middlewares
 * @constant
 * @description Middlewares storage, contains re-exports from `express`
 */
export const Middlewares = {
	/**
	 * @name json
	 * @constant
	 * @readonly
	 * @description
	 * This is a built-in middleware function in Express. It parses incoming requests with JSON payloads and is based on body-parser.
	 *
	 * Returns middleware that only parses JSON and only looks at requests where the `Content-Type` header matches the `type` option.
	 * This parser accepts any Unicode encoding of the body and supports automatic inflation of `gzip` and `deflate` encodings.
	 *
	 * @see {@link https://expressjs.com/en/5x/api.html#express.json Express Docs: express.json([options])}
	 */
	json: express.json,
	/**
	 * @name static
	 * @constant
	 * @readonly
	 * @description
	 * This is a built-in middleware function in Express. It serves static files and is based on serve-static.
	 *
	 * The `root` argument specifies the root directory from which to serve static assets.
	 * The function determines the file to serve by combining `req.url` with the provided `root` directory.
	 * When a file is not found, instead of sending a 404 response, it instead calls `next()` to move on to the next middleware, allowing for stacking and fall-backs.
	 *
	 * @see {@link https://expressjs.com/en/5x/api.html#express.static Express Docs: express.static(root, [options])}
	 */
	static: express.static,
	/**
	 * @name urlEncoded
	 * @constant
	 * @readonly
	 * @description
	 * This is a built-in middleware function in Express. It parses incoming requests with urlencoded payloads and is based on body-parser.
	 *
	 * Returns middleware that only parses urlencoded bodies and only looks at requests where the `Content-Type` header matches the `type` option.
	 * This parser accepts only UTF-8 encoding of the body and supports automatic inflation of `gzip` and `deflate` encodings.
	 *
	 * @see {@link https://expressjs.com/en/5x/api.html#express.urlencoded Express Docs: express.urlencoded([options])}
	 */
	urlEncoded: express.urlencoded,
};
