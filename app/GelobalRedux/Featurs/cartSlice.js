import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:[],
   

    reducers:{
        add:(state,action) =>{
            const newitem = action.payload;
            const index = state.findIndex(item => item.id === action.payload.id)
           
            if(index == -1){
                state.push({...action.payload,count:1})
            }else{
                state[index].count = state[index].count + 1
                state[index].price  += newitem.price
            }
        },

        remove:(state, action) =>{
            const newitem = action.payload;
            const index = state.findIndex(item => item.id == action.payload.id )
                

            if(state[index].count == 1){
                state.splice(index, 1)
            }else{
                state[index].count = state[index].count -1
                state[index].price -= newitem.price
               
            }
        }

    }
})

export const {add, remove} = cartSlice.actions

export default cartSlice.reducer