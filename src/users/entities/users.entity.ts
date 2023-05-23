import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn , Unique, BaseEntity } from 'typeorm';
import { ObjectType, Field, Int, Float} from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Users extends BaseEntity{
    @PrimaryGeneratedColumn()
    @Field((type) => Int)
    id: number;
    
    @Column()
    @Unique(["email"]) // Indica que el campo debe ser único en la columna "email"
    @Field()
    email: string;
    
    @Column()
    @Field()
    name: string;
    
    @Column()
    @Field()
    password: string;
}
    

