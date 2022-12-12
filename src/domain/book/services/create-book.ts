import { parseISO } from 'date-fns';
import { BookEntity } from '../entity';

import { createBookRepository } from '../repositories';

type Props = {
  title: string;
  author: string;
  description: string;
  image: string;
  link: string;
  publishedDate: string;
};

export default async function createBookService({
  author,
  description,
  image,
  link,
  publishedDate,
  title
}: Props): Promise<BookEntity> {
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
