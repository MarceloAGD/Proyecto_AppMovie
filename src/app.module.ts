import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { MoviesModule } from './movies/movies.module';
import { PlaylistsModule } from './playlists/playlists.module';
import { ConfigModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';
import { ConfigService } from './config/config.service';
import { Configuration } from './config/config.keys';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '0605',
      database: 'movieDB',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      
    }),
    UsersModule,
    MoviesModule,
    PlaylistsModule,
    ConfigModule,
    DatabaseModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  static port: number | string;

  constructor(private readonly _configService: ConfigService ){
    AppModule.port = this._configService.get(Configuration.PORT)
  }
}
