import { Entity, Column, PrimaryColumn, BaseEntity, ManyToMany } from 'typeorm';
import { ObjectType, Field, Int, Float} from '@nestjs/graphql';
import { Playlist } from 'src/playlists/entities/playlist.entity';

@Entity()
@ObjectType()
export class Movie{
    @Column()
    @Field({nullable: true})
    adult: string;

    @PrimaryColumn({type: 'int'})
    @Field((type) => Int)
    id: number;

    @Column()
    @Field()
    original_title: string;

    @Column({type: 'decimal'})
    @Field((type) => Float)
    popularity: number;

    @Column()
    @Field({nullable: true})
    video: string;

}