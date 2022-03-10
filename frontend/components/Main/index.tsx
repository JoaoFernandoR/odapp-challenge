import { useState, useEffect, useContext, FormEvent, ChangeEvent } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import {
    NotificationContainer,
    NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";
// Styles
import { MainContainer, Row, MyButton } from "./main.styles";
// Components
import MyInput from "../../shared/MyInput";
// Contexts
import {
    CitiesProps,
    PacientsContext,
    StatesProps,
} from "../../contexts/pacientsContext";
import { PacientProps } from "../../shared/interfaces/interfaces";
import PacientItem from "./PacientItem";

const Main = () => {
    const {
        pacients,
        loadPacients,
        loadStates,
        states,
        cities,
        loadCities,
        createPacient,
    } = useContext(PacientsContext);

    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState<any>(0);
    const [cidade, setCidade] = useState("");
    const [isError, setIsError] = useState(false);
    const [uf, setUf] = useState("UF");
    const [editMode, setEditMode] = useState(false);

    useEffect(() => {
        if (pacients.length === 0) {
            loadPacients();
            loadStates();
        }
    }, [pacients]);

    const addPacient = (e: FormEvent) => {
        e.preventDefault();

        if (idade === 0) return setIsError(true);

        if (uf === "UF" || cidade === "") {
            setIsError(false);
            return NotificationManager.success(
                "Por favor selecione um estado e uma cidade",
                "Erro",
                3000
            );
        }

        if (nome.length <= 4) {
            setIsError(false);
            return NotificationManager.success(
                "Nome precisa ter no mínimo 5 caracteres",
                "Erro",
                3000
            );
        }

        const paramsToSend = {
            nome: nome,
            idade,
            cidade,
            estado: uf,
        };

        createPacient(paramsToSend);

        NotificationManager.success(
            "Paciente cadastrado com sucesso",
            "Sucesso",
            3000
        );
    };

    const onStateSelect = (event: any) => {
        setUf(event.target.value);
        loadCities(event.target.value);
    };

    const onChangeNumber = (e: ChangeEvent<HTMLInputElement>) => {
        if (parseInt(e.target.value) < 0 || parseInt(e.target.value) > 200)
            return;
        setIdade(parseInt(e.target.value));
    };

    const deletePacient = () => {};

    const editPacient = () => {};

    return (
        <MainContainer>
            <NotificationContainer />

            <form onSubmit={addPacient}>
                <Row>
                    <div style={{ width: 400, marginBottom: 40 }}>
                        <MyInput
                            label="Nome"
                            editMode={editMode}
                            value={nome}
                            type="string"
                            setValue={setNome}
                            error={false}
                        />
                    </div>
                    <div style={{ width: 80 }}>
                        <MyInput
                            label="Idade"
                            editMode={editMode}
                            value={idade}
                            onChange={onChangeNumber}
                            type="number"
                            error={isError}
                        />
                    </div>
                </Row>
                <Row>
                    <div>
                        <InputLabel
                            id="demo-simple-select-label"
                            style={{ marginBottom: 10 }}
                        >
                            Estado
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={uf}
                            label="Age"
                            onChange={onStateSelect}
                            required
                        >
                            <MenuItem disabled value="UF">
                                <em>UF</em>
                            </MenuItem>
                            {states?.map((item: StatesProps) => (
                                <MenuItem value={item.sigla} key={item.id}>
                                    {item.sigla}
                                </MenuItem>
                            ))}
                        </Select>
                    </div>
                    {uf !== "UF" ? (
                        <div>
                            <InputLabel
                                id="estado"
                                style={{ marginBottom: 10 }}
                            >
                                Cidade
                            </InputLabel>
                            <Select
                                labelId="cidade"
                                id="cidade-select"
                                value={cidade}
                                label="Cidade"
                                onChange={(event) => {
                                    setCidade(event.target.value);
                                }}
                                required
                            >
                                <MenuItem disabled value="Cidade">
                                    <em>Cidade</em>
                                </MenuItem>
                                {cities?.map((item: any) => (
                                    <MenuItem value={item.nome} key={item.id}>
                                        {item.nome}
                                    </MenuItem>
                                ))}
                            </Select>
                        </div>
                    ) : null}
                </Row>
                <MyButton
                    variant="contained"
                    type="submit"
                    color={editMode ? "success" : "info"}
                >
                    {editMode ? "Editar" : "Cadastrar"}
                </MyButton>
            </form>
            <div>
                {pacients.map((item: PacientProps) => {
                    return (
                        <PacientItem
                            key={item.id}
                            id={item.id}
                            nome={item.nome}
                            cidade={item.cidade}
                            estado={item.estado}
                            deletePacient={deletePacient}
                            editPacient={editPacient}
                            idade={item.idade}
                            dataCadastro={item.dataCadastro}
                        />
                    );
                })}
            </div>
        </MainContainer>
    );
};

export default Main;
