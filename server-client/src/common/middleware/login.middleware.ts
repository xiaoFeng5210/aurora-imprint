import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoginMiddleware implements NestMiddleware {
	use(req: Request, res: Response, next: NextFunction) {
		console.log("login中间件", req.headers)
		if (!req.headers['authorization']) {
			return res.status(401).json("Unauthorized")
		}
		next();
	}
}
