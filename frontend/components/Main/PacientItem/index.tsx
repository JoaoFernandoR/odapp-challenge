import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
// Styles
import { MyCard, MyCardContent, SubTitle } from "./pacientItem.styles";
// Interfaces
import { PacientProps } from "../../../shared/interfaces/interfaces";

interface PacientItemProps extends PacientProps {
    deletePacient(id: string): void;
    editPacient(id: string): void;
}
const PacientItem = ({
    _id,
    nome,
    cidade,
    dataCadastro,
    estado,
    idade,
    deletePacient,
    editPacient,
}: PacientItemProps) => {
    return (
        <MyCard sx={{ minWidth: 275 }}>
            <MyCardContent>
                <div>
                    <h3>{nome}</h3>
                    <SubTitle>Cidade: {cidade}</SubTitle>
                    <SubTitle>Estado: {estado}</SubTitle>
                    <SubTitle>Idade: {idade} anos</SubTitle>
                    <SubTitle>
                        Data de cadastro:{" "}
                        {new Date(dataCadastro).toLocaleDateString()}
                    </SubTitle>
                </div>
                <div>
                    <IconButton size="large" onClick={() => editPacient(_id)}>
                        <EditIcon fontSize="inherit" />
                    </IconButton>
                    <IconButton
                        aria-label="delete"
                        size="large"
                        onClick={() => deletePacient(_id)}
                    >
                        <DeleteIcon fontSize="inherit" />
                    </IconButton>
                </div>
            </MyCardContent>
        </MyCard>
    );
};

export default PacientItem;
