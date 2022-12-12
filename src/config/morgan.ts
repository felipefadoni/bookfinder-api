import morgan from 'morgan';
import { NextFunctionProps, RequestProps, ResponseProps } from './http';

const morganConfig = {
  format:
    '"IP :remote-addr" - ":method :url" - "STATUS :status" - "REFERRER :referrer" - "RESPONSE TIME :response-time ms"',
  skip: {
    skip: () => process.env.NODE_ENV === 'test'
  }
};

export default function morganMiddleware(
  request: RequestProps<unknown, unknown, unknown, unknown>,
  response: ResponseProps,
  next: NextFunctionProps
): void {
  morgan(morganConfig.format, morganConfig.skip)(request, response, next);
}
