import { createSlice } from "@reduxjs/toolkit";



const basketSlice = createSlice({

    name:"basket",
    initialState:{
        foods:[
          
            ]
    },
    reducers:{

        addToBasket:(state, action) =>{
            
            const index = state.foods.findIndex(item => item.id === action.payload.id)

            if(index == -1){
                state.foods.push({...action.payload, count:1})
                console.log("in ife", action.payload)
            }else{
                 
                state.foods[index].count += 1
                console.log("in else", action.payload)
            }
        },
        decrease: (state, action) => {
            //id
            const {payload} = action
            const index = state.foods.findIndex(item => item.id === payload)
            state.foods[index].count -= 1
        },
        removeItem: (state, action) => {
            //id
            const {payload} = action
            const index = state.foods.findIndex(item => item.id === payload)
            state.foods.splice(index, 1)
        },
        reset: (state) => {
            state.foods.length = 0;
        }
    }
})


export const {addToBasket, decrease} = basketSlice.actions

export default basketSlice