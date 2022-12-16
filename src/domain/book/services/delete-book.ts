import { deleteBookValidator } from '@/app/controllers/v1/book/validator';
import AppError from '@/shared/errors/app-errors';
import { deleteBookRepository } from '../repositories';

type Props = {
  id: string;
};

export default async function deleteBookService({ id }: Props): Promise<void> {
  const { error } = deleteBookValidator.validate({
    id
  });

  if (error) throw new AppError(error.message);

  await deleteBookRepository({ id });
}
