'use client'

import React from 'react'
// import Img from '@/public/images/icon-arrow-up.svg'

// دکمه فلش بالا در کامپوننت مودال انتخاب زمان دریافت سفارش
// see PreOrderModal.jsx

function ArrowUpBtn() {
  return (
    <div role='button' className='flex flex-row flex-nowrap justify-center items-center w-5 h-5 cursor-pointer'>
        <img src='/images/icon-arrow-up.svg' className='cursor-pointer'/>
    </div>
  )
}

export default ArrowUpBtn