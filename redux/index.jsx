import {configureStore} from "@reduxjs/toolkit"
import basketSlice from "./basketSlice"
import orderHistorySlice from "./orderHistorySlice"

export const store = configureStore({
    reducer : {
        basket : basketSlice.reducer,
        history : orderHistorySlice.reducer
    }
})