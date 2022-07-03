import {JsonInput} from "../../shared/data-types";
import {TextField} from "@mui/material";
import {ChangeEvent} from "react";

const StringInput = (props: {
    data: JsonInput,
    value: string,
    onChangeValue: (data: JsonInput, value: string) => void,
    error: boolean,
    errorText: string
}) => {

    const {name, type, label} = props.data

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChangeValue(props.data, e.target.value)
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
                value={props.value || ''}
                onChange={onChange}
            />
        </>
    )
}

export default StringInput