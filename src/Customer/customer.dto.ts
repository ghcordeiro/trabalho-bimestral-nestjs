import { IsInt, IsString, MaxLength, MinLength, IsNumber, IsDate } from 'class-validator';
import { Optional } from '@nestjs/common';

export class CustomerDto {

    @IsInt({ message: 'O valor do campo ID, não é um inteiro válido!' })
    id: number;

    @IsString({ message: 'O valor do campo First name, não é uma string válida!' })
    @MinLength(5, { message: 'O campo First name deve ter no mínimo 5 caracteres.' })
    @MaxLength(15, { message: 'O campo First name deve ter no máximo 15 caracteres.' })
    firstName: string;

    @IsString({ message: 'O valor do campo Last name, não é uma string válida!' })
    @MinLength(5, { message: 'O campo Last name deve ter no mínimo 5 caracteres.' })
    @MaxLength(15, { message: 'O campo Last name deve ter no máximo 15 caracteres.' })
    lastName: string;

    @IsInt({ message: 'O valor do campo CPF, não é um número válido!' })
    cpf: number;

    @IsInt({ message: 'Não é um número válido!' })
    rg: number;

    @Optional()
    @IsString({ message: 'Não é uma data valida'})
    dataBirth: string;
    
    @IsString({ message: 'Não é uma string válida!' })
    @MinLength(5, { message: 'O campo deve ter no mínimo 5 caracteres.' })
    @MaxLength(30, { message: 'O campo deve ter no máximo 30 caracteres.' })
    address: string;

    @Optional()
    complement: string;

    @IsInt({ message: 'Não é um número válido'})
    phone: number;

    @IsString({ message: 'Não é uma string válida!' })
    @MinLength(10, { message: 'O campo deve ter no mínimo 10 caracteres.' })
    @MaxLength(80, { message: 'O campo deve ter no máximo 80 caracteres.' })
    email: string;
}