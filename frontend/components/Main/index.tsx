import { useState, useEffect, useContext } from "react";
// Styles
import { MainContainer } from "./main.styles";
// Components
import MyInput from "../../shared/MyInput";
// Contexts
import { PacientsContext } from "../../contexts/pacientsContext";

const Main = () => {
    const { pacients, loadPacients } = useContext(PacientsContext);

    const [nome, setNome] = useState("");
    const [editMode, setEditMode] = useState(false);

    // useEffect(() => {
    //     if (pacients.length === 0) loadPacients();
    // }, [pacients]);

    return (
        <section id="main">
            <MainContainer>
                <MyInput
                    label="Nome"
                    editMode={editMode}
                    value={nome}
                    setValue={setNome}
                />
            </MainContainer>
        </section>
    );
};

export default Main;
