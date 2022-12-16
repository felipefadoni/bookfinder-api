import { RequestProps, ResponseProps } from '@/config';
import { updateBookService } from '@/domain/book/services';

type ParamsProps = {
  id: string;
};

type BodyProps = {
  title: string;
  author: string;
  description: string;
  link: string;
  publishedDate: string;
};

export default async function updateBookController(
  request: RequestProps<ParamsProps, unknown, BodyProps, unknown>,
  response: ResponseProps
) {
  const { id } = request.params;
  const { author, description, link, publishedDate, title } = request.body;

  await updateBookService({
    author,
    description,
    id,
    link,
    publishedDate,
    title
  });

  return response.status(204).json();
}
