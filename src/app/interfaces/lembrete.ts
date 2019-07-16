type prioridade = 'BAIXA' | 'MEDIA' | 'ALTA';
export class Lembrete {
 id: number;
 conteudo: string;
 arquivado: boolean;
 prioridade: prioridade;
 modificado: number;
}
