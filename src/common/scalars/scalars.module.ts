import { Module } from '@nestjs/common';
import { UrlScalarHelper } from '.';
import { EmailScalarHelper } from './email.scalar';

@Module({
  providers: [EmailScalarHelper, UrlScalarHelper],
  exports: [EmailScalarHelper, UrlScalarHelper],
})
export class ScalarsModule {}
