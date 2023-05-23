import { Entity, Column, PrimaryColumn, BaseEntity } from 'typeorm';
import { ObjectType, Field, Int, Float} from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Movie extends BaseEntity{
    @Column()
    @Field({nullable: true})
    adult: string;

    @PrimaryColumn()
    @Field()
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