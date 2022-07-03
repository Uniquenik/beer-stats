import {Button, Grid, TextField, Typography} from "@mui/material";
import {useState} from "react";
import {defaultjson} from "../shared/defaultjson";
import {JsonInput} from "../shared/data-types";
import {checkJson} from "../shared/checkJson";
import GenerateForm from "../components/jsonForm/generateForm";

const JsonForm = () => {
    const [localJsonValue, setLocalJsonValue] = useState<JsonInput[]>(() => defaultjson)
    const [jsonValue, setJsonValue] = useState<JsonInput[]>(() => defaultjson)
    const [isError, setIsError] = useState(false)

    const handleChange = (e:any) => {
        if (checkJson(e.target.value)) {
            setIsError(false)
            setLocalJsonValue(JSON.parse(e.target.value))
        }
        else {
            setIsError(true)
        }
    }

    const generateForm = () => {
        if (!isError) setJsonValue(localJsonValue)
    }

    return(
        <>
            <Grid container spacing={4}>
                <Grid item xs={4}>
                    <TextField
                        error={isError}
                        helperText={isError ? 'Incorrect JSON' : "Print some JSON here"}
                        sx={{width:'100%'}}
                        id="json-input"
                        label="Json input"
                        onChange={handleChange}
                        multiline
                        rows={30}
                        defaultValue={JSON.stringify(jsonValue, null, 4)}
                        variant="standard"
                    />
                    <Button disabled={isError}
                            onClick={() => generateForm()}
                            fullWidth
                            sx={{margin:'16px 0'}}
                            variant={'contained'}>
                        Generate new form
                    </Button>
                    <Typography
                        variant={'body2'}
                        align={'center'}>
                        Please use unique names</Typography>
                </Grid>
                <Grid item xs={8}>
                    <GenerateForm jsonData={jsonValue}/>
                </Grid>
            </Grid>
        </>
    )
}

export default JsonForm