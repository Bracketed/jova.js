import { request } from './exports/RequestUtil';
import { response } from './exports/ResponseUtil';

interface UtilitiesType {
	response: response;
	request: request;
}

export { request, response, type UtilitiesType };
