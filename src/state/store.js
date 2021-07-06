<<<<<<< HEAD
import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import { productsReducer } from './products'
import { userReducer } from './user';
import { cartReducer } from './cart'
import { reviewsReducer } from './reviews';

const store = configureStore( {
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    reducer: {
        products: productsReducer,
        user: userReducer,
        cart: cartReducer,
        reviews: reviewsReducer
    }
})
=======
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { productsReducer } from "./products";
import { userReducer } from "./user";
import { cartReducer } from "./cart";
import { singleOrderReducer } from "./order";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    products: productsReducer,
    user: userReducer,
    cart: cartReducer,
    singleOrder: singleOrderReducer,
  },
});
>>>>>>> 84d3dc90685801612ccd75d7ac12e0f05ebad409

export default store;
