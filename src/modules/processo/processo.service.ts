import { Injectable } from '@nestjs/common';
import { Processo } from './processo.entity';
import { CreateProcessoDto } from './dtos/create-processo.dto';

@Injectable()
export class ProcessoService {

    async findAll(): Promise<Processo[]> {
        let processos = await Processo.find();

        return processos;
    }

    async create(dados: CreateProcessoDto): Promise<Processo> {
        const processo = Processo.create({ ...dados, situacao: 'Aberta' });

        return processo.save();
    }
}
