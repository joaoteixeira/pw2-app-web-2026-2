import { Body, Controller, Get, Post, Redirect, Render } from '@nestjs/common';
import { ProcessoService } from './processo.service';
import { helpers } from './processo.view.helpers';
import { CreateProcessoDto } from './dtos/create-processo.dto';
import { ValidationView } from 'nest-validation-view';

@Controller('processos')
export class ProcessoController {

    constructor(private readonly processoService: ProcessoService) {}

    @Get()
    @Render('processo/index')
    async getAll(): Promise<object> {
        let processos = await this.processoService.findAll(); 

        return { listaProcessos: processos, _h: helpers }
    }

    @Get('novo')
    @Render('processo/formulario')
    async formularioNovo(): Promise<object> {
        return {};
    }

    @Post('novo')
    @Redirect('/processos')
    @ValidationView('processo/formulario', ({ request, errors }) => {
        return {
            ...request.body,
            errors
        };
    })
    async formularioNovoSalvar(@Body() dados: CreateProcessoDto): Promise<void> {
        await this.processoService.create(dados);
    }
}
