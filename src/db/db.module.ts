import { Module } from '@nestjs/common';
import { knexOptionsProvider } from './common';
import { InitializeDbService } from './services';

@Module({
  providers: [InitializeDbService, knexOptionsProvider],
})
export class DbModule {}
