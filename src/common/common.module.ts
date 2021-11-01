import { Module } from '@nestjs/common';
import { ScalarsModule } from './scalars/scalars.module';

@Module({
  imports: [ScalarsModule],
})
export class CommonModule {}
