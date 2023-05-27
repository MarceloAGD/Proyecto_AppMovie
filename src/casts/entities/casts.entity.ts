import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToMany } from 'typeorm';
import { ObjectType, Field, Int, Float} from '@nestjs/graphql';
import { Movie } from 'src/movies/entities/movie.entity';


@Entity()
@ObjectType()
export class Casts{
    @PrimaryGeneratedColumn()
    @Field((type) => Int)
    idCast: number;

    @Column({type: 'int'})
    @Field((type) => Int)
    id: number;

    @Column()
    @Field()
    actor: string;

    @Column()
    @Field()
    character: string;


}    

