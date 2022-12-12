import { appRoutes } from '@/config';
import bookRouters from './book';

const v1Router = appRoutes
  .get('/', (req, res) =>
    res.status(200).json({
      message: 'Version 1',
      date: new Date()
    })
  )
  .use('/book', bookRouters);

export default v1Router;
