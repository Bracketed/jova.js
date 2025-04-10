/**
 * @name Methods
 * @description HTTP Request Methods.
 *
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods MDN: HTTP Methods}
 * @module Types
 * @memberof Types
 * @enum Methods
 */
export enum Methods {
	/**
	 * @name Get
	 * @description
	 * The `GET` HTTP method requests a representation of the specified resource.
	 * Requests using `GET` should only be used to request data and shouldn't contain a body.
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods/GET MDN: HTTP Get}
	 * @type string
	 */
	GET = 'get',
	/**
	 * @name Post
	 * @description
	 * The `POST` HTTP method sends data to the server. The type of the body of the request is indicated by the `Content-Type` header.
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods/POST MDN: HTTP Post}
	 * @type string
	 */
	POST = 'post',
	/**
	 * @name Delete
	 * @description
	 * The `DELETE` HTTP method asks the server to delete a specified resource.
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods/DELETE MDN: HTTP Delete}
	 * @type string
	 */
	DELETE = 'delete',
	/**
	 * @name All
	 * @description
	 * A Catch all HTTP method.
	 * @type string
	 */
	ALL = 'all',
	/**
	 * @name Put
	 * @description
	 * The `PUT` HTTP method creates a new resource or replaces a representation of the target resource with the request content.
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods/PUT MDN: HTTP Put}
	 * @type string
	 */
	PUT = 'put',
	/**
	 * @name Head
	 * @description
	 * The `HEAD` HTTP method requests the metadata of a resource in the form of headers that the server would have sent if the `GET` method was used instead.
	 * This method can be used in cases where a URL might produce a large download, for example, a `HEAD` request can read the `Content-Length` header to check the file size before downloading the file with a `GET`.
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods/HEAD MDN: HTTP Head}
	 * @type string
	 */
	HEAD = 'head',
	/**
	 * @name Options
	 * @description
	 * The `OPTIONS` HTTP method requests permitted communication options for a given URL or server.
	 * This can be used to test the allowed HTTP methods for a request, or to determine whether a request would succeed when making a CORS preflighted request.
	 * A client can specify a URL with this method, or an asterisk (`*`) to refer to the entire server.
	 * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods/OPTIONS MDN: HTTP Options}
	 * @type string
	 */
	OPTIONS = 'options',
}
