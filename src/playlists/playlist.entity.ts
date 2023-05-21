import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable} from 'typeorm';
import { ObjectType, Field, Int, Float} from '@nestjs/graphql';
import {Movie} from 'src/movies/movie.entity';

@Entity()
@ObjectType()
export class Playlist{

    @PrimaryGeneratedColumn()
    @Field()
    id: number;

    @Column()
    @Field()
    name: string;

    @ManyToMany(() => Movie)
    @JoinTable()
    @Field(() => [Movie])
    movies: Movie[];

}