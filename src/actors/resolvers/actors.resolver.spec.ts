import { Test, TestingModule } from '@nestjs/testing';
import { ActorsResolver } from './actors.resolver';

describe('ActorsResolver', () => {
  let resolver: ActorsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ActorsResolver],
    }).compile();

    resolver = module.get<ActorsResolver>(ActorsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
