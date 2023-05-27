import { Module, OnModuleInit } from '@nestjs/common';
import { MoviesService } from './services/movies.service';
import { MoviesResolver } from './resolvers/movies.resolver';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Movie} from './entities/movie.entity';
import { Casts } from 'src/casts/entities/casts.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Movie, Casts])],
  providers: [MoviesService, MoviesResolver],
  exports: [MoviesService],
})


export class MoviesModule implements OnModuleInit{
  constructor(private readonly movieService: MoviesService){}
    
    async onModuleInit(){
      await this.movieService.loadMovieJSON();
      
    }
  
}