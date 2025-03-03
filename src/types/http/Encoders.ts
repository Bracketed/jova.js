/**
 * Common content encodings used in HTTP.
 */
export enum Encoder {
	/**
	 * Gzip compression encoding.
	 * @see {@link https://en.wikipedia.org/wiki/Gzip Gzip on Wikipedia}
	 */
	GZIP = 'gzip',

	/**
	 * Brotli compression encoding.
	 * @see {@link https://en.wikipedia.org/wiki/Brotli Brotli on Wikipedia}
	 */
	BR = 'br',

	/**
	 * Compress encoding (LZW, historical and less common).
	 * @see {@link https://en.wikipedia.org/wiki/Compress Compress Encoding on Wikipedia}
	 */
	COMPRESS = 'compress',

	/**
	 * Deflate compression encoding.
	 * @see {@link https://en.wikipedia.org/wiki/DEFLATE Deflate Compression on Wikipedia}
	 */
	DEFLATE = 'deflate',

	/**
	 * Identity encoding (no transformation applied).
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Encoding MDN: Content Encoding}
	 */
	IDENTITY = 'identity',

	/**
	 * Chunked transfer encoding, used in HTTP/1.1.
	 * @see {@link https://en.wikipedia.org/wiki/Chunked_transfer_encoding Chunked Transfer Encoding on Wikipedia}
	 */
	CHUNKED = 'chunked',
}
