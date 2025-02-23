type Data = boolean | number | string;

export type RedisReply = Data | Data[];
export type SendCommandFn = (...args: string[]) => Promise<RedisReply>;
export type Options = {
	readonly sendCommand: SendCommandFn;
	readonly prefix?: string;
	readonly resetExpiryOnChange?: boolean;
};

