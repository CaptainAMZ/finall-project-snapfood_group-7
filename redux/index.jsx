import {configureStore} from "@reduxjs/toolkit"

const store = configureStore({
    reducer : {
        orders : ordersSlice.reducer,
        basket : basketSlice.reducer,
    }
})