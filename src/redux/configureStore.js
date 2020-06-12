import { createStore} from 'redux';
import {Reducer, inititialState, initialState} from './reducer'

export const ConfigureStore=()=>{
    const store=createStore(
        Reducer,
        initialState
    );

    return store;
}