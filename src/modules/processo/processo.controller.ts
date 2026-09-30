import { Controller, Get, Render } from '@nestjs/common';
import { Processo } from './processo.entity';
import { ProcessoService } from './processo.service';
import { helpers } from './processo.view.helpers';

@Controller('processos')
export class ProcessoController {

    constructor(private readonly processoService: ProcessoService) {}

    @Get()
    @Render('processo/index')
    async getAll(): Promise<object> {
        let processos = await this.processoService.findAll(); 

        return { listaProcessos: processos, _h: helpers }
    }
}
