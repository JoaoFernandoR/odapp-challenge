import React, { createContext, useState } from "react";
// Interfaces
import { PacientsContextData } from "./interfaces";
// helpers
import api from "../../services/api";

export const PacientsContext = createContext<PacientsContextData>(
    {} as PacientsContextData
);

export const PacientsProvider = ({ children }: any) => {
    const [pacients, setPacients] = useState([]);
    const [loading, setLoading] = useState(false);

    const loadPacients = async () => {
        setLoading(true);
        try {
            const { data } = await api.get("");
            setPacients(data.data);
            setLoading(false);
        } catch (error) {
            console.log("error in loadPacients in [PacientsContext]", error);
            setLoading(false);
        }
    };

    return (
        <PacientsContext.Provider
            value={{
                pacients,
                loadPacients,
                loading,
            }}
        >
            {children}
        </PacientsContext.Provider>
    );
};
