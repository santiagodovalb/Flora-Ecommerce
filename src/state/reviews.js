import { createAsyncThunk, createReducer, createAction } from "@reduxjs/toolkit";
import axios from "axios";

const initialVal = {
  reviews : [],
  toggleEditing : false,
  reviewEditing : {},
}

const setReviews = createAsyncThunk("SET_REVIEWS", (id) => {
  return axios.get(`/api/reviews/${id}`).then((res) => res.data);
});

const editReview = createAsyncThunk("EDIT_REVIEWS", ({id, form}) => {
    return axios.put(`/api/reviews/${id}`, form).then((res) => res.data);
});

const editing = createAction('EDITING')


const reviewsReducer = createReducer(initialVal, {
    [setReviews.fulfilled]: (state, action) => {state.reviews = action.payload},
    [editReview.fulfilled]: (state, action) => {state.toggleEditing = false;},
    [editing]: (state, action) => {state.toggleEditing = true; state.reviewEditing = action.payload}
});

export { reviewsReducer, setReviews, editReview, editing };
