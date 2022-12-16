import { describe, expect, it, jest } from '@jest/globals';
import { randomUUID } from 'crypto';
import { CreateBookServiceDTO } from '../../../src/domain/book/dto';
import { BookEntity } from '../../../src/domain/book/entity';
import * as BookRepositories from '../../../src/domain/book/repositories';
import { createBookService } from '../../../src/domain/book/services';
import AppError from '../../../src/shared/errors/app-errors';

describe('test createBookService', () => {
  it('devera retornar erro quando o title não for informado', async () => {
    const newBook: CreateBookServiceDTO = {
      author: 'Felipe Fadoni',
      description: 'laksdl aksldkalskd laskdlaksldkaskdas asd',
      image: 'http://testeste.com.br',
      link: 'http://testeste.com.br',
      publishedDate: '2022-10-10',
      title: ''
    };
    try {
      await createBookService(newBook);
    } catch (error) {
      expect(error).toBeInstanceOf(AppError);
      expect(error).toHaveProperty('message', '"title" is not allowed to be empty');
    }
  });

  it('devera retornar erro quando o title possuir 3 caracteres', async () => {
    const newBook: CreateBookServiceDTO = {
      author: 'Felipe Fadoni',
      description: 'laksdl aksldkalskd laskdlaksldkaskdas asd',
      image: 'http://testeste.com.br',
      link: 'http://testeste.com.br',
      publishedDate: '2022-10-10',
      title: 'Tit'
    };
    try {
      await createBookService(newBook);
    } catch (error) {
      expect(error).toBeInstanceOf(AppError);
      expect(error).toHaveProperty('message', '"title" length must be at least 5 characters long');
    }
  });

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
