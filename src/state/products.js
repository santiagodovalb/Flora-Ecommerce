import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

const setProducts = createAsyncThunk("SET_PRODUCTS", () => {
  return axios.get("/api/products").then((res) => res.data);
});

const setCategoryProducts = createAsyncThunk("SET_CAT_PRODS", (category) => {
  return axios
    .get(`/api/category/${category}/products`)
    .then((res) => {console.log(res.data)
      return res.data.product})
});

const setSearchProducts = createAsyncThunk('SET_SEARCH_PRODS', (search) => {
  return axios
      .get(`/api/products/search?nombre=${search}`)
      .then((res) => res.data)
})

const productsReducer = createReducer([], {
  [setProducts.fulfilled]: (state, action) => action.payload,
  [setCategoryProducts.fulfilled]: (state, action) => action.payload,
  [setSearchProducts.fulfilled]: (state, action) => action.payload
});

export { productsReducer, setProducts, setCategoryProducts, setSearchProducts };
