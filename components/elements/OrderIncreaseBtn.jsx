

import React from 'react'


// دکمه افزایش تعداد سفارش
// see OrderCountChange.jsx

function OrderIncreaseBtn({onAdd}) {
  return (
    <button onClick={onAdd} 
        type="button" 
        dir="rtl"

        className='box-border inline-flex justify-center items-center w-8 h-8 min-w-[2rem] p-0 m-0 font-vb text-scales-body bg-white border-borders-xs border-accent-alphaLight rounded-[50%] shadow-shadows-medium bg-clip-padding overflow-visible normal-case cursor-pointer transition-all ease-out duration-0 hover:border-accent-alphaLight active:bg-accent-alphaMedium active:border-accent-alphaLight focus:outline-none focus:border-accent-alphaLight hover:bg-accent-main text-xl text-accent-main hover:text-white'>
            <p>+</p>

    </button>
  )
}

export default OrderIncreaseBtn