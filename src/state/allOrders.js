import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

const setAllOrders = createAsyncThunk("SET_ALL_ORDERS", (id) => {
  return axios.get('/api/shop/order/findAll')
  .then(res => res.data);
});

const allOrdersReducer = createReducer([], {
  [setAllOrders.fulfilled]: (state, action) => action.payload,
});

export { allOrdersReducer, setAllOrders };
