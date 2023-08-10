import {configureStore} from "@reduxjs/toolkit"
import basketSlice from "./basketSlice"

export const store = configureStore({
    reducer : {
        // orders : ordersSlice.reducer,
        basket : basketSlice.reducer
    }
})