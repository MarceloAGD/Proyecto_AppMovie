import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateNovieInput{
    @Field()
    id: number;

    @Field()
    title: string;

    @Field()
    poster_path: string;

    @Field()
    overview: string;

}