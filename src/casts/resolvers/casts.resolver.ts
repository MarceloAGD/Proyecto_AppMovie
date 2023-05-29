import { Resolver ,Query} from '@nestjs/graphql';
import { CastsService } from '../services/casts.service';
import { Cast } from '../entities/cast.entity';

@Resolver()
export class CastsResolver {
    constructor(private castsService: CastsService){}
    
    @Query(() => [Cast])
    Casts(){
        return this.castsService.findAll();
    }
}
