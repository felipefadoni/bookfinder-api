import { RequestProps, ResponseProps } from '@/config';
import { getAllBookService } from '@/domain/book/services';

export default async function getAllBookController(
  _: RequestProps<unknown, unknown, unknown, unknown>,
  response: ResponseProps
): Promise<ResponseProps> {
  const result = await getAllBookService();
  return response.json(result);
}
