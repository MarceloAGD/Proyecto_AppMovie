import { Entity, Column, PrimaryColumn, BaseEntity, ManyToMany, JoinTable } from 'typeorm';
import { ObjectType, Field, Int, Float} from '@nestjs/graphql';
import { Casts } from 'src/casts/entities/casts.entity';

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

}