import { Module } from '@nestjs/common';
import { PlaylistsService } from './playlists.service';
import { PlaylistsResolver } from './playlists.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Playlist} from './playlist.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Playlist])],
  providers: [PlaylistsService, PlaylistsResolver]
})
export class PlaylistsModule {}
