import { Module, OnModuleInit } from '@nestjs/common';
import { MoviesService } from './services/movies.service';
import { MoviesResolver } from './resolvers/movies.resolver';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Movie} from './entities/movie.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Movie])],
  providers: [MoviesService, MoviesResolver],
  exports: [MoviesService],
})

export class MoviesModule implements OnModuleInit{
  constructor(private readonly movieService: MoviesService){}
    
    async onModuleInit(){
      await this.movieService.loadMovieJSON();
    }
  
}
