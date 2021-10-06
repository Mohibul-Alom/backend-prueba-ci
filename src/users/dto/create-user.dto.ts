import { IsEmail, IsNotEmpty, IsOptional } from "class-validator";


export class CreateUserDto {

    @IsNotEmpty()
    name: string;

    @IsEmail()
    email: string;

    @IsNotEmpty()
    genere: string;

    @IsNotEmpty()
    education: string;

    @IsNotEmpty()
    birhyear: string;

    @IsNotEmpty()
    country: string;

    @IsOptional()
    points:number;

}
