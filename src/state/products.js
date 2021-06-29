import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from 'axios'

const setProducts = createAsyncThunk('SET_PRODUCTS', () => {
    return axios.get('https://www.omdbapi.com/?apikey=20dac387&s=batman').then(res => res.data.Search)
})

const productsReducer = createReducer([], {
    [setProducts.fulfilled]: (state, action) => action.payload
})

export {productsReducer, setProducts}