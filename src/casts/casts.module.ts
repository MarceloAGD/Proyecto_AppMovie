import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Casts } from './entities/casts.entity';
import { CastsResolver } from './resolvers/casts.resolver';
import { CastsService } from './services/casts.service';

@Module({
  imports: [TypeOrmModule.forFeature([Casts])],
  providers: [CastsService, CastsResolver],
})
export class CastsModule {}
