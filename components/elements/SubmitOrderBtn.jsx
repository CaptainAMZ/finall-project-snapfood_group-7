'use client'

import React from 'react'

// دکمه ثبت سفارش
function SubmitOrderBtn() {
  return (
    <div className='sticky bottom-0 w-full h-[7.5rem] min-h-[6.6875rem] bg-white'>
        <button 
            type="submit"
            // min-h-[6.6875rem]
            className='box-border inline-flex justify-center items-center w-full h-12 p-0 mt-4 mb-auto border-borders-xs border-accent-main rounded-md bg-accent-main shadow-none text-white font-vb text-scales-large bg-clip-padding overflow-visible normal-case cursor-pointer transition-all ease-out duration-0 hover:bg-accent-light hover:border-accent-light active:bg-accent-dark active:border-accent-dark focus:outline-none focus:bg-accent-main focus:border-accent-alphaHigh' 
            dir="rtl">
                ثبت سفارش
        </button>
    </div>
  )
}

export default SubmitOrderBtn