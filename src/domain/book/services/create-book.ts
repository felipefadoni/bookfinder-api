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
