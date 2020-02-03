import React, { useReducer } from 'react';
import {createStore, applyMiddleware, Store as reduxStore, Middleware} from 'redux';
import {IState} from './Interfaces';
import {Provider} from 'react-redux';
import {Actions} from './enums';

const initState: IState = {
    episodes: [],
    favourites: [],
    count: 0,
};

const customMiddleware: Middleware = (state) => (next) => (action) => {
    next(action);
};
export const Store: reduxStore<IState> = createStore(reducer, initState, applyMiddleware(customMiddleware));

function reducer(state = initState, action): IState {
    console.log('action  ', action);
    switch (action.type) {
        case Actions.FETCH_DATE:
            return {...state, episodes: action.payload };
        case Actions.INC:
        case Actions.RES:
        case Actions.DEC:
            return { ...state, count: action.payload };
        default:
            return state;
    }
}

export function StoreProvider(props: JSX.ElementChildrenAttribute): JSX.Element {
    return <Provider store={Store}>{props.children}</Provider>
}