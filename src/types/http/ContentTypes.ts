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
	/**
	 * @name Text (HTML)
	 * @description
	 * Plain text format with html encoding.
	 * Used for raw text content with html formatting.
	 * @see {@link https://www.iana.org/assignments/media-types/text/html IANA: text/html MIME Type}
	 * @type string
	 */
	HTML = 'text/html',
	/**
	 * @name Application (XML)
	 * @description
	 * Standard MIME type for XML documents.
	 * Used when transmitting structured data in XML format.
	 * @see {@link https://www.iana.org/assignments/media-types/application/xml IANA: application/xml MIME Type}
	 * @type string
	 */
	XML = 'application/xml',
	/**
	 * @name Text (CSV)
	 * @description
	 * Standard MIME type for CSV (Comma-Separated Values) files.
	 * Used for transmitting tabular data in plain text format.
	 * @see {@link https://www.iana.org/assignments/media-types/text/csv IANA: text/csv MIME Type}
	 * @type string
	 */
	CSV = 'text/csv',
	/**
	 * @name Application (x-www-form-urlencoded)
	 * @description
	 * Standard MIME type for encoding form data in HTTP requests.
	 * Commonly used when submitting form data in key-value pairs.
	 * @see {@link https://www.iana.org/assignments/media-types/application/x-www-form-urlencoded IANA: application/x-www-form-urlencoded MIME Type}
	 * @type string
	 */
	FormURLEncoded = 'application/x-www-form-urlencoded',
	/**
	 * @name Multipart (Form-Data)
	 * @description
	 * Standard MIME type for submitting form data that includes files, non-ASCII data, or binary content.
	 * Commonly used for file uploads and complex form submissions via HTTP POST.
	 * @see {@link https://www.iana.org/assignments/media-types/multipart/form-data IANA: multipart/form-data MIME Type}
	 * @type string
	 */
	MultipartFormData = 'multipart/form-data',
	/**
	 * @name Application (JavaScript)
	 * @description
	 * Standard MIME type for JavaScript files.
	 * Used for transmitting executable JavaScript code to be interpreted by web browsers or JavaScript engines.
	 * @see {@link https://www.iana.org/assignments/media-types/application/javascript IANA: application/javascript MIME Type}
	 * @type string
	 */
	Javascript = 'application/javascript',
	/**
	 * @name Application (PDF)
	 * @description
	 * Standard MIME type for PDF (Portable Document Format) files.
	 * Used for transmitting documents that preserve formatting across devices and platforms.
	 * @see {@link https://www.iana.org/assignments/media-types/application/pdf IANA: application/pdf MIME Type}
	 * @type string
	 */
	PDF = 'application/pdf',
	/**
	 * @name Application (Octet Stream)
	 * @description
	 * Generic MIME type for arbitrary binary data.
	 * Commonly used for file downloads or when the content type is unknown.
	 * @see {@link https://www.iana.org/assignments/media-types/application/octet-stream IANA: application/octet-stream MIME Type}
	 * @type string
	 */
	OctetStream = 'application/octet-stream',
	/**
	 * @name Application (ZIP)
	 * @description
	 * Standard MIME type for ZIP archive files.
	 * Used for transmitting compressed collections of files and directories.
	 * @see {@link https://www.iana.org/assignments/media-types/application/zip IANA: application/zip MIME Type}
	 * @type string
	 */
	ZIP = 'application/zip',
	/**
	 * @name Image (GIF)
	 * @description
	 * Standard MIME type for GIF (Graphics Interchange Format) image files.
	 * Used for transmitting simple animations and images with limited color palettes.
	 * @see {@link https://www.iana.org/assignments/media-types/image/gif IANA: image/gif MIME Type}
	 * @type string
	 */
	GIF = 'image/gif',
	/**
	 * @name Image (JPEG)
	 * @description
	 * Standard MIME type for JPEG (Joint Photographic Experts Group) image files.
	 * Used for transmitting high-quality images with lossy compression.
	 * @see {@link https://www.iana.org/assignments/media-types/image/jpeg IANA: image/jpeg MIME Type}
	 * @type string
	 */
	JPEG = 'image/jpeg',
	/**
	 * @name Image (PNG)
	 * @description
	 * Standard MIME type for PNG (Portable Network Graphics) image files.
	 * Used for transmitting high-quality images with lossless compression.
	 * @see {@link https://www.iana.org/assignments/media-types/image/png IANA: image/png MIME Type}
	 * @type string
	 */
	PNG = 'image/png',
	/**
	 * @name Image (SVG+XML)
	 * @description
	 * Standard MIME type for SVG (Scalable Vector Graphics) files encoded in XML.
	 * Used for transmitting vector graphics with scalable quality, ideal for web use.
	 * @see {@link https://www.iana.org/assignments/media-types/image/svg+xml IANA: image/svg+xml MIME Type}
	 * @type string
	 */
	SVG = 'image/svg+xml',
	/**
	 * @name Image (WEBP)
	 * @description
	 * Standard MIME type for WEBP image files.
	 * Used for transmitting high-quality images with both lossy and lossless compression, often providing smaller file sizes.
	 * @see {@link https://www.iana.org/assignments/media-types/image/webp IANA: image/webp MIME Type}
	 * @type string
	 */
	Webp = 'image/webp',
	/**
	 * @name Video (MP4)
	 * @description
	 * Standard MIME type for MP4 video files.
	 * Used for transmitting video content with both high-quality compression and small file sizes, widely supported across devices and platforms.
	 * @see {@link https://www.iana.org/assignments/media-types/video/mp4 IANA: image/webp MIME Type}
	 * @type string
	 */
	MP4 = 'video/mp4',
	/**
	 * @name Audio (MPEG)
	 * @description
	 * Standard MIME type for MPEG (Moving Picture Experts Group) audio files.
	 * Used for transmitting audio content with high-quality compression and small file sizes, widely supported across devices and platforms.
	 * @see {@link https://www.iana.org/assignments/media-types/audio/mpeg IANA: audio/mpeg MIME Type}
	 * @type string
	 */
	MP3 = 'audio/mpeg',
	/**
	 * @name Audio (OGG)
	 * @description
	 * Standard MIME type for OGG (Open Source Media) audio files.
	 * Used for transmitting high-quality audio content with efficient compression, often used for streaming and free from patent issues.
	 * @see {@link https://www.iana.org/assignments/media-types/audio/ogg IANA: audio/ogg MIME Type}
	 * @type string
	 */
	OGG = 'audio/ogg',
	/**
	 * @name Audio (WAV)
	 * @description
	 * Standard MIME type for WAV (Waveform Audio File Format) audio files.
	 * Used for transmitting uncompressed audio content with high quality, typically large file sizes and commonly used in professional audio applications.
	 * @see {@link https://www.iana.org/assignments/media-types/audio/wav IANA: audio/wav MIME Type}
	 * @type string
	 */
	WAV = 'audio/wav',
	/**
	 * @name Video (WEBM)
	 * @description
	 * Standard MIME type for WEBM video files.
	 * Used for transmitting video content with high-quality compression, offering small file sizes and open-source format support.
	 * @see {@link https://www.iana.org/assignments/media-types/video/webm IANA: image/webm MIME Type}
	 * @type string
	 */
	WEBM = 'video/webm',
}
