import { Test, TestingModule } from '@nestjs/testing';
import { CastsResolver } from './casts.resolver';

describe('CastsResolver', () => {
  let resolver: CastsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CastsResolver],
    }).compile();

    resolver = module.get<CastsResolver>(CastsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
