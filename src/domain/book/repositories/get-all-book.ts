import { postgresHelper } from '@/infra/postgres';
import { BookEntity } from '../entity';

export default async function getAllBookRepository(): Promise<BookEntity[]> {
  const db = postgresHelper.getInstance();

  return db('book').whereNull('deleted_at');
}
