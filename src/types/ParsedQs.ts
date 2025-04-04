export interface ParsedQs {
	[key: string]: undefined | string | ParsedQs | (string | ParsedQs)[];
}
