/**
 * Common content encodings used in HTTP.
 */
export enum Encoder {
	/**
	 * Gzip compression encoding.
	 * @see https://en.wikipedia.org/wiki/Gzip
	 */
	GZIP = 'gzip',

	/**
	 * Brotli compression encoding.
	 * @see https://en.wikipedia.org/wiki/Brotli
	 */
	BR = 'br',

	/**
	 * Compress encoding (LZW, historical and less common).
	 * @see https://en.wikipedia.org/wiki/Compress
	 */
	COMPRESS = 'compress',

	/**
	 * Deflate compression encoding.
	 * @see https://en.wikipedia.org/wiki/DEFLATE
	 */
	DEFLATE = 'deflate',

	/**
	 * Identity encoding (no transformation applied).
	 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Encoding
	 */
	IDENTITY = 'identity',

	/**
	 * Chunked transfer encoding, used in HTTP/1.1.
	 * @see https://en.wikipedia.org/wiki/Chunked_transfer_encoding
	 */
	CHUNKED = 'chunked',
}
