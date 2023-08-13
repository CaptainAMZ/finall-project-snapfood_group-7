'use client'
import React from 'react'
import FoodPrice from './FoodPrice'
import OrderCountChange from './OrderCountChange'
import { useDispatch, useSelector } from 'react-redux'
import { addBasketBtn, removeBasketBtn } from '@/redux/basketSlice'

// کامپوننت قیمت غذا و تعداد و دکمه افزایش کاهش تعداد
// see OrderedFoods.jsx

function OrderPriceQuantity({count, price, id}) {

  const basketItem = useSelector(state => state.basket.foods.find(item => item.id == id))
  const dispatch = useDispatch()

  const totalPrice = basketItem.count * basketItem.price

        const basketAddHandler = (id) =>{
            dispatch(addBasketBtn(id))
            
        }

        const basketRemoveHandler = (e,id) =>{
            dispatch(removeBasketBtn(id))
            
        }
          
  return (
    <div className='flex flex-row flex-nowrap justify-between items-center h-10'>
        <FoodPrice foodprice={totalPrice}/>
        <OrderCountChange id={id} count={count} onAdd={basketAddHandler} onClick={basketRemoveHandler}/>
    </div>
  )
}

export default OrderPriceQuantity