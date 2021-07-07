import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

const setReviews = createAsyncThunk("SET_REVIEWS", (id) => {
  return axios.get(`/api/reviews/${id}`).then((res) => res.data);
});

const reviewsReducer = createReducer([], {
  [setReviews.fulfilled]: (state, action) => action.payload,
});

export { reviewsReducer, setReviews };
