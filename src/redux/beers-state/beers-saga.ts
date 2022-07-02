import {SagaIterator} from "redux-saga";
import {call, takeLatest, put} from 'redux-saga/effects';
import {Action, Beer} from "../../shared/data-types";
import {beersActionTypes} from "./beers-action-types";
import {$api, ENDPOINTS} from "../../service";
import {loadBeersFailure, loadBeersSuccess} from "./beers-action-creators";

function* loadBeers( action:Action):SagaIterator {
    try{
        const response = yield call(() => $api.get<Beer[]>(ENDPOINTS.GET_BEERS()))
        yield put(loadBeersSuccess(response.data))
    }
    catch (e:unknown){
        if (e instanceof Error) yield put(loadBeersFailure(e.message))
    }
}

export default function* beersSaga() {
    yield takeLatest(beersActionTypes.LOAD_BEERS_REQUEST, loadBeers);
}