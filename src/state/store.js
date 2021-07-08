import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { productsReducer } from "./products";
import { userReducer } from "./user";
import { cartReducer } from "./cart";
import { singleOrderReducer } from "./order";
import { categoriesReducer } from "./categories";
import { allOrdersReducer } from "./allOrders";
import { reviewsReducer } from "./reviews";
import { userOrdersReducer } from "./userOrders";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    products: productsReducer,
    user: userReducer,
    cart: cartReducer,
    allOrders: allOrdersReducer,
    userOrders: userOrdersReducer,
    singleOrder: singleOrderReducer,
    categories: categoriesReducer,
    reviews: reviewsReducer,

  },
});

export default store;
