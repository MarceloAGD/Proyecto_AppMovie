import { Module, forwardRef } from '@nestjs/common';
import { CastsService } from './services/casts.service';
import { CastsResolver } from './resolvers/casts.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cast } from './entities/cast.entity';
import { MoviesModule } from 'src/movies/movies.module';

@Module({
  imports: [TypeOrmModule.forFeature([Cast]), forwardRef(() =>MoviesModule)],
  providers: [CastsService, CastsResolver],
  exports: [CastsService]
})
export class CastsModule {}
