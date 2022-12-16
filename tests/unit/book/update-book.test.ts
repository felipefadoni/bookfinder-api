import { describe, expect, it, jest } from '@jest/globals';
import { randomUUID } from 'crypto';

import * as BookRepositories from '../../../src/domain/book/repositories';
import { updateBookService } from '../../../src/domain/book/services';

describe('test updateBookService', () => {
  it('devera retornar erro quando o ID não for UUID', async () => {
    const newBook = {
      id: '5a4s5da5sd45a4sd',
      author: 'Felipe Fadoni',
      description: 'laksdl aksldkalskd laskdlaksldkaskdas asd',
      image: 'http://testeste.com.br',
      link: 'http://testeste.com.br',
      publishedDate: '2022-10-10',
      title: 'Novo titulo do livro'
    };

    try {
      await updateBookService(newBook);
    } catch (error) {
      expect(error).toHaveProperty('message', '"id" must be a valid GUID');
    }
  });

  it('devera retornar sucesso ao atualizar os dados', async () => {
    const newBook = {
      id: randomUUID(),
      author: 'Felipe Fadoni',
      description: 'laksdl aksldkalskd laskdlaksldkaskdas asd',
      image: 'http://testeste.com.br',
      link: 'http://testeste.com.br',
      publishedDate: '2022-10-10',
      title: 'Novo titulo do livro'
    };

    jest.spyOn(BookRepositories, 'updateBookRepository').mockImplementationOnce(
      async () =>
        new Promise((resolve) => {
          if (newBook) resolve(undefined);
        })
    );

    const service = await updateBookService(newBook);

    expect(service).toBe(undefined);
  });
});
