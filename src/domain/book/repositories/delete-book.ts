import { postgresHelper } from '@/infra/postgres';

type Props = {
  id: string;
};

export default async function deleteBookRepository({ id }: Props): Promise<void> {
  const db = postgresHelper.getInstance();

  await db('book')
    .update({
      deleted_at: new Date()
    })
    .where('id', id);
}
