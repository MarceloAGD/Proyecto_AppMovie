import { Field, InputType } from "@nestjs/graphql";

export interface CreateNovieInput {
    id: number;
    original_title: string;
    overview: string;
    casts: CastInput[];
  }
  
  export interface CastInput {
    actor: string;
    character: string;
  }

@InputType()
export class CreateNovieInput{

    @Field()
    id: number;

    @Field()
    original_title: string;
    
    @Field()
    overview: string;

    @Field()
    poster_path: string;

}