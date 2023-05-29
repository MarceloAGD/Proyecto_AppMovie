import { Entity, Column, PrimaryColumn, OneToMany} from 'typeorm';
import { ObjectType, Field, Int} from '@nestjs/graphql';
import { Cast } from '../../casts/entities/cast.entity';
import { Movie } from 'src/movies/entities/movie.entity';

@Entity()
@ObjectType()
export class Actor{

    @PrimaryColumn()
    @Field((type) => Int, {nullable:true})
    id: number;

    @Column()
    @Field({nullable: true})
    name: string;

    @OneToMany(() => Cast, movie => movie.actor)
    @Field(() => [Cast],{nullable: true})
    cast: Cast[];

}