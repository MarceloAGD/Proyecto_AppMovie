import { Field, InputType } from "@nestjs/graphql";
import { IsInt } from "class-validator";

@InputType()
export class CreatePlaylistInput{
    @Field()
    name: string;

    @IsInt()
    @Field()
    movieId?: number;
}