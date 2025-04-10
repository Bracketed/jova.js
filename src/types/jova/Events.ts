/**
 * @name ApplicationEvent
 * @description Events for Jova Listeners.
 * @module Types
 * @memberof Types
 * @enum ApplicationEvent
 */
export enum ApplicationEvent {
	/**
	 * @name Ready
	 * @description
	 * When the Jova Server has successfully started.
	 *
	 * Listener Handler Params: `none`
	 *
	 * @enum string
	 */
	READY = 'ready',
	/**
	 * @name Route
	 * @description
	 * When a route runs its handler function.
	 *
	 * Listener Handler Params: `request: ApplicationRequest`
	 *
	 * @enum string
	 */
	ROUTE = 'route',
	/**
	 * @name All (any)
	 * @description
	 * Catch all events.
	 *
	 * Listener Handler Params: `event: ApplicationEvent, ...args: any[]`
	 *
	 * @enum string
	 */
	ALL = 'any',
	/**
	 * @name Error
	 * @description
	 * If an error occurs in the Jova Server.
	 *
	 * Listener Handler Params: `error: Error | unknown`
	 *
	 * @enum string
	 */
	ERROR = 'error',
	/**
	 * @name Mount
	 * @description
	 * The mount event is fired on a sub-app, when it is mounted on a parent application. The parent app is passed to the callback function.
	 *
	 * Listener Handler Params: `application: JovaServer`
	 *
	 * @enum string
	 */
	MOUNT = 'mount',
}
