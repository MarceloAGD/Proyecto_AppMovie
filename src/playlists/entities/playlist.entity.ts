import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable, ManyToOne} from 'typeorm';
import { ObjectType, Field, Int} from '@nestjs/graphql';
import {Movie} from 'src/movies/entities/movie.entity';
import { Users } from 'src/users/entities/users.entity';

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

    @Column({type: "int"})
    @Field(() => Int)
    usersId: number;

    @ManyToOne(()=> Users, (user) => user.playlists)
    @Field(() => Users)
    users: Users;

}