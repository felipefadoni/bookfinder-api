import { appRoutes } from '@/config';
import createBookController from './create-book-controller';
import deleteBookController from './delete-book-controller';
import getAllBookController from './get-all-book-controller';
import updateBookController from './update-book-controller';

const bookRouters = appRoutes
  .get('/', getAllBookController)
  .post('/create', createBookController)
  .put('/update/:id', updateBookController)
  .delete('/delete/:id', deleteBookController);

export default bookRouters;
