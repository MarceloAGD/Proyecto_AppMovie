import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable} from 'typeorm';
import { ObjectType, Field, Int} from '@nestjs/graphql';
import {Movie} from 'src/movies/entities/movie.entity';

@Entity()
@ObjectType()
export class Playlist{

    @PrimaryGeneratedColumn()
    @Field((type) => Int)
    idPlaylist: number;

    @Column()
    @Field()
    name: string;

    @ManyToMany(() => Movie)
    @JoinTable({
        name: "playlist_detail"
    })
    @Field(() => [Movie])
    movies: Movie[];

}