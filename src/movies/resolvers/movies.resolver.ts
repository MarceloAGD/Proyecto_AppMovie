import { Args, Resolver } from '@nestjs/graphql';
import {MoviesService} from '../services/movies.service';
import { Query } from '@nestjs/graphql';
import {Movie} from '../entities/movie.entity'

@Resolver()
export class MoviesResolver {
    constructor(private movieService: MoviesService) {}

    @Query(() => [Movie])
    async Movies() {
        return this.movieService.getMovies();
    }

    @Query(() => Movie)
    MovieId(@Args('id') id: number): Promise<Movie>{
        return this.movieService.getMovieId(id);
    }
}
