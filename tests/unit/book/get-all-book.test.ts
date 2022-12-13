import { describe, expect, it, jest } from '@jest/globals';
import { randomUUID } from 'crypto';
import { BookEntity } from '../../../src/domain/book/entity';
import * as BookRepositories from '../../../src/domain/book/repositories';
import { getAllBookService } from '../../../src/domain/book/services';

describe('test getAllBookService', () => {
  it('devera retornar um array de book', async () => {
    const idA = randomUUID();
    const idB = randomUUID();

    const books: BookEntity[] = [
      {
        id: idA,
        author: 'Felipe Fadoni',
        description: 'laksdl aksldkalskd laskdlaksldkaskdas asd',
        image: 'http://testeste.com.br',
        link: 'http://testeste.com.br',
        published_date: new Date(),
        title: 'Livro de teste'
      },
      {
        id: idB,
        author: 'Testando o Author',
        description: 'laksdl aksldkalskd laskdlaksldkaskdas asd',
        image: 'http://testeste.com.br',
        link: 'http://testeste.com.br',
        published_date: new Date(),
        title: 'Livro de teste agora está ok'
      }
    ];

    jest.spyOn(BookRepositories, 'getAllBookRepository').mockImplementationOnce(
      async () =>
        new Promise<BookEntity[]>((resolve) => {
          if (books) resolve(books);
        })
    );

    const service = await getAllBookService();

    expect(service.length).toEqual(2);
    expect(service[0].id).toEqual(idA);
    expect(service[1].id).toEqual(idB);
    expect(service[1].title).toEqual(books[1].title);
  });
});
