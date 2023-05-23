import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Playlist } from '../entities/playlist.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PlaylistsService {
    constructor(
        @InjectRepository(Playlist) private playlistRepository: Repository<Playlist>
    ){}
}
