const toString = {}.toString;

function isNegativeInteger(value: number): boolean {
	return '[object Number]' === toString.call(value) && value % 1 === 0 && value < 0;
}

function isNumber(value: unknown): boolean {
	return '[object Number]' === toString.call(value);
}

function isPort(value: number): boolean {
	if (!isNumber(value) || isNegativeInteger(value) || value > 65535) return false;
	return true;
}

export { isNegativeInteger, isNumber, isPort };
