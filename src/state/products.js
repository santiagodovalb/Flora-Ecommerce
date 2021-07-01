import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

const setProducts = createAsyncThunk("SET_PRODUCTS", () => {
  return axios
    .get("/api/products")
    .then((res) => res.data);
});

const productsReducer = createReducer([], {
  [setProducts.fulfilled]: (state, action) => action.payload,
});

export { productsReducer, setProducts };
