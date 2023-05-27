import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from '../entities/movie.entity';
import * as fs from 'fs';
import * as path from 'path';
import { CreateNovieInput , CastInput } from '../dto/create-movie.input';
import axios from 'axios';
import { Casts } from 'src/casts/entities/casts.entity';



@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie) private movieRepository: Repository<Movie>,
    @InjectRepository(Casts) private castsRepository: Repository<Casts>,
  ) {}

  async insertMovie(createMovieInput: CreateNovieInput): Promise<Movie> {
    const newMovie = this.movieRepository.create(createMovieInput);
    await this.movieRepository.save(newMovie);
    return newMovie;
  }
  
  
  async loadMovieJSON(): Promise<boolean> {
    try {
      const data = fs.readFileSync(
        path.resolve('src/json/movie_ids_05_15_2023.json'),
        'utf-8',
      );
      const movieIds: any[] = JSON.parse(data);
      for (const movieId of movieIds) {
        const [detailsResponse, creditsResponse] = await Promise.all([
          axios.get(`https://api.themoviedb.org/3/movie/${movieId.id}?api_key=ae050d333acebfc9feca36ee007931ce`),
          axios.get(`https://api.themoviedb.org/3/movie/${movieId.id}/credits?api_key=ae050d333acebfc9feca36ee007931ce`),
        ]);

        const movieData = detailsResponse.data;
        const credits = creditsResponse.data;

        // Obtener los datos de los actores y personajes
        const castData = credits.cast.map((item: any) => ({
          id: movieId.id,
          actor: item.name,
          character: item.character,
        }));

        // Insertar en la tabla cast
        await this.castsRepository.save(castData);

        // Insertar en la tabla movie
        const createMovieInput: CreateNovieInput = {
          id: movieId.id,
          original_title: movieId.original_title,
          overview: movieData.overview,
          casts: castData, // Asigna los datos de los casts aquí
        };        
        await this.insertMovie(createMovieInput);
      }
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }
 
  async getMovies(): Promise<Movie[]> {
    return this.movieRepository.find();
  }

  async getMovieId(id: number): Promise<Movie>{
    return this.movieRepository.findOne({
      where: {
        id,
      },
    });
  }
}
