import React from 'react'
import FoodTitle from './FoodTitle'
import OrderPriceQuantity from './OrderPriceQuantity'

// کامپوننت غذاهای سفارش داده شده در سبد خرید
function OrderedFoods() {
  return (
    <div className='flex flex-col flex-nowrap px-0 py-2 border-b-[1px] border-carbon-alphaLight'>
        <FoodTitle foodtitle={'دوبل برگر پنیری'}/>
        <OrderPriceQuantity/>
    </div>
  )
}

export default OrderedFoods