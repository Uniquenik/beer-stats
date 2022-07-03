import {JsonInput} from "../../../shared/data-types";
import {TextField} from "@mui/material";
import {ChangeEvent} from "react";

const NumberInput = (props: {
    data: JsonInput,
    value: string,
    onChangeValue: (data: JsonInput, value: number) => void,
    error: boolean,
    errorText: string
}) => {

    const {name, type, label} = props.data

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChangeValue(props.data, Number(e.target.value))
    }

    return (
        <>
            <TextField
                sx={{height: '80px'}}
                label={label}
                error={props.error}
                helperText={props.errorText}
                name={name}
                type={type}
                value={props.value.toString() || ''}
                onChange={onChange}
            />
        </>
    )
}

export default NumberInput