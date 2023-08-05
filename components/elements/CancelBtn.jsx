'use client'

import React from 'react'

// دکمه انصراف در مودال حذف سبد خرید
// see DeleteBasketModal.jsx
function CancelBtn() {
  return (
    <button 
        dir="rtl"
        className='box-border inline-flex justify-center items-center w-[13.5rem] h-12 px-1 py-[1px] m-0 border-borders-xs border-carbon-alphaLight rounded-md bg-carbon-alphaLight shadow-none text-carbon-main font-vb text-scales-large bg-clip-padding overflow-visible normal-case cursor-pointer transition-all ease-out duration-0 hover:bg-carbon-alphaMedium hover:border-carbon-alphaMedium active:bg-carbon-alphaHigh active:border-carbon-alphaHigh focus:outline-none focus:bg-carbon-alphaLight focus:border-carbon-alphaHigh'>
            انصراف
    </button>
  )
}

export default CancelBtn