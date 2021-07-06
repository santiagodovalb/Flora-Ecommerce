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

export default store;
