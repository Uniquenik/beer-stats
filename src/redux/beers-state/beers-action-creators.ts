import {beersActionTypes} from "./beers-action-types";
import {Beer} from "../../shared/data-types";

export const loadBeersRequest = () => ({type: beersActionTypes.LOAD_BEERS_REQUEST})

export const loadBeersSuccess = (beers:Beer[]) => ({
    type: beersActionTypes.LOAD_BEERS_SUCCESS,
    payload: beers
})

export const loadBeersFailure = (error:string) => ({
    type: beersActionTypes.LOAD_BEERS_FAILURE,
    payload: error
})