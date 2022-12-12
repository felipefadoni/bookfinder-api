import { logger } from '@/config';
import { NextFunction, Request, Response } from 'express';
import AppError from '../errors/app-errors';

export default function errorHandlingMiddleware(error: AppError, _: Request, response: Response, next: NextFunction) {
  const status = error.statusCode || 500;
  const message = error.message || 'Internal Server Error';

  logger.error(message);

  response.status(status).json({
    status,
    message
  });

  next();
}
