import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

const setUserOrders = createAsyncThunk("SET_USER_ORDERS", () => {
    return axios
    .get("/api/shop/order")
    .then((res) => res.data)
});

const userOrdersReducer = createReducer([], {
  [setUserOrders.fulfilled]: (state, action) => action.payload,
});

export { userOrdersReducer, setUserOrders };
