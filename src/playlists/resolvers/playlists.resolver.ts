import { Args, Mutation, Resolver,Query, ResolveField, Parent } from '@nestjs/graphql';
import { PlaylistsService } from '../services/playlists.service';
import { CreatePlaylistInput } from '../dto/create-playlist.input';
import { Playlist } from '../entities/playlist.entity';
import { Users } from 'src/users/entities/users.entity';

@Resolver(() => Playlist)
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
        return this.playlistService.findAll();
    }

    @ResolveField(() => Users)
    user(@Parent() playlist: Playlist): Promise<Users>{
        return this.playlistService.getUser(playlist.usersId)
    }
}
