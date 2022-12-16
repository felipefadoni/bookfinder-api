import { RequestProps, ResponseProps } from '@/config';
import { createBookService } from '@/domain/book/services';

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

  const book = await createBookService({ author, description, image, link, publishedDate, title });

  return response.status(201).json(book);
}
