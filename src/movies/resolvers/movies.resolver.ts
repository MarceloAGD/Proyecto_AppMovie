import { Resolver } from '@nestjs/graphql';
import {MoviesService} from '../services/movies.service';
import { Query } from '@nestjs/graphql';
import {Movie} from '../entities/movie.entity'

@Resolver()
export class MoviesResolver {
    constructor(private movieService: MoviesService) {}

    @Query(() => [Movie])
        async getMovies() {
        return this.movieService.getMovies();
    }
}
