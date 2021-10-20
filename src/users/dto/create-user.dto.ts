import { IsEmail, IsNotEmpty, IsOptional } from "class-validator";


export class CreateUserDto {

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    surname: string;

    @IsEmail()
    email: string;

    @IsNotEmpty()
    rangeAge: string;

    @IsNotEmpty()
    country: string;

    @IsNotEmpty()
    total: number;

    @IsNotEmpty()
    blockAB: number;

    @IsNotEmpty()
    blockCDE: number;

    @IsNotEmpty()
    paid: boolean;

    @IsNotEmpty()
    timeStamp: Date;
    
    @IsNotEmpty()
    mailRequired: boolean;

    @IsOptional()
    plan: number;
}
