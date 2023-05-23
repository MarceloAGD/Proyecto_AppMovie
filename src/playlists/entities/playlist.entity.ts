import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, BaseEntity} from 'typeorm';
import { ObjectType, Field} from '@nestjs/graphql';
import {Movie} from 'src/movies/entities/movie.entity';

@Entity()
@ObjectType()
export class Playlist extends BaseEntity{

    @PrimaryGeneratedColumn()
    @Field()
    id: number;

    @Column()
    @Field()
    name: string;

    @ManyToMany(() => Movie)
    @JoinTable()
    @Field(() => [Movie],{defaultValue: []})
    movies: Movie[];

}