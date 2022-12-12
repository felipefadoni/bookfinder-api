import { appRoutes } from '@/config';
import createBookController from './create-book-controller';
import getAllBookController from './get-all-book-controller';

const bookRouters = appRoutes.get('/', getAllBookController).post('/create', createBookController);

export default bookRouters;
