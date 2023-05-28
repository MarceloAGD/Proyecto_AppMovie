import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from '../entities/movie.entity';
import * as fs from 'fs';
import * as path from 'path';
import { CreateNovieInput } from '../dto/create-movie.input';

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
      const movies: Movie[] = JSON.parse(data);
      for (const movie of movies) {
        await this.insertMovie(movie);
      }
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }

  async findAll(): Promise<Movie[]> {
    return this.movieRepository.find();
  }

  async findOne(id: number): Promise<Movie>{
    return this.movieRepository.findOne({
      where: {
        id,
      },
    });
  }
}
