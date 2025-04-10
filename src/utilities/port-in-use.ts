import is from 'is2';
import net from 'node:net';
import util from 'node:util';

interface TcpPortUsedOptions {
	port: number;
	host?: string;
	status?: boolean;
	retryTimeMs?: number;
	timeOutMs?: number;
	inUse?: boolean;
}

function getDeferred<T>() {
	let resolve!: (value: T | PromiseLike<T>) => void;
	let reject!: (reason?: any) => void;

	const promise = new Promise<T>((res, rej) => {
		resolve = res;
		reject = rej;
	});

	return { resolve, reject, promise };
}

const makeOptionsObj = (
	port: number,
	host: string = '127.0.0.1',
	status: boolean = false,
	retryTimeMs: number = 250,
	timeOutMs: number = 2000
): TcpPortUsedOptions => ({ port, host, status, retryTimeMs, timeOutMs });

export async function check(port: number): Promise<boolean> {
	const deferred = getDeferred<boolean>();
	const opts = makeOptionsObj(port);
	let inUse = true;
	let client: net.Socket;

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
