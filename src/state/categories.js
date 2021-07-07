import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

const setCategories = createAsyncThunk("SET_CATEGORIES", (id) => {
  return axios
  .get("/api/category")
  .then((res) => res.data);
});

const categoriesReducer = createReducer([], {
  [setCategories.fulfilled]: (state, action) => action.payload,
});

export { categoriesReducer, setCategories };
