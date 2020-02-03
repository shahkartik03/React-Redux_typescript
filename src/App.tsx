import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IState, Dispatch } from './Interfaces';
import {Actions} from './enums';

export default function App(): JSX.Element {
    const count: number = useSelector((state: IState) => state.count);
    const dispatch: Dispatch = useDispatch();

    const incrementCounter = (): React.Dispatch => {
        return dispatch({ type: Actions.INC, payload: count + 1});
    };

    const decrementCounter = (): React.Dispatch => {
        return dispatch({ type: Actions.DEC, payload: count - 1});
    };

    const reset = (): React.Dispatch => {
        return dispatch({ type: Actions.DEC, payload: 0});
    };

    return (
        <Fragment>
            Hello!!!
            <section>count value is {count}</section>
            <button onClick = {incrementCounter}>increment</button>
            <button onClick = {decrementCounter}>decrement</button>
            <button onClick = {reset}>Reset</button>
            <img src="../public/reactjs-tutorial.png" />
        </Fragment>
    )
}
