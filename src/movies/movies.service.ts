import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {Movie} from './movie.entity';
import * as fs from 'fs-extra';

@Injectable()
export class MoviesService {
    constructor(
        @InjectRepository(Movie) private movieRepository: Repository<Movie>
    ) {}

    async cargaDatosDesdeJSON (rutaArchivo: string): Promise<void> {
        const jsonData = await fs.readJson(rutaArchivo, 'utf-8');
        const datos = JSON.parse(jsonData);
        
        for (const dato of datos) {
            const movie = new Movie();
            movie.adult = dato.adult;
            movie.id = dato.id;
            movie.original_title = dato.original_title;
            movie.popularity = dato.popularity;
            movie.video = dato.video;

            await this.movieRepository.save(movie);
        }
    }

    
}
