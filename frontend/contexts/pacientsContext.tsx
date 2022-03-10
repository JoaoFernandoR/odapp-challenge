import React, { createContext, useState } from "react";
// helpers
import api from "../api/api";

interface PacientsContextData {
    pacients: any;
    loadPacients: () => void;
}

export const PacientsContext = createContext<PacientsContextData>(
    {} as PacientsContextData
);

export const PacientsProvider = ({ children }: any) => {
    const [pacients, setPacients] = useState([]);

    const loadPacients = async () => {
        try {
            const { data } = await api.get("");
            setPacients(data.data);
        } catch (error) {
            console.log("error in loadPacients in [PacientsContext]", error);
        }
    };

    return (
        <PacientsContext.Provider value={{ pacients, loadPacients }}>
            {children}
        </PacientsContext.Provider>
    );
};
