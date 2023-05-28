import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './services/users.service';
import { Users } from './entities/users.entity';
import { UsersResolver } from './resolvers/users.resolver';
import { PlaylistsModule } from 'src/playlists/playlists.module';

@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  providers: [UsersService, UsersResolver],
  exports:[UsersService],
})
export class UsersModule {}
