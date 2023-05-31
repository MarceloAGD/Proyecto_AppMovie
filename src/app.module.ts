import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { MoviesModule } from './movies/movies.module';
import { PlaylistsModule } from './playlists/playlists.module';
import { ConfigModule } from './config/config.module';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { ConfigService } from './config/config.service';
import { Configuration } from './config/config.keys';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActorsModule } from './actors/actors.module';
import { CastsModule } from './casts/casts.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    NestConfigModule.forRoot({isGlobal:true}),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'silly.db.elephantsql.com',
      port: 5432,
      username: 'szayqztc',
      password: 'ujDtQwXZ_0Vh5gqfDz3zQWIOgQbSOgNI',
      database: 'szayqztc',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      
    }),
    UsersModule,
    MoviesModule,
    ActorsModule,
    CastsModule,
    PlaylistsModule,
    ConfigModule,
    DatabaseModule,
    
  ],
})
export class AppModule {
  static port: number | string;

  constructor(private readonly _configService: ConfigService ){
    AppModule.port = this._configService.get(Configuration.PORT)
  }
}
