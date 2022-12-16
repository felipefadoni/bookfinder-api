import { updateBookValidator } from '@/app/controllers/v1/book/validator';
import AppError from '@/shared/errors/app-errors';
import { parseISO } from 'date-fns';
import { updateBookRepository } from '../repositories';

type Props = {
  id: string;
  title: string;
  author: string;
  description: string;
  link: string;
  publishedDate: string;
};

export default async function updateBookService({ author, description, id, link, publishedDate, title }: Props) {
  const { error } = updateBookValidator.validate({
    author,
    description,
    id,
    link,
    publishedDate,
    title
  });

  if (error) throw new AppError(error.message);

  const publishedDateFormatted = parseISO(publishedDate);

  await updateBookRepository({
    author,
    description,
    id,
    link,
    published_date: publishedDateFormatted,
    title
  });
}
