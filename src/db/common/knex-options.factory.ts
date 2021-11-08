import { Provider } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Knex from 'knex';

export const KNEX_OPTIONS_KEY = 'knexOptions';

export const knexOptionsProvider: Provider = {
  provide: KNEX_OPTIONS_KEY,
  useFactory: (configService: ConfigService): Knex.Config => {
    return {
      client: 'postgresql',
      connection: {
        host: configService.get<string>('DB_HOST'),
        port: parseInt(configService.get<string>('DB_PORT')),
        database: configService.get<string>('DB_NAME'),
        user: configService.get<string>('DB_USER'),
        password: configService.get<string>('DB_PASSWORD'),
      },
      migrations: { tableName: '__migrations__' },
      debug: true,
    };
  },
  inject: [ConfigService],
};
