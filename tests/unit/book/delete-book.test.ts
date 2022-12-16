import { describe, expect, it, jest } from '@jest/globals';
import { randomUUID } from 'crypto';

import * as BookRepositories from '../../../src/domain/book/repositories';
import { deleteBookService } from '../../../src/domain/book/services';
import AppError from '../../../src/shared/errors/app-errors';

describe('test deleteBookService', () => {
  it('devera retornar erro quando o ID informado não for UUID', async () => {
    try {
      await deleteBookService({ id: 'lla0w20-2920' });
    } catch (error) {
      expect(error).toBeInstanceOf(AppError);
      expect(error).toHaveProperty('message', '"id" must be a valid GUID');
    }
  });

  it('devera retornar sucesso', async () => {
    const id = randomUUID();

    jest.spyOn(BookRepositories, 'deleteBookRepository').mockImplementationOnce(
      async () =>
        new Promise((resolve) => {
          if (id) resolve(undefined);
        })
    );

    const service = await deleteBookService({ id });

    expect(service).toBe(undefined);
  });
});
