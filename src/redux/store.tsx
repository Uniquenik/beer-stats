import {createStore, applyMiddleware, combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {composeWithDevTools} from "redux-devtools-extension";
import beersReducer, {initialBeerState} from "./beers-state/beers-reducer";
import {BeersState} from "./beers-state/data-types";
import beersSaga from "./beers-state/beers-saga";
import { all, spawn } from 'redux-saga/effects';

export interface RootReducer {
    beers: BeersState,
}

const InitialState:RootReducer = {
    beers: initialBeerState,
}

const rootReducers = combineReducers({
    beers: beersReducer,
})

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducers,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
)

function* rootSaga() {
    const sagas = [beersSaga];
    yield all(sagas.map(s => spawn(s)));
}

sagaMiddleware.run(rootSaga);

export default store;