import {Beer} from "../../shared/data-types";

type BeersState = {
    loading: boolean,
    error: string,
    beers: Beer[]
}

export type {
    BeersState
}