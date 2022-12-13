import { describe, expect, it, jest } from '@jest/globals';
import { randomUUID } from 'crypto';
import { CreateBookServiceDTO } from '../../../src/domain/book/dto';
import { BookEntity } from '../../../src/domain/book/entity';
import * as BookRepositories from '../../../src/domain/book/repositories';
import { createBookService } from '../../../src/domain/book/services';

describe('test createBookService', () => {
  it('devera retornar um novo book criado', async () => {
    const id = randomUUID();

    const newBook: CreateBookServiceDTO = {
      author: 'Felipe Fadoni',
      description: 'laksdl aksldkalskd laskdlaksldkaskdas asd',
      image: 'http://testeste.com.br',
      link: 'http://testeste.com.br',
      publishedDate: '2022-10-10',
      title: 'Livro de teste'
    };

    const newBookEntity: BookEntity = {
      id,
      author: 'Felipe Fadoni',
      description: 'laksdl aksldkalskd laskdlaksldkaskdas asd',
      image: 'http://testeste.com.br',
      link: 'http://testeste.com.br',
      published_date: new Date(),
      title: 'Livro de teste'
    };

    jest.spyOn(BookRepositories, 'createBookRepository').mockImplementationOnce(
      async () =>
        new Promise<BookEntity>((resolve) => {
          if (newBookEntity) resolve(newBookEntity);
        })
    );

    const service = await createBookService(newBook);

    expect(service.title).toEqual(newBook.title);
    expect(service.id).toEqual(id);
  });
});
