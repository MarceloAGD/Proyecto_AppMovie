import { Args, Mutation, Resolver,Query, ResolveField, Parent } from '@nestjs/graphql';
import { PlaylistsService } from '../services/playlists.service';
import { CreatePlaylistInput } from '../dto/create-playlist.input';
import { Playlist } from '../entities/playlist.entity';
import { Movie } from 'src/movies/entities/movie.entity';

@Resolver()
export class PlaylistsResolver {
    constructor(private playlistService: PlaylistsService){}
        
    @Mutation((returns) => Playlist)
    createPlaylist(@Args('playlistInput') playlistInput: CreatePlaylistInput){
        return this.playlistService.createPlaylist(playlistInput);
    }

    @Mutation((returns) => Playlist)
    updatePlaylist(@Args('idPlaylist') idPlaylist: number, @Args('idMovie') idMovie: number){
        return this.playlistService.addMoviePlaylist(idPlaylist,idMovie);
    }

    @Query(() => [Playlist])
    Playlists() {
        return this.playlistService.getPlaylist();
    }

}
