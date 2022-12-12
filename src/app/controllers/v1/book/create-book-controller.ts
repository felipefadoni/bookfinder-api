import { RequestProps, ResponseProps } from '@/config';
import { createBookService } from '@/domain/book/services';
import AppError from '@/shared/errors/app-errors';
import { createBookValidator } from './validator';

type BodyProps = {
  title: string;
  author: string;
  description: string;
  image: string;
  link: string;
  publishedDate: string;
};

export default async function createBookController(
  request: RequestProps<unknown, unknown, BodyProps, unknown>,
  response: ResponseProps
) {
  const { author, description, image, link, publishedDate, title } = request.body;

  const { error } = createBookValidator.validate({
    author,
    description,
    link,
    publishedDate,
    title
  });

  if (error) {
    throw new AppError(error.message, 400);
  }

  const book = await createBookService({ author, description, image, link, publishedDate, title });

  return response.status(201).json(book);
}
