import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import { productsReducer } from './products'
import { userReducer } from './user'

const store = configureStore( {
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    reducer: {
        products: productsReducer,
        user: userReducer
    }
})

export default store