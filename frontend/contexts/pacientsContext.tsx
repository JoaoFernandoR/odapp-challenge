import React, { createContext, useState } from "react";
// helpers
import api from "../api/api";

interface PacientsContextData {
    pacients: any;
    loadPacients: () => void;
    loadStates: () => void;
    loadCities: (siglaUF: string) => void;
    createPacient: (params: any) => void;
    states: StatesProps[];
    cities: StatesProps[];
}

export interface StatesProps {
    id: number;
    sigla: string;
    nome: string;
}

export interface CitiesProps {
    id: string;
    nome: string;
}

export const PacientsContext = createContext<PacientsContextData>(
    {} as PacientsContextData
);

export const PacientsProvider = ({ children }: any) => {
    const [pacients, setPacients] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);

    const loadPacients = async () => {
        try {
            const { data } = await api.get("");
            setPacients(data.data);
        } catch (error) {
            console.log("error in loadPacients in [PacientsContext]", error);
        }
    };

    const loadStates = async () => {
        try {
            const { data } = await api.get(
                "https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome"
            );
            setStates(data);
        } catch (error) {
            console.log("error in loadStates in [PacientsContext]", error);
        }
    };

    const loadCities = async (siglaUF: string) => {
        try {
            const { data } = await api.get(
                `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${siglaUF}/distritos?orderBy=nome`
            );
            setCities(data);
        } catch (error) {
            console.log("error in loadCities in [PacientsContext]", error);
        }
    };

    const createPacient = async (params: any) => {
        try {
            const { data } = await api.post("", params);

            if (data.status === "success") console.log("deu certo");
            else {
                console.log("nao deu certo");
            }
        } catch (error) {
            console.log("error in loadPacients in [PacientsContext]", error);
        }
    };

    return (
        <PacientsContext.Provider
            value={{
                pacients,
                loadPacients,
                states,
                loadStates,
                loadCities,
                cities,
                createPacient,
            }}
        >
            {children}
        </PacientsContext.Provider>
    );
};
