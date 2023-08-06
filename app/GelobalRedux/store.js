"use client"


import {configureStore} from '@reduxjs/toolkit'
import cartSlice from './Featurs/cartSlice'



export const store  = configureStore({
    reducer:{
        cart:cartSlice
    }
})