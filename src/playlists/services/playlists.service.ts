import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Playlist } from '../entities/playlist.entity';
import { Repository } from 'typeorm';
import { CreatePlaylistInput } from '../dto/create-playlist.input';
import { MoviesService } from 'src/movies/services/movies.service';
import { UsersService } from 'src/users/services/users.service';
import { Users } from 'src/users/entities/users.entity';

@Injectable()
export class PlaylistsService {
    constructor(
        @InjectRepository(Playlist) 
        private playlistsRepository: Repository<Playlist>,
        private moviesService: MoviesService,
        private usersService: UsersService,
    ){}

    async findAll(): Promise<Playlist[]> {
        return this.playlistsRepository.find({relations: ['movies']});
      }

    async getUser(userId: number): Promise<Users>{
        return this.usersService.findOne(userId);
    }

    async createPlaylist(playlist: CreatePlaylistInput): Promise<Playlist>{
        const newPlaylist = new Playlist();    
        newPlaylist.name=playlist.name;
        newPlaylist.usersId=playlist.usersId;

        return this.playlistsRepository.save(newPlaylist);
    }

    async addMoviePlaylist(idPlaylist: number, id: number){
        const playlist = await this.playlistsRepository.findOne({where:{idPlaylist},relations:['movies']});
        const movie = await this.moviesService.findOne(id);

        if(playlist.movies){
            playlist.movies.push(movie)
            return this.playlistsRepository.save(playlist);
        }
    }


}
