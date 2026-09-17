import { Injectable } from '@nestjs/common';
import { Processo } from './processo.entity';

@Injectable()
export class ProcessoService {

    async findAll(): Promise<Processo[]> {
        let processos = await Processo.find();

        return processos;
    }
}
