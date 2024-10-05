import debug from 'debug';
import is from 'is2';
import net from 'node:net';
import util from 'node:util';

const debugLog = debug('port-used');

export interface TcpPortUsedOptions {
	port: number;
	host?: string;
	status?: boolean;
	retryTimeMs?: number;
	timeOutMs?: number;
	inUse?: boolean;
}

// Global Values
const TIMEOUT = 2000;
const RETRYTIME = 250;

function getDeferred<T>() {
	let resolve!: (value: T | PromiseLike<T>) => void;
	let reject!: (reason?: any) => void;
	const promise = new Promise<T>((res, rej) => {
		resolve = res;
		reject = rej;
	});

	return { resolve, reject, promise };
}

/**
 * Creates an options object from all the possible arguments
 * @private
 * @param {Number} port a valid TCP port number
 * @param {String} host The DNS name or IP address.
 * @param {Boolean} status The desired in use status to wait for: false === not in use, true === in use
 * @param {Number} retryTimeMs the retry interval in milliseconds - default is 200ms
 * @param {Number} timeOutMs the amount of time to wait until port is free default is 1000ms
 * @return {Object} An options object with all the above parameters as properties.
 */
function makeOptionsObj(
	port: number,
	host: string = '127.0.0.1',
	status: boolean = false,
	retryTimeMs: number = RETRYTIME,
	timeOutMs: number = TIMEOUT
): TcpPortUsedOptions {
	return { port, host, status, retryTimeMs, timeOutMs };
}

/**
 * Checks if a TCP port is in use by creating the socket and binding it to the
 * target port. Once bound, successfully, it's assumed the port is available.
 * After the socket is closed or in error, the promise is resolved.
 * Note: you have to be superuser to correctly test system ports (0-1023).
 *
 * @param {Number|TcpPortUsedOptions} port The port or options object.
 * @param {String} [host] DNS name or IP address. Default '127.0.0.1'
 * @return {Promise<boolean>} A promise that resolves to true if the port is in use, false otherwise.
 */
function check(port: number | TcpPortUsedOptions, host?: string): Promise<boolean> {
	const deferred = getDeferred<boolean>();
	let inUse = true;
	let client: net.Socket;

	let opts: TcpPortUsedOptions;
	if (typeof port === 'number') {
		opts = makeOptionsObj(port, host);
	} else {
		opts = port;
	}

	if (!is.port(opts.port)) {
		debugLog('Error invalid port: ' + util.inspect(opts.port));
		deferred.reject(new Error('invalid port: ' + util.inspect(opts.port)));
		return deferred.promise;
	}

	function cleanUp() {
		if (client) {
			client.removeAllListeners('connect');
			client.removeAllListeners('error');
			client.end();
			client.destroy();
			client.unref();
		}
	}

	function onConnectCb() {
		deferred.resolve(inUse);
		cleanUp();
	}

	function onErrorCb(err: any) {
		if (err.code !== 'ECONNREFUSED') {
			deferred.reject(err);
		} else {
			inUse = false;
			deferred.resolve(inUse);
		}
		cleanUp();
	}

	client = new net.Socket();
	client.once('connect', onConnectCb);
	client.once('error', onErrorCb);
	client.connect({ port: opts.port, host: opts.host }, () => {});

	return deferred.promise;
}

/**
 * Creates a deferred promise and fulfills it only when the socket's usage
 * equals status in terms of 'in use' (false === not in use, true === in use).
 * @param {Number|TcpPortUsedOptions} port The port or options object.
 * @param {String} host The DNS name or IP address.
 * @param {Boolean} inUse Desired status (true for in use, false for not in use).
 * @param {Number} [retryTimeMs] The retry interval in milliseconds.
 * @param {Number} [timeOutMs] Time to wait until port is free.
 * @return {Promise<void>} A promise that resolves when the port status matches.
 */
