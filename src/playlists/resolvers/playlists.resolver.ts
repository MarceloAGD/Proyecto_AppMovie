import { Args, Mutation, Resolver,Query, ResolveField, Parent } from '@nestjs/graphql';
import { PlaylistsService } from '../services/playlists.service';
import { CreatePlaylistInput } from '../dto/create-playlist.input';
import * as update from '../dto/update-playlist.input';
import { Playlist } from '../entities/playlist.entity';
import { Users } from 'src/users/entities/users.entity';
import { deletePlaylistInput } from '../dto/delete-playlist.input';


@Resolver(() => Playlist)
export class PlaylistsResolver {
    constructor(private playlistService: PlaylistsService){}
        
    @Mutation((returns) => Playlist)
    createPlaylist(@Args('playlistInput') playlistInput: CreatePlaylistInput){
        return this.playlistService.createPlaylist(playlistInput);
    }

    @Mutation((returns) => Playlist)
    updatePlaylist(@Args('playlistInput') playlistInput: update.addMoviePlaylistInput){
        return this.playlistService.addMoviePlaylist(playlistInput);
    }

    @Query(() => [Playlist])
    Playlists() {
        return this.playlistService.findAll();
    }

    @Query((returns) => [Playlist])
    Playlist(@Args('userId') userId: number){
        return this.playlistService.getPlaylistByUser(userId);
    }

    @ResolveField(() => Users)
    user(@Parent() playlist: Playlist): Promise<Users>{
        return this.playlistService.getUser(playlist.usersId)
    }

    @Mutation(returns => Boolean)
    removeMoviePlaylist(@Args('playlistInput') playlistInput: update.DeleteMoviePlaylistInput): Promise<boolean>{
        return this.playlistService.removeMoviePlaylist(playlistInput);
    }

    @Mutation(returns => Boolean)
    deletePlaylist(@Args('playlistInput') playlistInput: deletePlaylistInput): Promise<boolean>{
        return this.playlistService.deletePlaylist(playlistInput);
    }
}
