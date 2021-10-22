import { Module } from '@nestjs/common';
import { InitializeDbService } from './services';

@Module({
  providers: [InitializeDbService],
})
export class DbModule {}
