'use client'

import React from 'react'

// دکمه فلش پایین در کامپوننت دریافت در سریع ترین زمان ممکن
// see PreOrder.jsx

function ArrowDownBtn() {
  return (
    <div role='button' className='flex flex-row flex-nowrap justify-center items-center w-5 h-5 cursor-pointer'>
        {/* <ArrowDownIcon className='box-content cursor-pointer'/> */}
        <img src="/images/icon-arrow-down.svg" alt="" />

    </div>
  )
}

export default ArrowDownBtn