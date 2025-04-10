import { RequestUtility } from '../../shared/utilities/RequestUtilities';
import { ResponseUtility } from '../../shared/utilities/ResponseUtilities';
import type { ApplicationNextFunction, ApplicationRequest, ApplicationResponse } from '../../types/index';

export const extend = (req: ApplicationRequest, res: ApplicationResponse, next?: ApplicationNextFunction) => {
	res.utilities = new ResponseUtility(res);
	req.utilities = new RequestUtility(req);

	return next!();
};
