import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
// Styles
import { MyCard, MyCardContent, SubTitle } from "./pacientItem.styles";
// Interfaces
import { PacientProps } from "../../../shared/interfaces/interfaces";

interface PacientItemProps extends PacientProps {
    deletePacient(id: number): void;
    editPacient(id: number): void;
}
const PacientItem = ({
    id,
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
                    <SubTitle>dataCadastro: {dataCadastro}</SubTitle>
                </div>
                {/* <div>
                    <IconButton size="large" onClick={() => editPacient(id)}>
                        <EditIcon fontSize="inherit" />
                    </IconButton>
                    <IconButton
                        aria-label="delete"
                        size="large"
                        onClick={() => deletePacient(id)}
                    >
                        <DeleteIcon fontSize="inherit" />
                    </IconButton>
                </div> */}
            </MyCardContent>
        </MyCard>
    );
};

export default PacientItem;
