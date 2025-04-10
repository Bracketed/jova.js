/**
 * @name Encoder
 * @description Common content encodings used in HTTP.
 * @module Types
 * @enum Encoder
 */
export enum Encoder {
	/**
	 * @name Gzip
	 * @description Gzip compression encoding.
	 * @see {@link https://en.wikipedia.org/wiki/Gzip Gzip on Wikipedia}
	 * @type string
	 */
	GZIP = 'gzip',

	/**
	 * @name Brotli
	 * @description Brotli compression encoding.
	 * @see {@link https://en.wikipedia.org/wiki/Brotli Brotli on Wikipedia}
	 * @type string
	 */
	BROTLI = 'br',

	/**
	 * @name Compress
	 * @description Compress encoding (LZW, historical and less common).
	 * @see {@link https://en.wikipedia.org/wiki/Compress Compress Encoding on Wikipedia}
	 * @type string
	 */
	COMPRESS = 'compress',

	/**
	 * @name Deflate
	 * @description Deflate compression encoding.
	 * @see {@link https://en.wikipedia.org/wiki/DEFLATE Deflate Compression on Wikipedia}
	 * @type string
	 */
	DEFLATE = 'deflate',

	/**
	 * @name Identity
	 * @description Identity encoding (no transformation applied).
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Encoding MDN: Content Encoding}
	 * @type string
	 */
	IDENTITY = 'identity',

	/**
	 * @name Chunked
	 * @description Chunked transfer encoding, used in HTTP/1.1.
	 * @see {@link https://en.wikipedia.org/wiki/Chunked_transfer_encoding Chunked Transfer Encoding on Wikipedia}
	 * @type string
	 */
	CHUNKED = 'chunked',
}
