import { useState, useEffect } from "react";
// Styles
import { MainContainer } from "./main.styles";
// Components
import MyInput from "../../shared/MyInput";
// Helpers
import api from "../../api/api";

const Main = () => {
    const [pacients, setMyPacients] = useState([]);
    const [nome, setNome] = useState("");

    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        const callApi = async () => {
            const { data } = await api.get("");
            setMyPacients(data.data);
        };
        callApi();
    }, []);

    return (
        <section id="main">
            {console.log(pacients)}
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
