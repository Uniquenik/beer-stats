import {JsonInput} from "../../shared/data-types";

export const stringValidate = (data: JsonInput, newValue: string): { result: boolean; msg: string } => {

    const {min_length, max_length, type, regex} = data

    if (newValue) {
        const value = newValue
        if (max_length && value.length > max_length) {
            return {result: true, msg: 'Too big string'}
        }
        else if (min_length && value.length < min_length) {
            return {result: true, msg: 'Too small string'}
        }
        else if (regex || type.toLowerCase() === 'email') {
            let expression = new RegExp(regex ? regex : /\S+@\S+\.\S+/)
            let result = expression.test(value.toString())
            if (!result)
                return {result: true, msg: 'Regex failed'}
            return {result: false, msg: ''}
        }
        else {
            return {result: false, msg: ''}
        }
    } else {
        return {result: true, msg: 'Empty input'}
    }
}

export const numberValidate = (data: JsonInput, newValue: number): { result: boolean; msg: string } => {

    const {max, min, regex} = data

    if (newValue) {
        const value = +newValue;
        if (max && value > max) {
            return {result: true, msg: 'Too big number'}
        }
        else if (min && value < min) {
            return {result: true, msg: 'Too small number'}
        }
        else if (regex) {
            let expression = new RegExp(regex)
            let result = expression.test(value.toString())
            if (!result) return {result: true, msg: 'Regex failed'}
            return {result: false, msg: ''}
        }
        else {
            return {result: false, msg: ''}
        }
    } else {
        return {result: true, msg: 'Empty input'}
    }
}