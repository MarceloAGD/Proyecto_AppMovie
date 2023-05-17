import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field, Int, Float} from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Movie{
    @Column()
    @Field()
    adult: boolean;

    @PrimaryGeneratedColumn()
    @Field((type) => Int)
    id: number;

    @Column()
    @Field()
    original_title: string;

    @Column()
    @Field((type) => Float)
    popularity: number;

    @Column()
    @Field()
    video: boolean;
}