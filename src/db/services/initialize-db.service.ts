import { Injectable } from '@nestjs/common';
import Knex from 'knex';
import { Model } from 'objection';

@Injectable()
export class InitializeDbService {
  constructor() {
    const knex = Knex({
      client: 'postgresql',
      connection: {
        host: 'localhost',
        port: 5433,
        db: 'ozon-clone',
        userName: 'root',
        password: 'root',
      },
    });
    Model.knex(knex);
  }
}
