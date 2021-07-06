import { createAction, createReducer } from "@reduxjs/toolkit";

const setSingleOrder = createAction("SET_SINGLE_ORDER");

const singleOrderReducer = createReducer([], {
  [setSingleOrder]: (state, action) => action.payload,
});

export { singleOrderReducer, setSingleOrder };
