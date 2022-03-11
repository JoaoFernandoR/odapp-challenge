import { styled } from "@mui/material/styles";
import { Container, Button } from "@mui/material";

export const MainContainer = styled(Container)``;

export const Row = styled("div")`
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 12px;

    ${({ theme }) => theme.breakpoints.down("sm")} {
        flex-direction: column;
    }
`;

export const NameView = styled("div")`
    width: 400;
`;

export const MyButton = styled(Button)`
    display: flex;
    margin: 18px auto 26px auto;
`;

export const RowItem = styled("div")`
    flex-direction: row;
`;