function waitForStatus(
	port: number | TcpPortUsedOptions,
	host?: string,
	inUse?: boolean,
	retryTimeMs?: number,
	timeOutMs?: number
): Promise<void> {
	const deferred = getDeferred<void>();
	let timeoutId: NodeJS.Timeout | undefined;
	let retryId: NodeJS.Timeout | undefined;
	let timedOut = false;

	let opts: TcpPortUsedOptions;
	if (typeof port === 'number') {
		opts = makeOptionsObj(port, host, inUse, retryTimeMs, timeOutMs);
	} else {
		opts = port;
	}

	function cleanUp() {
		if (timeoutId) clearTimeout(timeoutId);
		if (retryId) clearTimeout(retryId);
	}

	function doCheck() {
		check(opts.port, opts.host).then(
			(inUse) => {
				if (timedOut) return;
				if (inUse === opts.status) {
					deferred.resolve();
					cleanUp();
				} else {
					retryId = setTimeout(doCheck, opts.retryTimeMs);
				}
			},
			(err) => {
				if (!timedOut) {
					deferred.reject(err);
					cleanUp();
				}
			}
		);
	}

	timeoutId = setTimeout(() => {
		timedOut = true;
		cleanUp();
		deferred.reject(new Error('timeout'));
	}, opts.timeOutMs);

	doCheck();
	return deferred.promise;
}

/**
 * Waits until the port is free (not in use).
 * @param {Number|TcpPortUsedOptions} port The port or options object.
 * @param {Number} [retryTimeMs] The retry interval in milliseconds.
 * @param {Number} [timeOutMs] Time to wait until port is free.
 * @return {Promise<void>} A promise that resolves when the port is free.
 */
function waitUntilFree(port: number | TcpPortUsedOptions, retryTimeMs?: number, timeOutMs?: number): Promise<void> {
	const opts: TcpPortUsedOptions =
		typeof port === 'number' ? makeOptionsObj(port, '127.0.0.1', false, retryTimeMs, timeOutMs) : port;

	return waitForStatus(opts);
}

/**
 * Waits until the port is free on a specific host.
 * @param {Number|TcpPortUsedOptions} port The port or options object.
 * @param {String} host The DNS name or IP address.
 * @param {Number} [retryTimeMs] The retry interval in milliseconds.
 * @param {Number} [timeOutMs] Time to wait until port is free.
 * @return {Promise<void>} A promise that resolves when the port is free.
 */
function waitUntilFreeOnHost(
	port: number | TcpPortUsedOptions,
	host?: string,
	retryTimeMs?: number,
	timeOutMs?: number
): Promise<void> {
	const opts: TcpPortUsedOptions =
		typeof port === 'number' ? makeOptionsObj(port, host, false, retryTimeMs, timeOutMs) : port;

	return waitForStatus(opts);
}

/**
 * Waits until the port is used (in use).
 * @param {Number|TcpPortUsedOptions} port The port or options object.
 * @param {Number} [retryTimeMs] The retry interval in milliseconds.
 * @param {Number} [timeOutMs] Time to wait until port is in use.
 * @return {Promise<void>} A promise that resolves when the port is in use.
 */
function waitUntilUsed(port: number | TcpPortUsedOptions, retryTimeMs?: number, timeOutMs?: number): Promise<void> {
	const opts: TcpPortUsedOptions =
		typeof port === 'number' ? makeOptionsObj(port, '127.0.0.1', true, retryTimeMs, timeOutMs) : port;

	return waitForStatus(opts);
}

/**
 * Waits until the port is used on a specific host.
 * @param {Number|TcpPortUsedOptions} port The port or options object.
 * @param {String} host The DNS name or IP address.
 * @param {Number} [retryTimeMs] The retry interval in milliseconds.
 * @param {Number} [timeOutMs] Time to wait until port is in use.
 * @return {Promise<void>} A promise that resolves when the port is in use.
 */
function waitUntilUsedOnHost(
	port: number | TcpPortUsedOptions,
	host?: string,
	retryTimeMs?: number,
	timeOutMs?: number
): Promise<void> {
	const opts: TcpPortUsedOptions =
		typeof port === 'number' ? makeOptionsObj(port, host, true, retryTimeMs, timeOutMs) : port;

	return waitForStatus(opts);
}

export { check, waitForStatus, waitUntilFree, waitUntilFreeOnHost, waitUntilUsed, waitUntilUsedOnHost };
