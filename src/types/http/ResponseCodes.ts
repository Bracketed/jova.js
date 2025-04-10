/**
 * @name HttpStatus
 * @description HTTP Status Codes.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status MDN: HTTP Response Status Codes}
 * @module Types
 * @memberof Types
 * @enum HttpStatus
 */
export enum HttpStatus {
	/**
	 * @name Continue
	 * @description
	 * The server has received the request headers, and the client should proceed to send the request body.
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/100 MDN: HTTP 100 Continue}
	 * @type number
	 */
	Continue = 100,

	/**
	 * @name SwitchingProtocols
	 * @description
	 * The server is willing to comply with the client's request to switch protocols.
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/101 MDN: HTTP 101 Switching Protocols}
	 * @type number
	 */
	SwitchingProtocols = 101,

	/**
	 * @name Processing
	 * @description
	 * The server has received and is processing the request, but no response is available yet.
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/102 MDN: HTTP 102 Processing}
	 * @type number
	 */
	Processing = 102,

	/**
	 * @name EarlyHints
	 * @description
	 * The server is sending some response headers before the final response.
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/103 MDN: HTTP 103 Early Hints}
	 * @type number
	 */
	EarlyHints = 103,

	// 2xx Success
	/**
	 * @name OK
	 * @description
	 * The request has succeeded.
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200 MDN: HTTP 200 OK}
	 * @type number
	 */
	OK = 200,

	/**
	 * @name Created
	 * @description
	 * The request has been fulfilled, resulting in the creation of a new resource.
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/201 MDN: HTTP 201 Created}
	 * @type number
	 */
	Created = 201,

	/**
	 * @name Accepted
	 * @description
	 * The request has been accepted for processing, but the processing has not been completed.
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/202 MDN: HTTP 202 Accepted}
	 * @type number
	 */
	Accepted = 202,

	/**
	 * @name NonAuthoritativeInformation
	 * @description
	 * The request was successful, but the returned information may be from a cached copy.
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/203 MDN: HTTP 203 Non-Authoritative Information}
	 * @type number
	 */
	NonAuthoritativeInformation = 203,

	/**
	 * @name NoContent
	 * @description
	 * The server successfully processed the request, but is not returning any content.
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/204 MDN: HTTP 204 No Content}
	 * @type number
	 */
	NoContent = 204,

	/**
	 * @name ResetContent
	 * @description
	 * The server successfully processed the request, but is not returning any content, and the client should reset the document view.
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/205 MDN: HTTP 205 Reset Content}
	 * @type number
	 */
	ResetContent = 205,

	/**
	 * @name PartialContent
	 * @description
	 * The server is delivering only part of the resource due to a range header sent by the client.
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/206 MDN: HTTP 206 Partial Content}
	 * @type number
	 */
	PartialContent = 206,

	/**
	 * @name MultiStatus
	 * @description
	 * The response contains multiple status codes, each representing a different aspect of the request.
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/207 MDN: HTTP 207 Multi-Status}
	 * @type number
	 */
	MultiStatus = 207,

	/**
	 * @name AlreadyReported
	 * @description
	 * The members of a DAV binding have already been enumerated in a previous reply to this request.
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/208 MDN: HTTP 208 Already Reported}
	 * @type number
	 */
	AlreadyReported = 208,

	/**
	 * @name IMUsed
	 * @description
	 * The server has fulfilled a request for the resource, and the response is delivered as a result of a previous request.
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/226 MDN: HTTP 226 IM Used}
	 * @type number
	 */
	IMUsed = 226,

	// 3xx Redirection
	/**
	 * @name MultipleChoices
	 * @description
	 * The request has more than one possible response. The user or user agent can select one of them.
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/300 MDN: HTTP 300 Multiple Choices}
	 * @type number
	 */
	MultipleChoices = 300,

	/**
	 * @name MovedPermanently
	 * @description
	 * This and all future requests should be directed to the given URI.
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/301 MDN: HTTP 301 Moved Permanently}
	 * @type number
	 */
	MovedPermanently = 301,

	/**
	 * @name Found
	 * @description
	 * The resource was found, but it might be temporarily under a different URI.
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/302 MDN: HTTP 302 Found}
	 * @type number
	 */
	Found = 302,

	/**
	 * @name SeeOther
	 * @description
	 * The response to the request can be found under a different URI using a GET method.
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/303 MDN: HTTP 303 See Other}
	 * @type number
	 */
	SeeOther = 303,

	/**
	 * @name NotModified
	 * @description
	 * The resource has not been modified since the last request.
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/304 MDN: HTTP 304 Not Modified}
	 * @type number
	 */
	NotModified = 304,

	/**
	 * @name UseProxy
	 * @description
	 * The requested resource is only available through a proxy.
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/305 MDN: HTTP 305 Use Proxy}
	 * @type number
	 */
	UseProxy = 305,

	/**
	 * @name TemporaryRedirect
	 * @description
	 * The server is redirecting the request temporarily to a different URI.
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/307 MDN: HTTP 307 Temporary Redirect}
	 * @type number
	 */
	TemporaryRedirect = 307,

