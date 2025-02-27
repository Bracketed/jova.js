import { RequestUtility } from './exports/RequestUtil';
import { ResponseUtility } from './exports/ResponseUtil';

interface UtilitiesType {
	response: ResponseUtility;
	request: RequestUtility;
}

export { RequestUtility, ResponseUtility, type UtilitiesType };
