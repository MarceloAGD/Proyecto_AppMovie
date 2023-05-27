import { Module } from '@nestjs/common';
import { CastsResolver } from './resolvers/casts.resolver';

@Module({
  providers: [CastsResolver]
})
export class CastsModule {}
