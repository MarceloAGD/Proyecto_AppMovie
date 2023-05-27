import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { Casts } from '../entities/casts.entity';
import { CastsService } from '../services/casts.service';

@Resolver()
export class CastsResolver {
  constructor(private readonly castsService: CastsService) {}

  @Query((returns) => [Casts])
  async casts(): Promise<Casts[]> {
    return this.castsService.getCasts();
  }

  @Query(() => [Casts])
  async getAllCastsById(@Args('id', { type: () => Int }) id: number): Promise<Casts[]> {
    return this.castsService.getAllCastsById(id);
  }
}
