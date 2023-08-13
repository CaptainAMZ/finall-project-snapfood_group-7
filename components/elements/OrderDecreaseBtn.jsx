// 'use client'

// دکمه کاهش تعداد سفارش
// see OrderCountChange.jsx

import React from 'react'
// import DecreaseIcon from '@/public/images/icon-decrease.svg'

function OrderDecreaseBtn({ onClick}) {
  return (
    <button 
      type="button" 
      dir="rtl"
      onClick={onClick}
      className='box-border inline-flex justify-center items-center w-8 h-8 min-w-[2rem] p-0 m-0 font-vb text-scales-body bg-white border-borders-xs border-accent-alphaLight rounded-[50%] shadow-shadows-medium bg-clip-padding overflow-visible normal-case cursor-pointer transition-all ease-out duration-0 hover:bg-white hover:border-accent-alphaLight active:bg-accent-alphaMedium active:border-accent-alphaLight focus:outline-none focus:bg-white focus:border-accent-alphaLight'>
      <img src='/images/icon-decrease.svg'/>
    </button>
  )
}

export default OrderDecreaseBtn