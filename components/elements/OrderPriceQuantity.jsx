import React from 'react'
import FoodPrice from './FoodPrice'
import OrderCountChange from './OrderCountChange'

// کامپوننت قیمت غذا و تعداد و دکمه افزایش کاهش تعداد
// see OrderedFoods.jsx

function OrderPriceQuantity() {
  return (
    <div className='flex flex-row flex-nowrap justify-between items-center h-10'>
        <FoodPrice foodprice={'۹۰,۰۰۰'}/>
        <OrderCountChange/>
    </div>
  )
}

export default OrderPriceQuantity