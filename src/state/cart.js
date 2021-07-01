import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

const setCart = createAsyncThunk("SET_CART", () => {
  return axios
    .get("/api/shop")
    .then((res) => res.data);
});

const cartReducer = createReducer([], {
  [setCart.fulfilled]: (state, action) => action.payload,
});

export { cartReducer, setCart };