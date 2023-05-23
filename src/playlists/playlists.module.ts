import { Module } from '@nestjs/common';
import { PlaylistsService } from './services/playlists.service';
import { PlaylistsResolver } from './resolvers/playlists.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Playlist} from './entities/playlist.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Playlist])],
  providers: [PlaylistsService, PlaylistsResolver]
})
export class PlaylistsModule {}
