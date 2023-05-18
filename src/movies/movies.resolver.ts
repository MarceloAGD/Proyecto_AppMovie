import { Resolver } from '@nestjs/graphql';
import {MoviesService} from './movies.service';
import { Query } from '@nestjs/graphql';
import {Movie} from './movie.entity'

@Resolver()
export class MoviesResolver {
    constructor(private movieService: MoviesService) {}

    @Query(() => [Movie])
        async getMovies() {
        return this.movieService.getMovies();
    }
}
