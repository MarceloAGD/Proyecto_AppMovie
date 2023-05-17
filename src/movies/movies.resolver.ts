import { Resolver } from '@nestjs/graphql';
import {MoviesService} from './movies.service';
import { Query } from '@nestjs/graphql';
import {Movie} from './movie.entity';


@Resolver()
export class MoviesResolver {
    constructor(private movieServices: MoviesService) {}

    @Query((returns) => [Movie])
    movies(){
        const rutaArchivo = 'src/json/movie_ids_05_15_2023.json';
        return this.movieServices.cargaDatosDesdeJSON(rutaArchivo);
    }
}
