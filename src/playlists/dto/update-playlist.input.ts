import { Field, InputType } from "@nestjs/graphql";
import { IsInt, IsString } from "class-validator";

@InputType()
export class addMoviePlaylistInput{
    @IsInt()
    @Field()
    idPlaylist: number;

    @IsInt()
    @Field()
    id: number;
}

@InputType()
export class DeleteMoviePlaylistInput{   
    @IsInt()
    @Field()
    idPlaylist: number;

    @IsInt()
    @Field()
    id: number;
}

@InputType()
export class updatePlaylistInput{
    @IsInt()
    @Field()
    idPlaylist: number;

    @IsString()
    @Field()
    name: string

    @IsInt()
    @Field()
    usersId?: number;
}