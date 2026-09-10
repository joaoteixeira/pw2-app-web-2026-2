import { Controller, Get, Render } from '@nestjs/common';
import { Processo } from './processo.entity';

@Controller('processos')
export class ProcessoController {

    @Get()
    @Render('processo/index')
    async getAll(): Promise<object> {
        let processos = await Processo.find();  

        return { listaProcessos: processos }
    }
}
