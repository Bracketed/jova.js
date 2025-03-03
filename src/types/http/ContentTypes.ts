/**
 * @name ContentType
 * @description
 * Defines a set of commonly used content types (MIME types) for HTTP headers and other contexts.
 * These content types are used to specify the format of data being sent or received in HTTP requests and responses.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/MIME_types/Common_types MDN: Common MIME Types}
 * @see {@link https://www.iana.org/assignments/media-types/media-types.xhtml IANA: List of MIME Types}
 * @module Types
 * @enum ContentType
 */
export enum ContentType {
	/**
	 * @name JSON
	 * @description
	 * JSON (JavaScript Object Notation) format, typically used for APIs and data interchange.
	 * @see {@link https://www.iana.org/assignments/media-types/application/json IANA: application/json MIME Type}
	 * @type string
	 */
	JSON = 'application/json',
	/**
	 * @name Text
	 * @description
	 * Plain text format with no special encoding.
	 * Used for raw text content without formatting.
	 * @see {@link https://www.iana.org/assignments/media-types/text/plain IANA: text/plain MIME Type}
	 * @type string
	 */
	Text = 'text/plain',
	HTML = 'text/html',
	XML = 'application/xml',
	CSV = 'text/csv',
	FormURLEncoded = 'application/x-www-form-urlencoded',
	MultipartFormData = 'multipart/form-data',
	Javascript = 'application/javascript',
	PDF = 'application/pdf',
	OctetStream = 'application/octet-stream',
	ZIP = 'application/zip',
	GIF = 'image/gif',
	JPEG = 'image/jpeg',
	PNG = 'image/png',
	SVG = 'image/svg+xml',
	Webp = 'image/webp',
	MP4 = 'video/mp4',
	MP3 = 'audio/mpeg',
	OGG = 'audio/ogg',
	WAV = 'audio/wav',
	WEBM = 'video/webm',
}
