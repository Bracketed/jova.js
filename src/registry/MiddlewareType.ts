import * as Express from 'express';

export type Middleware = (req: Express.Request, res: Express.Response, next: Express.NextFunction) => void;
