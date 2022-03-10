import { TextField } from "@mui/material";

interface MyinputProps {
    label: string;
    value: string;
    setValue?: any;
    editMode: boolean;
    type: string;
    onChange?: any;
    error: boolean;
}
const MyInput = ({
    editMode,
    label,
    setValue,
    value,
    type,
    onChange,
    error,
}: MyinputProps) => {
    return (
        <TextField
            label={label}
            variant="standard"
            required
            value={value}
            onChange={
                onChange ? onChange : (event) => setValue(event.target.value)
            }
            focused={editMode ? true : false}
            style={{ width: "100%" }}
            type={type}
            error={error}
        />
    );
};

export default MyInput;
