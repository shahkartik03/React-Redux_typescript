import React, { useReducer } from 'react';
import {createStore, Store as reduxStore } from 'redux';
import {IState} from './Interfaces';
import {Provider} from 'react-redux';
import {Actions} from './enums';

const initState: IState = {
    episodes: [],
    favourites: [],
    count: 0,
};


// export const Store = React.createContext<IState>(initState);
export const Store: reduxStore<IState> = createStore(reducer);

function reducer(state = initState, action): IState {
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