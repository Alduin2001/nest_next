import { IsString } from "class-validator";

export class CreatePostDto {
    @IsString()
    header:string
    @IsString()
    body:string
}
