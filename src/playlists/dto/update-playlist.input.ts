import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class UpdatePlaylistInput{
    @Field()
    id: number;
    
    @Field()
    name: string;

    @Field()
    movies: number;
}