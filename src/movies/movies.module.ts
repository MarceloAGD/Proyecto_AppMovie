import { Module, OnModuleInit } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MoviesResolver } from './movies.resolver';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Movie} from './movie.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Movie])],
  providers: [MoviesService, MoviesResolver]
})

export class MoviesModule implements OnModuleInit{
  constructor(private readonly movieService: MoviesService){}
    
    async onModuleInit(){
      await this.movieService.cargaDatosDesdeJSON();
    }
  
}
