import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Playlist } from '../entities/playlist.entity';
import { Repository } from 'typeorm';
import { CreatePlaylistInput } from '../dto/create-playlist.input';
import { MoviesService } from 'src/movies/services/movies.service';
import { UsersService } from 'src/users/services/users.service';
import { Users } from 'src/users/entities/users.entity';
import * as update from '../dto/update-playlist.input';
import { deletePlaylistInput } from '../dto/delete-playlist.input';


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

    async getPlaylistByUser(usersId: number): Promise<Playlist[]>{
        return this.playlistsRepository.find({where: {usersId}, relations:['movies']})
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

    async addMoviePlaylist(update: update.addMoviePlaylistInput): Promise<Playlist>{
        const idPlaylist = update.idPlaylist;
        const playlist = await this.playlistsRepository.findOne({where:{idPlaylist},relations:['movies']});
        const movie = await this.moviesService.findOne(update.id);

        if(playlist.movies){
            playlist.movies.push(movie)
            return this.playlistsRepository.save(playlist);
        }
    }

    async removeMoviePlaylist(remove: update.DeleteMoviePlaylistInput): Promise<boolean> {
        try{
            const playlist = await this.playlistsRepository.findOne({ where: { idPlaylist: remove.idPlaylist}, relations: ['movies'] });
            const movie = await this.moviesService.findOne(remove.id);
                        
            playlist.movies = playlist.movies.filter((movieItem) => movieItem.id !== movie.id);

            await this.playlistsRepository.save(playlist);

            return true;
            
        }catch (err) {
            console.error(err);
            return false;
        }
    }

    async deletePlaylist(deletePlaylist: deletePlaylistInput): Promise<boolean>{
        try{
            const playlist = await this.playlistsRepository.findOne({where: {idPlaylist: deletePlaylist.idPlaylist, usersId: deletePlaylist.idUser}});

            await this.playlistsRepository.delete(playlist);
            
            return true;

        }catch (err) {
        console.error(err);
        return false;
        }
        
    }

    async updatePlaylist(update: update.updatePlaylistInput): Promise<boolean>{
        try{
            const playlist = await this.playlistsRepository.findOne({where: {idPlaylist: update.idPlaylist, usersId: update.usersId}, relations:['movies']})
            playlist.name=update.name;

            await this.playlistsRepository.save(playlist);

            return true;

        }catch (err) {
            console.error(err);
            return false;
        }
    }
}
