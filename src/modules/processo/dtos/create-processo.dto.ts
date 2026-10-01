import { IsNotEmpty, MinLength } from "class-validator";

export class CreateProcessoDto {

    @IsNotEmpty({ message: 'O campo número é obrigatório' })
    numero!: string;

    @IsNotEmpty({ message: 'O campo data é obrigatório' })
    data!: Date;

    @IsNotEmpty({ message: 'O campo interessado é obrigatório' })
    @MinLength(5, { message: 'O interessado deve ter no mínimo 5 caracteres' })
    interessado!: string;

    @IsNotEmpty({ message: 'O campo assunto é obrigatório' })
    assunto!: string;
    
    @IsNotEmpty({ message: 'O campo descrição é obrigatório' })
    @MinLength(10, { message: 'A descrição deve ter no mínimo 10 caracteres' })
    descricao!: string;
}
