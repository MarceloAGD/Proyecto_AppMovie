import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from '../entities/movie.entity';
import * as fs from 'fs';
import * as path from 'path';
import { CreateNovieInput } from '../dto/create-movie.input';
import axios from 'axios';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie) private movieRepository: Repository<Movie>,
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
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId.id}?api_key=ae050d333acebfc9feca36ee007931ce`);
        const movieData = response.data;
        const createMovieInput: CreateNovieInput = {
          id: movieId.id,
          original_title: movieId.original_title,
          overview: movieData.overview
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
