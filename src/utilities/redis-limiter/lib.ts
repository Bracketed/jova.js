import type {
	ClientRateLimitInfo,
	IncrementResponse,
	LimitOptions as RateLimitConfiguration,
	Store,
} from '../limiter/index';
import scripts from './scripts';
import type { RedisLimitOptions as Options, RedisReply, SendCommandFn } from './types';

const toInt = (input: string | number | boolean | undefined): number => {
	if (typeof input === 'number') return input;
	return Number.parseInt((input ?? '').toString(), 10);
};

const parseScriptResponse = (results: RedisReply): ClientRateLimitInfo => {
	if (!Array.isArray(results)) throw new TypeError('Expected result to be array of values');
	if (results.length !== 2) throw new Error(`Expected 2 replies, got ${results.length}`);

	const totalHits = results[0] === false ? 0 : toInt(results[0]);
	const timeToExpire = toInt(results[1]);

	const resetTime = new Date(Date.now() + timeToExpire);
	return { totalHits, resetTime };
};

export class RedisStore implements Store {
	sendCommand: SendCommandFn;
	prefix: string;
	resetExpiryOnChange: boolean;
	incrementScriptSha: Promise<string>;
	getScriptSha: Promise<string>;
	windowMs!: number;

	constructor(options: Options) {
		this.sendCommand = options.sendCommand;
		this.prefix = options.prefix ?? 'rl:';
		this.resetExpiryOnChange = options.resetExpiryOnChange ?? false;

		// So that the script loading can occur non-blocking, this will send
		// the script to be loaded, and will capture the value within the
		// promise return. This way, if increment/get start being called before
		// the script has finished loading, it will wait until it is loaded
		// before it continues.
		this.incrementScriptSha = this.loadIncrementScript();
		this.getScriptSha = this.loadGetScript();
	}

	async loadIncrementScript(): Promise<string> {
		const result = await this.sendCommand('SCRIPT', 'LOAD', scripts.increment);

		if (typeof result !== 'string') throw new TypeError('unexpected reply from redis client');

		return result;
	}

	async loadGetScript(): Promise<string> {
		const result = await this.sendCommand('SCRIPT', 'LOAD', scripts.get);

		if (typeof result !== 'string') throw new TypeError('unexpected reply from redis client');

		return result;
	}

	async retryableIncrement(key: string): Promise<RedisReply> {
		const evalCommand = async () =>
			this.sendCommand(
				'EVALSHA',
				await this.incrementScriptSha,
				'1',
				this.prefixKey(key),
				this.resetExpiryOnChange ? '1' : '0',
				this.windowMs.toString()
			);

		try {
			const result = await evalCommand();
			return result;
		} catch {
			// TODO: distinguish different error types
			this.incrementScriptSha = this.loadIncrementScript();
			return evalCommand();
		}
	}

	prefixKey(key: string): string {
		return `${this.prefix}${key}`;
	}

	init(options: RateLimitConfiguration) {
		this.windowMs = options.windowMs;
	}

	async get(key: string): Promise<ClientRateLimitInfo | undefined> {
		const results = await this.sendCommand('EVALSHA', await this.getScriptSha, '1', this.prefixKey(key));

		return parseScriptResponse(results);
	}

	async increment(key: string): Promise<IncrementResponse> {
		const results = await this.retryableIncrement(key);
		return parseScriptResponse(results);
	}

	async decrement(key: string): Promise<void> {
		await this.sendCommand('DECR', this.prefixKey(key));
	}

	async resetKey(key: string): Promise<void> {
		await this.sendCommand('DEL', this.prefixKey(key));
	}
}

export default RedisStore;
