import { createSlice } from "@reduxjs/toolkit";



const basketSlice = createSlice({

    name:"basket",
    initialState:{
        foods:[],
    },
    reducers:{

        addToBasket:(state, action) =>{
            
            const index = state.foods.findIndex(item => item.id === action.payload.id)

           

            if(index == -1){
                state.foods.push({...action.payload, count:1})
               
            }else{
                 
                state.foods[index].count += 1
                

            }
        },
        decrease: (state, action) => {
            //id
            const {payload} = action
            const index = state.foods.findIndex(item => item.id === payload)
            state.foods[index].count -= 1
            if((state.foods[index].count < 1)){
                state.foods = state.foods.filter(item=>item.count != "0")
            }  
        },
        addBasketBtn:(state,action) =>{

            const index = state.foods.findIndex(item => item.id === action.payload) 
        
            state.foods[index].count += 1

        },
        removeBasketBtn:(state,action) =>{
            const {payload} = action
            const index = state.foods.findIndex(item => item.id == payload)
            state.foods[index].count -= 1
            if((state.foods[index].count < 1)){
                state.foods = state.foods.filter(item=>item.count != "0")
            }
        },
        reset: (state) => {
            state.foods.length = 0;
        },
    }
})


export const {addToBasket, decrease, addBasketBtn, removeBasketBtn ,reset, addToOrders} = basketSlice.actions

export default basketSlice