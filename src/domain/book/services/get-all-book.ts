import { BookEntity } from '../entity';
import { getAllBookRepository } from '../repositories';

export default async function getAllBookService(): Promise<BookEntity[]> {
  const books = await getAllBookRepository();

  return books;
}