	/**
	 * @name PermanentRedirect
	 * @description
	 * The resource has permanently moved to a new URI.
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/308 MDN: HTTP 308 Permanent Redirect}
	 * @type number
	 */
	PermanentRedirect = 308,

	/**
	 * @name BadRequest
	 * @description
	 * The server cannot process the request due to client error (e.g., malformed request syntax).
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400 MDN: HTTP 400 Bad Request}
	 * @type number
	 */
	BadRequest = 400,

	/**
	 * @name Unauthorized
	 * @description
	 * The request requires user authentication.
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401 MDN: HTTP 401 Unauthorized}
	 * @type number
	 */
	Unauthorized = 401,

	/**
	 * @name PaymentRequired
	 * @description
	 * This code is reserved for future use. It is not currently used by HTTP.
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/402 MDN: HTTP 402 Payment Required}
	 * @type number
	 */
	PaymentRequired = 402,

	/**
	 * @name Forbidden
	 * @description
	 * The server understood the request, but refuses to authorize it.
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403 MDN: HTTP 403 Forbidden}
	 * @type number
	 */
	Forbidden = 403,

	/**
	 * @name NotFound
	 * @description
	 * The server can't find the requested resource.
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404 MDN: HTTP 404 Not Found}
	 * @type number
	 */
	NotFound = 404,

	/**
	 * @name MethodNotAllowed
	 * @description
	 * The method specified in the request is not allowed for the resource identified by the request URI.
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405 MDN: HTTP 405 Method Not Allowed}
	 * @type number
	 */
	MethodNotAllowed = 405,

	/**
	 * @name NotAcceptable
	 * @description
	 * The resource is only capable of generating content that is not acceptable according to the Accept headers sent in the request.
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/406 MDN: HTTP 406 Not Acceptable}
	 * @type number
	 */
	NotAcceptable = 406,

	/**
	 * @name ProxyAuthenticationRequired
	 * @description
	 * The client must first authenticate itself with the proxy.
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/407 MDN: HTTP 407 Proxy Authentication Required}
	 * @type number
	 */
	ProxyAuthenticationRequired = 407,

	/**
	 * @name RequestTimeout
	 * @description
	 * The server did not receive a complete request in time.
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/408 MDN: HTTP 408 Request Timeout}
	 * @type number
	 */
	RequestTimeout = 408,

	/**
	 * @name Conflict
	 * @description
	 * The request could not be completed due to a conflict with the current state of the resource.
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/409 MDN: HTTP 409 Conflict}
	 * @type number
	 */
	Conflict = 409,

	/**
	 * @name Gone
	 * @description
	 * The requested resource is no longer available at the server and no forwarding address is known.
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/410 MDN: HTTP 410 Gone}
	 * @type number
	 */
	Gone = 410,

	/**
	 * @name LengthRequired
	 * @description
	 * The server refuses to process the request because the `Content-Length` header field is not defined and the server requires it.
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/411 MDN: HTTP 411 Length Required}
	 * @type number
	 */
	LengthRequired = 411,

	/**
	 * @name PreconditionFailed
	 * @description
	 * The server does not meet one of the preconditions that the requester put on the request.
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/412 MDN: HTTP 412 Precondition Failed}
	 * @type number
	 */
	PreconditionFailed = 412,

	/**
	 * @name PayloadTooLarge
	 * @description
	 * The request is larger than the server is willing or able to process.
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/413 MDN: HTTP 413 Payload Too Large}
	 * @type number
	 */
	PayloadTooLarge = 413,

	/**
	 * @name URITooLong
	 * @description
	 * The URI provided was too long for the server to process.
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/414 MDN: HTTP 414 URI Too Long}
	 * @type number
	 */
	URITooLong = 414,

	/**
	 * @name UnsupportedMediaType
	 * @description
	 * The server does not support the media type transmitted in the request.
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/415 MDN: HTTP 415 Unsupported Media Type}
	 * @type number
	 */
	UnsupportedMediaType = 415,

	/**
	 * @name RangeNotSatisfiable
	 * @description
	 * The client has asked for a portion of the file, but the server cannot supply that portion.
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/416 MDN: HTTP 416 Range Not Satisfiable}
	 * @type number
	 */
	RangeNotSatisfiable = 416,

	/**
	 * @name ExpectationFailed
	 * @description
	 * The server cannot meet the requirements of the Expect request-header field.
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/417 MDN: HTTP 417 Expectation Failed}
	 * @type number
	 */
	ExpectationFailed = 417,

	/**
	 * @name ImATeapot
	 * @description
	 * Any attempt to instruct an teapot to brew coffee should result in the error "418 I'm a teapot."
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/418 MDN: HTTP 418 I'm a Teapot}
	 * @type number
	 */
	ImATeapot = 418,

	/**
	 * @name MisdirectedRequest
	 * @description
	 * The request was directed at a server that is not able to produce a response.
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/421 MDN: HTTP 421 Misdirected Request}
	 * @type number
	 */
	MisdirectedRequest = 421,

