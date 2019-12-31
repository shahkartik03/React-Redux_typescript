import React from 'react';

export interface IState {
    episodes: Array<any>,
    favourites: Array<any>,
    count: number,
}

export interface IReduxStore {
    state: IState,
    initState: IState,
    dispatch: any,
}

export type Dispatch = React.Dispatch;