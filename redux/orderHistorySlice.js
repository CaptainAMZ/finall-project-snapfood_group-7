import { createSlice } from "@reduxjs/toolkit";

const orderHistorySlice = createSlice({
  name: "history",
  initialState: 
    {
        userId: 1,
        historyList: [
            {   
                id: 1,
                resName: 'Shila',
                image:'',
                dataMounth:'',
                dataHour:'',
                items: [
                    {
                        id: 1,
                        
                        foodName :'Pizza',
                        price: 200,
                        
                        count: 2
                    },
                    {
                      id: 2,
                      
                      foodName :'salad',
                      price: 200,
                      
                      count: 2
                  }
                ],
                totalPrice: 400,
                deliveryPay:15000,
                tax:554,
                total:56
               

               
            },
            {   
              id: 2,
              resName: 'kabab',
              image:'',
              dateMounth:'',
              dateHour:'',
              items: [
                  {
                      id: 1,
                      
                      foodName :'loghme',
                      price: 200,
                      
                      count: 2
                  },
                 
              ],
              totalPrice: 400,
              deliveryPay:15000,
              tax:554,
              total:56
             

             
          },
           
        ],
        passID :''
    },
   
   
  
    
  

  reducers: {

    passID:(state,action)=>{
        state.passID = action.payload
    },

    addToHistory:(state,action)=>{
      const {payload} = action;
      
      const {totalPrice,foods,name,deliverycost,tax,date,logo,payment,id}=payload
      state.historyList.push({
        id : Math.floor(Math.random()*1000),
        foods : foods,
        totalPrice : totalPrice,
        name : name,
        logo:logo,
        deliveryCost:deliverycost,
        payment: payment,
        data:date,
        tac:tax

      })
    }
  },
});

export const {passID,addToHistory} = orderHistorySlice.actions;
export default orderHistorySlice;
