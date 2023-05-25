import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateNovieInput{
    @Field()
    adult: string;

    @Field()
    id: number;

    @Field()
    original_title: string;

    @Field()
    popularity: number;

    @Field()
    video: string;


}