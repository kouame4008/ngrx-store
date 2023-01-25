import { on } from '@ngrx/store';
import { createReducer } from '@ngrx/store';
import { Users } from '../users';
import { actionSaveUser } from './users.action';

export const initialeState: Users = {
    username: undefined,
    email: undefined
};
export const userReducer = createReducer(
    initialeState,
    on(actionSaveUser, (state, { data }) => {
        state = data;
        return {
            ...state
        }
    })
);
