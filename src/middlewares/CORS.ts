import assign from 'object-assign';
import vary from 'vary';
import { CorsOptions, CorsOptionsDelegate, CorsRequest, CustomOrigin, StaticOrigin } from '../types/index.js';

const defaults: CorsOptions = {
	origin: '*',
	methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
	preflightContinue: false,
	optionsSuccessStatus: 204,
};

function isString(s: any): s is string {
	return typeof s === 'string' || s instanceof String;
}

function isOriginAllowed(origin: string, allowedOrigin: StaticOrigin): boolean {
	if (Array.isArray(allowedOrigin)) {
		for (let i = 0; i < allowedOrigin.length; ++i) if (isOriginAllowed(origin, allowedOrigin[i])) return true;
		return false;
	} else if (isString(allowedOrigin)) return origin === allowedOrigin;
	else if (allowedOrigin instanceof RegExp) return allowedOrigin.test(origin);
	else return !!allowedOrigin;
}

function configureOrigin(options: CorsOptions, req: CorsRequest) {
	const requestOrigin = req.headers.origin;
	const headers: Array<{ key: string; value: string | boolean }> = [];
	let isAllowed: boolean;

	if (!options.origin || options.origin === '*') headers.push({ key: 'Access-Control-Allow-Origin', value: '*' });
	else if (isString(options.origin)) {
		headers.push({ key: 'Access-Control-Allow-Origin', value: options.origin });
		headers.push({ key: 'Vary', value: 'Origin' });
	} else {
		isAllowed = isOriginAllowed(requestOrigin!, options.origin as StaticOrigin);
		headers.push({ key: 'Access-Control-Allow-Origin', value: isAllowed ? requestOrigin! : false });
		headers.push({ key: 'Vary', value: 'Origin' });
	}

	return headers;
}

function configureMethods(options: CorsOptions) {
	let methods = options.methods;
	if (Array.isArray(methods)) methods = methods.join(',');
	return { key: 'Access-Control-Allow-Methods', value: methods as string };
}

function configureCredentials(options: CorsOptions) {
	if (options.credentials === true) return { key: 'Access-Control-Allow-Credentials', value: 'true' };

	return null;
}

function configureAllowedHeaders(options: CorsOptions, req: CorsRequest) {
	let allowedHeaders = options.allowedHeaders || req.headers['access-control-request-headers'];
	const headers: Array<{ key: string; value: string }> = [];

	if (Array.isArray(allowedHeaders)) allowedHeaders = allowedHeaders.join(',');

	if (allowedHeaders && allowedHeaders.length)
		headers.push({ key: 'Access-Control-Allow-Headers', value: allowedHeaders as string });

	return headers;
}

function configureExposedHeaders(options: CorsOptions) {
	let headers = options.exposedHeaders;
	if (!headers) return null;
	else if (Array.isArray(headers)) headers = headers.join(',');

	return headers && headers.length ? { key: 'Access-Control-Expose-Headers', value: headers } : null;
}

function configureMaxAge(options: CorsOptions) {
	const maxAge = (typeof options.maxAge === 'number' || options.maxAge) && options.maxAge?.toString();
	if (maxAge && maxAge.length) return { key: 'Access-Control-Max-Age', value: maxAge };

	return null;
}

function applyHeaders(headers: Array<{ key: string; value: string | boolean }>, res: any) {
	for (let header of headers)
		if (header)
			if (header.key === 'Vary' && header.value) vary(res, header.value as string);
			else if (header.value) res.setHeader(header.key, header.value as string);
}

function cors(options: CorsOptions, req: CorsRequest, res: any, next: (err?: any) => void) {
	const headers: Array<any> = [];
	const method = req.method?.toUpperCase();

	if (method === 'OPTIONS') {
		headers.push(configureOrigin(options, req));
		headers.push(configureCredentials(options));
		headers.push(configureMethods(options));
		headers.push(configureAllowedHeaders(options, req));
		headers.push(configureMaxAge(options));
		headers.push(configureExposedHeaders(options));
		applyHeaders(headers, res);

		if (options.preflightContinue) next();
		else {
			res.statusCode = options.optionsSuccessStatus!;
			res.setHeader('Content-Length', '0');
			res.end();
		}
	} else {
		headers.push(configureOrigin(options, req));
		headers.push(configureCredentials(options));
		headers.push(configureExposedHeaders(options));
		applyHeaders(headers, res);
		next();
	}
}

function middlewareWrapper<T extends CorsRequest = CorsRequest>(o?: CorsOptions | CorsOptionsDelegate<T>) {
	let optionsCallback: CorsOptionsDelegate<T>;

	if (typeof o === 'function') optionsCallback = o;
	else optionsCallback = (_req, cb) => cb(null, o);

	return function corsMiddleware(req: T, res: any, next: (err?: any) => void) {
		optionsCallback(req, (err, options) => {
			if (err) next(err);
			else {
				const corsOptions = assign({}, defaults, options);
				let originCallback: CustomOrigin | null = null;

				if (typeof corsOptions.origin === 'function') originCallback = corsOptions.origin;
				else if (corsOptions.origin)
					originCallback = (_origin, cb) => cb(null, corsOptions.origin as StaticOrigin);

				if (originCallback) {
					originCallback(req.headers.origin!, (err2, origin) => {
						if (err2 || !origin) next(err2);
						else {
							corsOptions.origin = origin;
							cors(corsOptions, req, res, next);
						}
					});
				} else {
					next();
				}
			}
		});
	};
}

export default middlewareWrapper;
