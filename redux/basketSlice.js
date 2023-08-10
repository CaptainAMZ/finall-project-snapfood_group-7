import { createSlice } from "@reduxjs/toolkit";



const basketSlice = createSlice({

    name:"basket",
    initialState:{
        foods:[],
        orders:[]
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
            const index = state.foods.findIndex(item => item.id === payload)
            state.foods[index].count -= 1
            if((state.foods[index].count < 1)){
                state.foods = state.foods.filter(item=>item.count != "0")
            }
        },
        reset: (state) => {
            state.foods.length = 0;
        },

        addToOrders: (state,action) =>{
            const date = new Date()
            state.orders=[]
            state.orders.push({...action.payload, foods:[...state.foods], date:{
                hour:date.getHours(),
                min:date.getMinutes(),
                day:date.getDay(),
                date:date.getDate(),
                month:date.getMonth()
              },})
            
        }
    }
})


export const {addToBasket, decrease, addBasketBtn, removeBasketBtn ,reset, addToOrders} = basketSlice.actions

export default basketSlice