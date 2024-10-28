import { useContext } from "react";
import { LoteriaContext } from "../contexts";


export const useLoteria = () => {
    const context = useContext(LoteriaContext);
    if (context === undefined) {
        throw new Error('useLoteria must be used within a LoteriaProvider');
    }
    return context;
};