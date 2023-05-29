import { Field, InputType } from "@nestjs/graphql";

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