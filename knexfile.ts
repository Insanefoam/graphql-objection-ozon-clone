// Update with your config settings.
import { config as envConfig } from 'dotenv';
import { join } from 'path';
import { Config } from 'knex';

envConfig({ path: './local.env' });

const config: Config = {
  client: 'postgresql',
  connection: {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  },
  migrations: {
    tableName: '__migrations__',
    directory: join(__dirname, 'src/db/migrations'),
  },
  seeds: {
    directory: join(__dirname, 'src/db/seeds'),
  },
};

export default {
  development: config,
  production: config,
  staging: config,
};
