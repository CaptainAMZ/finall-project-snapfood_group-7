'use client'

import React from 'react'

// کامپوننت قیمت غذای سفارش داده شده در سبد خرید
// see OrderPriceQuantity.jsx

function FoodPrice({ foodprice }) {
  return (
    <div className='inline-flex flex-col flex-nowrap'>
        <div className='inline-flex flex-row flex-nowrap'>
            <div className='inline-flex items-start flex-col flex-nowrap'>
                <span className='inline-block w-auto h-auto p-0 m-0 font-vb text-scales-body text-carbon-main leading-lineHeight-body'> 
                    {foodprice}
                    <span className='inline-block w-auto h-auto p-0 mr-1 font-vrg text-scales-caption leading-lineHeight-caption text-carbon-light'>تومان</span>
                </span>
            </div>
        </div>
    </div>
  )
}

export default FoodPrice