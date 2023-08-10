import { createSlice } from "@reduxjs/toolkit";
const days = ["یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنجشنبه", "جمعه", "شنبه"]
const d = new Date



const orderHistorySlice = createSlice({
  name: "history",
  initialState:
  {
    userId: 1,
    historyList: [
      {
        id: 1,
        resName: 'Shila',
        image: '',
        dataMounth: '',
        dataHour: '',
        items: [
          {
            id: 1,
            foodName: 'Pizza',
            price: 200,
            count: 2
          },
          {
            id: 2,
            foodName: 'salad',
            price: 200,
            count: 2
          }
        ],
        totalPrice: 400,
        deliveryPay: 15000,
        tax: 554,
        total: 56
      },
      {
        id: 2,
        resName: 'kabab',
        image: '',
        dateMounth: '',
        dateHour: '',
        items: [
          {
            id: 1,
            foodName: 'loghme',
            price: 200,
            count: 2
          },
        ],
        totalPrice: 400,
        deliveryPay: 15000,
        tax: 554,
        total: 56
      },
    ],
    passID: ''
  },

  reducers: {

    passID: (state, action) => {
      state.passID = action.payload
    },

    addToHistory: (state, action) => {
      let month = d.toLocaleDateString('fa-IR', { month: 'long' });
      let date = d.toLocaleDateString('fa-IR', { day: 'numeric' });
      const { payload } = action;

      const { totalPrice, foods, name, deliveryCost, tax, logo, payment, id } = payload
      state.historyList.push(
        {
          id: Math.floor(Math.random() * 1000),
          resName: name,
          logo,
          dateMonth: month,//تیر
          dateHour: d.getHours(),
          dateMin: d.getMinutes(),
          dateDay: days[d.getDay()],//جمعه
          dateDate: date, //9
          items: [
            ...foods
          ],
          totalPrice,
          deliveryCost,
          tax,
          payment,
        },
      )
    }
  },
});

export const { passID, addToHistory } = orderHistorySlice.actions;
export default orderHistorySlice;
