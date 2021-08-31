import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import modalReducer from './reduser';

export const store = configureStore(
    {
        reducer: modalReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
        devTools: process.env.NODE_ENV !== 'production',
    }
)

