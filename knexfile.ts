import { env } from './src/config';

export default {
  client: env.databaseClient,
  connection: {
    host: env.databaseHost,
    database: env.databaseName,
    user: env.databaseUser,
    password: env.databasePassword,
    port: env.databasePort
  },
  pool: {
    min: env.databasePoolMin,
    max: env.databasePoolMax
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: './src/infra/postgres/migrations'
  }
};
