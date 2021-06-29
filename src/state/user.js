import { createAction, createReducer } from "@reduxjs/toolkit";

const setUser = createAction('SET_USER')

const userReducer = createReducer({}, {
    [setUser]: (state, action) => action.payload
})

export { setUser, userReducer}