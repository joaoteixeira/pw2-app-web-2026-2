export const helpers = {
    rotuloSituacao: (situacao: string) => { 

        // const _situacao = situacao
        // .normalize('NFD') // Separa as letras dos acentos
        // .replace(/[\u0300-\u036f]/g, '') // Remove os acentos
        // .replace(/\s+/g, '_'); // Substitui espaços por _

        let color = 'secondary';

        switch(situacao) {
            case 'Em análise': 
                color = 'primary';
                break;
            case 'Concluído': 
                color = 'info';
                break;
            case 'Aprovado': 
                color = 'success';
                break;
            case 'Em investigação': 
                color = 'secondary';
                break;
            case 'Indeferido': 
                color = 'danger';
                break;
        }


        return `<span class="badge text-bg-${color}">${situacao}</span>`;
    }
  };