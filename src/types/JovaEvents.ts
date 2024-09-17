/**
 * Events for Jova Listeners.
 *
 
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
	/**
	 * The mount event is fired on a sub-app, when it is mounted on a parent app. The parent app is passed to the callback function.
	 *
	 * Listener Handler Params: `application: JovaServer`
	 *
	 * @enum {string}
	 */
	MOUNT = 'mount',
}
