import { Resolver ,Query, ResolveField, Parent, Args} from '@nestjs/graphql';
import { CastsService } from '../services/casts.service';
import { Cast } from '../entities/cast.entity';
import { Actor } from 'src/actors/entities/actor.entity';

@Resolver(() => Cast)
export class CastsResolver {
    constructor(private castsService: CastsService){}
    
    @Query(() => [Cast])
    Casts(){
        return this.castsService.findAll();
    }

    @Query(() => Cast)
    Cast(@Args('idCast') idCast: number){
        return this.castsService.findOne(idCast);
    }

}
