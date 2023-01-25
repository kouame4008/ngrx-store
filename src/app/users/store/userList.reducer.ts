import { on } from '@ngrx/store';
import { createReducer } from '@ngrx/store';
import { Users } from '../users';
import { actionGetListe } from './users.action';

export const initialeState = []
export const userListReducer = createReducer(
    initialeState,
    on(actionGetListe, (state) => {
        return {
            ...state
        }
    })
);
