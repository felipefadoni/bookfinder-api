import { postgresHelper } from '@/infra/postgres';
import { BookEntity } from '../entity';

type Props = {
  title: string;
  author: string;
  description: string;
  image: string;
  link: string;
  published_date: Date;
};

export default async function createBookRepository({
  author,
  description,
  image,
  link,
  published_date,
  title
}: Props): Promise<BookEntity> {
  const db = postgresHelper.getInstance();

  const created = await db('book').insert({ author, description, image, link, published_date, title }).returning('*');

  return created[0];
}
