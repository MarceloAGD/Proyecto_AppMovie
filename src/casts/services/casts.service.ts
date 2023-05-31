import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cast } from '../entities/cast.entity';
import { Repository } from 'typeorm';
import { ActorsService } from 'src/actors/services/actors.service';
import { Actor } from 'src/actors/entities/actor.entity';
import { MoviesService } from 'src/movies/services/movies.service';

@Injectable()
export class CastsService {
    constructor(
        @InjectRepository(Cast) 
        private castsRepository: Repository<Cast>,
    ){}

    async findAll(): Promise<Cast[]> {
        return this.castsRepository.find({relations: ['movie','actor']});
      }
    
    async findOne(idMovie: number): Promise<Cast>{
        return this.castsRepository.findOne({where:{movie:{id:idMovie}}, relations:['movie', 'actor']})
    }
    
}