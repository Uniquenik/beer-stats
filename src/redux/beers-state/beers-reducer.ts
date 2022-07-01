import {beersActionTypes} from "./beers-action-types";
import {BeersState} from "./data-types";
import {Action} from "../../shared/data-types";

export const initialBeerState:BeersState = {
    loading: false,
    error: '',
    beers: []
}


export default function beersReducer(state = initialBeerState, action:Action){
    switch (action.type) {
        case beersActionTypes.LOAD_BEERS_REQUEST: {
            return {
                ...state,
                loading: true,
            }
        }
        case beersActionTypes.LOAD_BEERS_SUCCESS: {
            return {
                ...state,
                loading: false,
                beers: action.payload
            }
        }
        case beersActionTypes.LOAD_BEERS_FAILURE: {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }
        default:
            return state

    }

}