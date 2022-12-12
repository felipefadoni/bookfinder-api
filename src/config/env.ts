import dotenv from 'dotenv';

dotenv.config();

const {
  NODE_ENV,
  PORT,
  DATABASE_HOST,
  DATABASE_PORT,
  DATABASE_NAME,
  DATABASE_USER,
  DATABASE_PASSWORD,
  DATABASE_CLIENT,
  DATABASE_POOL_MIN,
  DATABASE_POOL_MAX
} = process.env;

const env = {
  nodeEnv: String(NODE_ENV),
  port: Number(PORT),
  databaseHost: String(DATABASE_HOST),
  databasePort: Number(DATABASE_PORT),
  databaseName: String(DATABASE_NAME),
  databaseUser: String(DATABASE_USER),
  databasePassword: String(DATABASE_PASSWORD),
  databaseClient: String(DATABASE_CLIENT),
  databasePoolMin: Number(DATABASE_POOL_MIN),
  databasePoolMax: Number(DATABASE_POOL_MAX)
};

export default env;
