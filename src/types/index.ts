export interface ResultadoLoteria {
    acumulado: boolean;
    concursoEspecial: boolean;
    dataApuracao: string;
    dataPorExtenso: string;
    dataProximoConcurso: string;
    dezenas: string[];
    numeroDoConcurso: number;
    quantidadeGanhadores: number;
    tipoPublicacao: number;
    tipoJogo: string;
    valorEstimadoProximoConcurso: number;
    valorPremio: number;
}

export interface LoteriasResult {
    megasena: ResultadoLoteria;
    timemania: ResultadoLoteria;
    quina: ResultadoLoteria;
}

export interface LoteriaContextProps {
    resultados: {
        megasena?: ResultadoLoteria;
        timemania?: ResultadoLoteria;
        quina?: ResultadoLoteria;
    };
    loading: boolean;
    error: string | null;
}
