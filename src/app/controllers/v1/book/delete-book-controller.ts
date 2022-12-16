import { RequestProps, ResponseProps } from '@/config';
import { deleteBookService } from '@/domain/book/services';

type ParamsProps = {
  id: string;
};

export default async function deleteBookController(
  request: RequestProps<ParamsProps, unknown, unknown, unknown>,
  response: ResponseProps
) {
  const { id } = request.params;

  await deleteBookService({ id });

  return response.status(204).json();
}
