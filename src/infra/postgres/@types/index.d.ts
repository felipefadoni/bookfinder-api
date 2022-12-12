import { BookEntity } from '@/domain/book/entity';

declare module 'knex/types/tables' {
  interface Tables {
    book: BookEntity;
  }
}