	/**
	 * @name UnprocessableEntity
	 * @description
	 * The server understands the content type of the request entity, but was unable to process the contained instructions.
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/422 MDN: HTTP 422 Unprocessable Entity}
	 * @type number
	 */
	UnprocessableEntity = 422,

	/**
	 * @name Locked
	 * @description
	 * The resource that is being accessed is locked.
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/423 MDN: HTTP 423 Locked}
	 * @type number
	 */
	Locked = 423,

	/**
	 * @name FailedDependency
	 * @description
	 * The request failed due to failure of a previous request.
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/424 MDN: HTTP 424 Failed Dependency}
	 * @type number
	 */
	FailedDependency = 424,

	/**
	 * @name TooEarly
	 * @description
	 * The server is unwilling to risk processing a request that might be replayed.
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/425 MDN: HTTP 425 Too Early}
	 * @type number
	 */
	TooEarly = 425,

	/**
	 * @name UpgradeRequired
	 * @description
	 * The client should switch to a different protocol.
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/426 MDN: HTTP 426 Upgrade Required}
	 * @type number
	 */
	UpgradeRequired = 426,

	/**
	 * @name PreconditionRequired
	 * @description
	 * The origin server requires the request to be conditional.
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/428 MDN: HTTP 428 Precondition Required}
	 * @type number
	 */
	PreconditionRequired = 428,

	/**
	 * @name TooManyRequests
	 * @description
	 * The user has sent too many requests in a given amount of time.
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429 MDN: HTTP 429 Too Many Requests}
	 * @type number
	 */
	TooManyRequests = 429,

	/**
	 * @name RequestHeaderFieldsTooLarge
	 * @description
	 * The server is unwilling to process the request because its header fields are too large.
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/431 MDN: HTTP 431 Request Header Fields Too Large}
	 * @type number
	 */
	RequestHeaderFieldsTooLarge = 431,

	/**
	 * @name UnavailableForLegalReasons
	 * @description
	 * The resource is unavailable for legal reasons.
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/451 MDN: HTTP 451 Unavailable For Legal Reasons}
	 * @type number
	 */
	UnavailableForLegalReasons = 451,

	/**
	 * @name InternalServerError
	 * @description
	 * The server encountered an unexpected condition that prevented it from fulfilling the request.
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500 MDN: HTTP 500 Internal Server Error}
	 * @type number
	 */
	InternalServerError = 500,

	/**
	 * @name NotImplemented
	 * @description
	 * The server does not support the functionality required to fulfill the request.
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/501 MDN: HTTP 501 Not Implemented}
	 * @type number
	 */
	NotImplemented = 501,

	/**
	 * @name BadGateway
	 * @description
	 * The server, while acting as a gateway or proxy, received an invalid response from the upstream server.
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/502 MDN: HTTP 502 Bad Gateway}
	 * @type number
	 */
	BadGateway = 502,

	/**
	 * @name ServiceUnavailable
	 * @description
	 * The server is currently unable to handle the request due to temporary overloading or maintenance of the server.
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/503 MDN: HTTP 503 Service Unavailable}
	 * @type number
	 */
	ServiceUnavailable = 503,

	/**
	 * @name GatewayTimeout
	 * @description
	 * The server, while acting as a gateway or proxy, did not receive a timely response from the upstream server or some other auxiliary server.
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/504 MDN: HTTP 504 Gateway Timeout}
	 * @type number
	 */
	GatewayTimeout = 504,

	/**
	 * @name HTTPVersionNotSupported
	 * @description
	 * The server does not support the HTTP protocol version that was used in the request.
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/505 MDN: HTTP 505 HTTP Version Not Supported}
	 * @type number
	 */
	HTTPVersionNotSupported = 505,

	/**
	 * @name VariantAlsoNegotiates
	 * @description
	 * The server has an internal configuration error: transparent content negotiation for the request results in a circular reference.
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/506 MDN: HTTP 506 Variant Also Negotiates}
	 * @type number
	 */
	VariantAlsoNegotiates = 506,

	/**
	 * @name InsufficientStorage
	 * @description
	 * The server is unable to store the representation needed to complete the request.
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/507 MDN: HTTP 507 Insufficient Storage}
	 * @type number
	 */
	InsufficientStorage = 507,

	/**
	 * @name LoopDetected
	 * @description
	 * The server detected an infinite loop while processing the request.
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/508 MDN: HTTP 508 Loop Detected}
	 * @type number
	 */
	LoopDetected = 508,

	/**
	 * @name NotExtended
	 * @description
	 * Further extensions to the request are required for the server to fulfill it.
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/510 MDN: HTTP 510 Not Extended}
	 * @type number
	 */
	NotExtended = 510,

	/**
	 * @name NetworkAuthenticationRequired
	 * @description
	 * The client needs to authenticate to gain network access.
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/511 MDN: HTTP 511 Network Authentication Required}
	 * @type number
	 */
	NetworkAuthenticationRequired = 511,
}
