import is from 'is2';
import net from 'node:net';
import util from 'node:util';

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

function makeOptionsObj(
	port: number,
	host: string = '127.0.0.1',
	status: boolean = false,
	retryTimeMs: number = RETRYTIME,
	timeOutMs: number = TIMEOUT
): TcpPortUsedOptions {
	return { port, host, status, retryTimeMs, timeOutMs };
}

function check(port: number | TcpPortUsedOptions, host?: string): Promise<boolean> {
	const deferred = getDeferred<boolean>();
	let inUse = true;
	let client: net.Socket;

	let opts: TcpPortUsedOptions;
	if (typeof port === 'number') opts = makeOptionsObj(port, host);
	else opts = port;

	if (!is.port(opts.port)) {
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
		if (err.code !== 'ECONNREFUSED') deferred.reject(err);
		else {
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
	if (typeof port === 'number') opts = makeOptionsObj(port, host, inUse, retryTimeMs, timeOutMs);
	else opts = port;

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
				} else retryId = setTimeout(doCheck, opts.retryTimeMs);
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

function waitUntilFree(port: number | TcpPortUsedOptions, retryTimeMs?: number, timeOutMs?: number): Promise<void> {
	const opts: TcpPortUsedOptions =
		typeof port === 'number' ? makeOptionsObj(port, '127.0.0.1', false, retryTimeMs, timeOutMs) : port;

	return waitForStatus(opts);
}

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

function waitUntilUsed(port: number | TcpPortUsedOptions, retryTimeMs?: number, timeOutMs?: number): Promise<void> {
	const opts: TcpPortUsedOptions =
		typeof port === 'number' ? makeOptionsObj(port, '127.0.0.1', true, retryTimeMs, timeOutMs) : port;

	return waitForStatus(opts);
}

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
