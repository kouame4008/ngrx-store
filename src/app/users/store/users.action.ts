import { createAction, props } from '@ngrx/store';
import { Users } from '../users';


export const actionSaveUser = createAction(
    '[Users Compoenent]',
    props<{ data: Users }>()
)


export const actionGetListe = createAction (
    '[UsersList Component]'
)