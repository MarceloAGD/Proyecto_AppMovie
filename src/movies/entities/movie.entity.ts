import { Entity, Column, PrimaryColumn, BaseEntity, ManyToMany } from 'typeorm';
import { ObjectType, Field, Int, Float} from '@nestjs/graphql';
import { Playlist } from 'src/playlists/entities/playlist.entity';

@Entity()
@ObjectType()
export class Movie{

    @PrimaryColumn({type: 'int'})
    @Field((type) => Int)
    id: number;

    @Column()
    @Field()
    original_title: string;

    @Column()
    @Field()
    overview: string;

    @Column()
    @Field()
    poster_path: string;
}