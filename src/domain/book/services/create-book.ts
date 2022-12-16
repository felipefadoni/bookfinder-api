import { createBookValidator } from '@/app/controllers/v1/book/validator';
import AppError from '@/shared/errors/app-errors';
import { parseISO } from 'date-fns';

import { CreateBookServiceDTO } from '../dto';
import { BookEntity } from '../entity';
import { createBookRepository } from '../repositories';

export default async function createBookService({
  author,
  description,
  image,
  link,
  publishedDate,
  title
}: CreateBookServiceDTO): Promise<BookEntity> {
  const { error } = createBookValidator.validate({
    author,
    description,
    link,
    publishedDate,
    title
  });

  if (error) throw new AppError(error.message, 400);

  const publishedDateFormatted = parseISO(publishedDate);

  const newBook = await createBookRepository({
    author,
    description,
    image,
    link,
    published_date: publishedDateFormatted,
    title
  });

  return newBook;
}
