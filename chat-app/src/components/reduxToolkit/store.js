import { configureStore, createAction, createReducer } from "@reduxjs/toolkit"

export const select_uid = createAction("SELECT_UID");

const initialState = {
    users: {
        selectedId: 0
    }
}

const reducer = createReducer(initialState, {
    [select_uid]: (state, action) => {
        state.users.selectedId = action.payload
    }
})

export default configureStore({ reducer });