import { Entity, Column, PrimaryColumn, BaseEntity, ManyToMany } from 'typeorm';
import { ObjectType, Field, Int, Float} from '@nestjs/graphql';
import { Movie } from 'src/movies/entities/movie.entity';


@Entity()
@ObjectType()
export class Casts{
    @PrimaryColumn({type: 'int'})
    @Field((type) => Int)
    id: number;

    @Column()
    @Field()
    actor: string;

    @Column()
    @Field()
    character: string;

    @ManyToMany(() => Movie, movie => movie.casts)
    movies: Movie[];

}    

