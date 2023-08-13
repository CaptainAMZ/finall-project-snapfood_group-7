import { createSlice } from "@reduxjs/toolkit";
import tale from '../public/images/images-home/tale.png';
import shila from '../public/images/images-home/shila.jpg';
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
        resName: 'پیتزا شیلا (پیروزی)',
        logo: shila,
        dateMonth:'تیر',//تیر
        dateHour:20,
        dateMin: 44,
        dateDay: days[4],//جمعه
        dateDate: 8, //9
        items: [
          {
            id: 1,
            name: 'کمبو چیز',
            price: '348,000',
            count: 1
          },
          {
            id: 2,
           name: 'پیتزا مخلوط (۳۰ سانتی متری)',
            price: '218,000',
            count: 1
          }
        ],
        totalPrice: '566,000',
        deliveryCost: '14,000',
        payment: '570,000'
      },
      {
        id: 2,
        resName: 'تله پیتزا (پیروزی)',
        logo: tale,
        dateMonth:'تیر',//تیر
        dateHour:12,
        dateMin: 25,
        dateDay: days[6],//جمعه
        dateDate: 24, //9
        items: [
          {
            id: 1,
            name: 'کمبو چیز',
            price: '348,000',
            count: 1
          },
          {
            id: 2,
           name: 'پیتزا پنجره ای چیکن آلفردو (۱۸ سانتی)',
            price: '140,000',
            count: 1
          }
        ],
        totalPrice: '140,000',
        deliveryCost: '13,900',
        payment: '153,900'
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
