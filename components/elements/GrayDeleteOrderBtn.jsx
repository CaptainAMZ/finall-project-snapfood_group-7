'use client'

import React from 'react'


// دکمه سطل زباله خاکستری در سبد خرید
// see OrderCountChange.jsx

function GrayDeleteOrderBtn({onClick}) {
  
  return (
    <button
        onClick={onClick}
        type="button" 
        dir="rtl" 
        className='box-border inline-flex justify-center items-center w-8 h-8 min-w-[2rem] p-0 m-0 font-vb text-scales-body border-borders-xs border-transparent rounded-[50%] shadow-none bg-clip-padding bg-transparent overflow-visible normal-case leading-[1.15rem] cursor-pointer transition-all ease-out duration-0 hover:bg-carbon-alphaLight hover:border-carbon-alphaLight active:bg-carbon-alphaMedium active:border-carbon-alphaMedium focus:outline-none focus:bg-transparent focus:border-carbon-alphaHigh'>
        <img src='/images/icon-gray-delete.svg' className='w-4 h-4 font-vb text-scales-body cursor-pointer'/>
    </button>
  )
}

export default GrayDeleteOrderBtn