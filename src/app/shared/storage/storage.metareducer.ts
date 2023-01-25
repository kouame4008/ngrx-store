import { ActionReducer, Action } from '@ngrx/store';
import { merge, pick } from 'lodash-es';



function setSavedState(state: any, localStorageKey: string) {
    localStorage.setItem(localStorageKey, JSON.stringify(state));
}
function getSavedState(localStorageKey: string): any {
    let data = localStorage.getItem(localStorageKey);
    if (data) {
        return JSON.parse(data);
    }
    return "null";
}

// the keys from state which we'd like to save.
const stateKeys = ['user'];
// the key for the local storage.
const localStorageKey = '__app_storage__';

export function storageMetaReducer(reducer: ActionReducer<any>) {
    let onInit = true; // after load/refresh…
    return function (state: any, action: any): any {
        // reduce the nextState.
        // console.log('state', state);
        // console.log('action', action);
        const nextState = reducer(state, action);

        // init the application state.
        if (onInit) {
            onInit = false;
            const savedState = getSavedState(localStorageKey);
            return merge(nextState, savedState);
        }
        // save the next state to the application storage.
        const stateToSave = pick(nextState, stateKeys);

        setSavedState(stateToSave, localStorageKey);
        return nextState;
    };
}


