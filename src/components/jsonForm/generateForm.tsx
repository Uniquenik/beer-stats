import {JsonInput} from "../../shared/data-types";
import {FormEvent, useEffect, useState} from "react";
import StringInput from "./jsonInputs/stringInput";
import NumberInput from "./jsonInputs/numberInput";
import {Button, Divider, Grid, Stack, Step, StepLabel, Stepper, Typography} from "@mui/material";
import {numberValidate, stringValidate} from "./validate";

const GenerateForm = (props: { jsonData: JsonInput[] }) => {

    const [page, setPage] = useState<number>(0);
    const [currentPageData, setCurrentPageData] = useState<JsonInput>(props.jsonData[page]);
    const [values, setValues] = useState<{ [key: string]: string | number }>({});

    const [errors, setErrors] = useState<{ [key: string]: boolean }>({})
    const [errorsMsg, setErrorsMsg] = useState<{ [key: string]: string }>({})
    const [showError, setShowError] = useState(false)

    const {name} = currentPageData;

    useEffect(() => {
        const upcomingPageData: JsonInput = props.jsonData[page];
        const {name} = upcomingPageData
        if (!Object.keys(values).includes(name)) {
            setValues(currentValues => {
                return {...currentValues, [name]: ''}
            })
            setErrors(currentErrors => {
                return {...currentErrors, [name]: true}
            })
            setErrorsMsg(currentErrorsMsg => {
                return {...currentErrorsMsg, [name]: 'Empty string'}
            })
        }
        setCurrentPageData(upcomingPageData);
    }, [page]);


    useEffect(() => {
        //чтобы успеть инициализировать все поля при изменении
        setPage(0)
        setValues({})
        setErrors({})
        setErrorsMsg({})
        setShowError(false)
    }, [props.jsonData])


    const fieldChanged = (data: JsonInput, newValue: string | number) => {
        const {name, type} = data
        //проверка на условия
        if (type.toLowerCase() === 'number') {
            const {result, msg} = numberValidate(data, Number(newValue))
            setErrors(currentValues => {
                return {...currentValues, [name]: result}
            })
            setErrorsMsg(currentValues => {
                return {...currentValues, [name]: msg}
            })
        } else {
            const {result, msg} = stringValidate(data, newValue.toString())
            setErrors(currentValues => {
                return {...currentValues, [name]: result}
            })
            setErrorsMsg(currentValues => {
                return {...currentValues, [name]: msg}
            })
        }
        //запись значения (пишем в любом случае, чтобы пользователь не терял введенные данные
        setValues((currentValues) => {
            currentValues[name] = newValue;
            return currentValues;
        });
    };

    const navigatePages = (direction: boolean) => {
        //true вперед false назад
        direction ? setPage(page => page + 1) : setPage(page => page - 1)
    }

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        //проверям есть ли ошибки
        let booleanArray = Object.values(errors)
        if (booleanArray.every(el => !el)) {
            console.log(values)
        } else {
            //подчеркиваем их
            setShowError(true)
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <Typography variant={'h4'} align={'center'}>Generated form:</Typography>
            <Stepper sx={{padding: '32px 0'}} activeStep={page}>
                {props.jsonData.map((el, index) => {
                    return (
                        <Step unselectable={'on'}
                              key={el.name}
                              sx={{cursor: 'pointer'}}
                              onClick={() => setPage(index)}>
                            <StepLabel error={showError && errors[el.name]}>{el.label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            <Grid px={5}>
                <Stack py={3} justifyContent={'center'}>
                    {
                        currentPageData.type.toLowerCase() === 'number' ?
                            <NumberInput
                                data={currentPageData}
                                error={showError && errors[name]}
                                errorText={errorsMsg[name]}
                                value={values[name].toString()}
                                onChangeValue={fieldChanged}/>
                            :
                            <StringInput
                                data={currentPageData}
                                error={showError && errors[name]}
                                errorText={errorsMsg[name]}
                                value={values[name] ? values[name].toString() : ''}
                                onChangeValue={fieldChanged}/>
                    }
                </Stack>
                <Divider/>
                <Grid container py={2} spacing={4}>
                    <Grid item xs={6}>
                        {page > 0 &&
                            <Button variant={'outlined'} fullWidth onClick={() => navigatePages(false)}>Назад</Button>}
                    </Grid>
                    <Grid item xs={6}>
                        {page < props.jsonData.length - 1 &&
                            <Button variant={'outlined'} fullWidth
                                    onClick={() => navigatePages(true)}>Продолжить</Button>}
                    </Grid>
                </Grid>
                {page === props.jsonData.length - 1 &&
                    <Button fullWidth variant={'contained'} type={'submit'} color={'success'}>Отправить</Button>}
            </Grid>
        </form>
    );
};
export default GenerateForm