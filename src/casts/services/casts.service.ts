import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Casts } from '../entities/casts.entity';

@Injectable()
export class CastsService {
  constructor(
    @InjectRepository(Casts)
    private readonly castsRepository: Repository<Casts>,
  ) {
  }

  async insertCasts(castData: any[]): Promise<Casts[]> {
    const casts = castData.map((item) => {
      const cast: Partial<Casts> = {}; // Utilizar Partial para hacer los campos opcionales
      cast.id = item.id;
      cast.actor = item.actor;
      cast.character = item.character;
      return this.castsRepository.create(cast);
    });
    return this.castsRepository.save(casts);
  }

  async getCasts(): Promise<Casts[]> {
    return this.castsRepository.find();
  }
  
  async getAllCastsById(id: number): Promise<Casts[]> {
    return this.castsRepository.find({ where: { id } });
  }
  
  
  
}
