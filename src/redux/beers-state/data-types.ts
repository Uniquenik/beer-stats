import {Beer} from "../../shared/data-types";

type BeersState = {
    loading: boolean,
    error: '',
    beers: Beer[]
}

export type {
    BeersState
}