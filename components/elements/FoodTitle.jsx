'use client'

import React from 'react'

// کامپوننت نام غذای سفارش داده شده در سبد خرید
// see OrderedFoods.jsx

function FoodTitle({ foodtitle }) {
  return (
    <div className='flex flex-row flex-nowrap justify-between items-center min-h-[2.5rem] bg-o'>
        <span className="inline-block w-auto h-auto p-0 m-0 text-carbon-main font-vb text-scales-body leading-lineHeight-body">{foodtitle}</span>
    </div>
  )
}

export default FoodTitle