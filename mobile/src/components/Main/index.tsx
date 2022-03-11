import React from "react";
import { useContext, useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { PacientsContext } from "../../context/pacientsContext/pacientsContext";
// Styles
import { MainContainer } from "./main.styles";
// Components
import PacientItem from "../PacientItem";
// Interfaces
import { PacientProps } from "../../shared/interfaces";

const Main = () => {
    const { pacients, loadPacients, loading } = useContext(PacientsContext);

    useEffect(() => {
        if (pacients.length === 0) loadPacients();
    }, [pacients]);

    if (loading) return <ActivityIndicator />;

    return (
        <MainContainer>
            {pacients.map((item: PacientProps) => {
                return (
                    <PacientItem
                        _id={item._id}
                        key={item._id}
                        nome={item.nome}
                        dataCadastro={item.dataCadastro}
                        cidade={item.cidade}
                        estado={item.estado}
                        idade={item.idade}
                    />
                );
            })}
        </MainContainer>
    );
};

export default Main;
