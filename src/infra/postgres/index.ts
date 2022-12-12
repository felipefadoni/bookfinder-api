import { env } from '@/config';
import knex, { Knex } from 'knex';

interface ConnectProps {
  databaseHost: string;
  databaseName: string;
  databaseUser: string;
  databasePassword: string;
  databasePort: number;
  databaseClient: string;
  databasePoolMin: number;
  databasePoolMax: number;
}

export const postgresHelper = {
  client: null as unknown as Knex,
  databaseHost: null as unknown as string,
  databaseName: null as unknown as string,
  databaseUser: null as unknown as string,
  databasePassword: null as unknown as string,
  databasePort: null as unknown as number,
  databaseClient: null as unknown as string,
  databasePoolMin: null as unknown as number,
  databasePoolMax: null as unknown as number,

  connect({
    databaseClient,
    databaseHost,
    databaseName,
    databasePassword,
    databasePoolMax,
    databasePoolMin,
    databasePort,
    databaseUser
  }: ConnectProps): void {
    this.databaseClient = databaseClient;
    this.databaseHost = databaseHost;
    this.databaseName = databaseName;
    this.databasePassword = databasePassword;
    this.databasePoolMax = databasePoolMax;
    this.databasePoolMin = databasePoolMin;
    this.databasePort = databasePort;
    this.databaseUser = databaseUser;

    this.client = knex({
      client: this.databaseClient,
      connection: {
        host: this.databaseHost,
        database: this.databaseName,
        user: this.databaseUser,
        password: this.databasePassword,
        port: this.databasePort
      },
      pool: {
        min: this.databasePoolMin,
        max: this.databasePoolMax
      }
    });
  },

  async disconnect() {
    await this.client.destroy();
    this.client = null as unknown as Knex;
  },

  getInstance(): Knex {
    if (this.client) return this.client;

    this.connect({
      databaseClient: env.databaseClient,
      databaseHost: env.databaseHost,
      databaseName: env.databaseName,
      databasePassword: env.databasePassword,
      databasePoolMax: env.databasePoolMax,
      databasePoolMin: env.databasePoolMin,
      databasePort: env.databasePort,
      databaseUser: env.databaseUser
    });

    return this.client;
  }
};
