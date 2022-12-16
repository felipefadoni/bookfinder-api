import { postgresHelper } from '@/infra/postgres';

type Props = {
  id: string;
  title: string;
  author: string;
  description: string;
  link: string;
  published_date: Date;
};

export default async function updateBookRepository({
  author,
  description,
  id,
  link,
  published_date,
  title
}: Props): Promise<void> {
  const db = postgresHelper.getInstance();

  await db('book')
    .update({
      author,
      description,
      link,
      published_date,
      title
    })
    .where('id', id);
}
