import axios from 'axios';
import { LoteriasResult, ResultadoLoteria } from '../types';



class LoteriaService {
    private static apiUrl = 'https://servicebus2.caixa.gov.br/portaldeloterias/api/home/ultimos-resultados';

    public static async obterResultadosLoteria(tipo: 'megasena' | 'timemania' | 'quina'): Promise<ResultadoLoteria> {
        try {
            const response = await axios.get<LoteriasResult>(this.apiUrl);
            return response.data[tipo]; // Retorna o resultado da loteria desejada
        } catch (error) {
            console.error(`Erro ao buscar resultados da ${tipo}:`, error);
            throw error; // Repassa o erro para tratamento posterior
        }
    }
}

(async () => {
    try {
        const resultadoMegaSena = await LoteriaService.obterResultadosLoteria('megasena');
        console.log('Resultados da Mega Sena:', resultadoMegaSena);

        const resultadoTimemania = await LoteriaService.obterResultadosLoteria('timemania');
        console.log('Resultados da Timemania:', resultadoTimemania);

        const resultadoQuina = await LoteriaService.obterResultadosLoteria('quina');
        console.log('Resultados da Quina:', resultadoQuina);
    } catch (error) {
        console.error('Erro ao obter resultados:', error);
    }
})();


export default LoteriaService;