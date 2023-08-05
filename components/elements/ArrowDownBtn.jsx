'use client'

import React from 'react'
import ArrowDownIcon from '@/public/images/icon-arrow-down.svg'

// دکمه فلش پایین در کامپوننت دریافت در سریع ترین زمان ممکن
// see PreOrder.jsx

function ArrowDownBtn() {
  return (
    <div role='button' className='flex flex-row flex-nowrap justify-center items-center w-5 h-5 cursor-pointer'>
        <ArrowDownIcon className='box-content cursor-pointer'/>
    </div>
  )
}

export default ArrowDownBtn