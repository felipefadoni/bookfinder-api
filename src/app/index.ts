import { app, morganMiddleware } from '@/config';
import { errorHandlingMiddleware } from '@/shared/middleware';
import v1Router from './controllers/v1';

app.use(morganMiddleware);
app.use('/v1', v1Router);
app.use(errorHandlingMiddleware);

export default app;
