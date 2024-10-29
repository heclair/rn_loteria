import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { LoteriaContextProps, ResultadoLoteriaSimplificado } from '../types';
import LoteriaService from '../services/LoteriaService';

// Criando o contexto
export const LoteriaContext = createContext<LoteriaContextProps | undefined>(undefined);

// Provider do contexto
export const LoteriaProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [resultados, setResultados] = useState<{
        megasena?: ResultadoLoteriaSimplificado;
        timemania?: ResultadoLoteriaSimplificado;
        quina?: ResultadoLoteriaSimplificado;
    }>({});
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchResultados = async () => {
            try {
                setLoading(true);
                const megasena = await LoteriaService.obterResultadosLoteria('megasena');
                const timemania = await LoteriaService.obterResultadosLoteria('timemania');
                const quina = await LoteriaService.obterResultadosLoteria('quina');
                
                setResultados({ megasena, timemania, quina });
            } catch (err) {
                setError('Erro ao buscar resultados.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchResultados();
    }, []);

    return (
        <LoteriaContext.Provider value={{ resultados, loading, error }}>
            {children}
        </LoteriaContext.Provider>
    );
};

