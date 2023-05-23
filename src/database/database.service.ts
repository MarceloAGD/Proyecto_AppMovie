import { TypeOrmModule } from "@nestjs/typeorm";
import { Configuration } from "src/config/config.keys";
import { ConfigModule } from "src/config/config.module";
import { ConfigService } from "src/config/config.service";
import { ConnectOptions } from "typeorm";

export const databaseProviders = [
    TypeOrmModule.forRootAsync({
        imports: [ConfigModule],
        inject: [ConfigService],
        async useFactory (config: ConfigService){
            return {
                type: 'postgres' as 'postgres',
                host: config.get(Configuration.HOST),
                username: config.get(Configuration.USERNAME),
                password: config.get(Configuration.PASSWORD),
                entities: [__dirname + '/../**/*.entity{.ts,.js}'],               

            } as ConnectOptions
        }
    })
]