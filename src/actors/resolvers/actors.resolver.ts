import { Resolver, Query } from '@nestjs/graphql';
import { ActorsService } from '../services/actors.service';
import { Actor } from '../entities/actor.entity';

@Resolver()
export class ActorsResolver {
    constructor(private actorsService: ActorsService){}

    @Query(() => [Actor])
    Actors(){
        return this.actorsService.findAll();
    }
}
