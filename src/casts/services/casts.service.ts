import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cast } from '../entities/cast.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CastsService {
    constructor(
        @InjectRepository(Cast) 
        private castsRepository: Repository<Cast>,
    ){}

    async findAll(): Promise<Cast[]> {
        return this.castsRepository.find();
      }
}