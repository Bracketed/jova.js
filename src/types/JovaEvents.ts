/**
 * Events for Jova Listeners.
 *
 * @export
 * @enum {string}
 */
export enum ApplicationEvent {
	/**
	 * When the Jova Server has successfully started.
	 *
	 * Listener Handler Params: `none`
	 *
	 * @enum {string}
	 */
	READY = 'ready',
	/**
	 * When a route runs its handler function.
	 *
	 * Listener Handler Params: `request: ApplicationRequest`
	 *
	 * @enum {string}
	 */
	ROUTE = 'route',
	/**
	 * Catch all events.
	 *
	 * Listener Handler Params: `event: ApplicationEvent, ...args: any[]`
	 *
	 * @enum {string}
	 */
	ALL = 'any',
	/**
	 * If an error occurs in the Jova Server.
	 *
	 * Listener Handler Params: `error: Error | unknown`
	 *
	 * @enum {string}
	 */
	ERROR = 'error',
}
