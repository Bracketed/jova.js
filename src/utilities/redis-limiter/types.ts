type Data = boolean | number | string;

export type RedisReply = Data | Data[];
export type SendCommandFn = (...args: string[]) => Promise<RedisReply>;
export type RedisLimitOptions = {
	readonly sendCommand: SendCommandFn;
	readonly prefix?: string;
	readonly resetExpiryOnChange?: boolean;
};
