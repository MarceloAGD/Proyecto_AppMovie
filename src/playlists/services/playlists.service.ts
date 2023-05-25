import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Playlist } from '../entities/playlist.entity';
import { Repository } from 'typeorm';
import { CreatePlaylistInput } from '../dto/create-playlist.input';
import {UpdatePlaylistInput} from '../dto/update-playlist.input';
import { Movie } from 'src/movies/entities/movie.entity';
import { MoviesService } from 'src/movies/services/movies.service';

@Injectable()
export class PlaylistsService {
    constructor(
        @InjectRepository(Playlist) 
        private playlistsRepository: Repository<Playlist>,
        private moviesService: MoviesService,
    ){}

    async getPlaylist(): Promise<Playlist[]> {
        return this.playlistsRepository.find({relations: ['movies']});
      }
    
    async getMovieId(id: number): Promise<Movie> {
        return this.moviesService.getMovieId(id)
      }

    async createPlaylist(playlist: CreatePlaylistInput): Promise<Playlist>{
        const newPlaylist = new Playlist();    
        newPlaylist.name=playlist.name;
        const movie = await this.moviesService.getMovieId(playlist.movieId);
        newPlaylist.movies = [movie];

        return this.playlistsRepository.save(newPlaylist);
    }

    async addMoviePlaylist(idPlaylist: number, id: number){
        const playlist = await this.playlistsRepository.findOne({where:{idPlaylist},relations:['movies']});
        const movie = await this.moviesService.getMovieId(id);

        if(playlist.movies){
            playlist.movies.push(movie)
            return this.playlistsRepository.save(playlist);
        }
    
    }
}
