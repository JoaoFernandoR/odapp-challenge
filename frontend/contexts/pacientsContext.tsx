import React, { createContext, useState } from "react";
// Interfaces
import { PacientsContextData } from "./interfaces";
// helpers
import api from "../api/api";

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

            data.status === "success"
                ? loadPacients()
                : console.log("nao deu certo");
        } catch (error) {
            console.log("error in createPacient in [PacientsContext]", error);
        }
    };

    const deletePacient = async (id: string) => {
        try {
            const { data } = await api.delete("", { data: { id: id } });

            data.status === "success"
                ? setPacients(data.data)
                : console.log("nao deu certo");
        } catch (error) {
            console.log("error in deletePacient in [PacientsContext]", error);
        }
    };

    const editPacient = async (id: string, params: any) => {
        try {
            const { data } = await api.patch(`/${id}`, params);

            data.status === "success"
                ? setPacients(data.data)
                : console.log("nao deu certo");
        } catch (error) {
            console.log("error in deletePacient in [PacientsContext]", error);
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
                deletePacient,
                editPacient,
            }}
        >
            {children}
        </PacientsContext.Provider>
    );
};
