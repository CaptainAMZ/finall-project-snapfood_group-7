import {configureStore} from '@reduxjs/toolkit'
import orderHistorySlice from './orderHistorySlice'


export const store = configureStore({
    reducer:{
        orderHistory: orderHistorySlice
    }
})