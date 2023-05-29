import { Entity, Column, PrimaryColumn, ManyToMany, OneToMany} from 'typeorm';
import { ObjectType, Field, Int} from '@nestjs/graphql';
import { Playlist } from 'src/playlists/entities/playlist.entity';
import { Actor } from 'src/actors/entities/actor.entity';
import { Cast } from 'src/casts/entities/cast.entity';

@Entity()
@ObjectType()
export class Movie{

    @PrimaryColumn({type: 'int'})
    @Field((type) => Int)
    id: number;

    @Column()
    @Field()
    title: string;

    @Column()
    @Field({nullable: true})
    poster_path: string;

    @Column()
    @Field({nullable: true})
    overview: string;

    @ManyToMany(() => Playlist, playlist => playlist.movies)
    @Field(() => [Playlist])
    playlists: Playlist[];

    @OneToMany(() => Cast, actor => actor.movie)
    @Field(() => [Cast],{nullable: true})
    cast: Cast[];

}