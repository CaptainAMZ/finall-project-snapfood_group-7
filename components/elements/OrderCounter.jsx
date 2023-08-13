// 'use client'

import React from 'react'

// کامپوننت تعداد سفارش ها
// see OrderCountChange.jsx

function OrderCounter({ ordercount }) {

  
  return (
   
      
      <span className='inline-block w-spacing-6 h-auto p-0 m-0 text-center font-vb text-scales-body leading-lineHeight-body text-carbon-main'>{ordercount}</span>

    
  )
}

export default OrderCounter