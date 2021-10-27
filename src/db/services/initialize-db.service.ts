import * as Knex from 'knex';
import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'objection';
import { KNEX_OPTIONS_KEY } from '../common';

@Injectable()
export class InitializeDbService {
  constructor(@Inject(KNEX_OPTIONS_KEY) options: Knex.Config) {
    const knexClient = Knex(options);
    Model.knex(knexClient);
  }
}
