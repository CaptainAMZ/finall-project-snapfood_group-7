
"use client"

import React from 'react'

export default function FastFoodCategoryList() {

  const listHandler = () =>{
      console.log("category")
  }

  return (
    <div className='flex flex-col items-end mt-spacing-2 font-vrg text-scales-body text-carbon-light overflow-y-scroll scrollbar scrollbar-thumb-inactive-dark scrollbar-track-surface-alphaHigh h-[400px]'>
        <button className='btn' onClick={listHandler}>تخفیف دار ها</button>
        <button className='btn' onClick={listHandler}>ساندویچ</button>
        <button className='btn' onClick={listHandler}>پیتزا آمریکایی</button>
        <button className='btn' onClick={listHandler}>پیتزا ایتالیایی</button>
        <button className='btn' onClick={listHandler}>پیتزا ترکیبی (نصف و نصف)</button>
        <button className='btn' onClick={listHandler}> اسلایدر گوشت</button>
        <button className='btn' onClick={listHandler}>اسلایدر مرغ گریل</button>
        <button className='btn' onClick={listHandler}>  اسلایدر مرغ سوخاری</button>
        <button className='btn' onClick={listHandler}> سوخاری</button>
        <button className='btn' onClick={listHandler}> کمبو</button>
        <button className='btn' onClick={listHandler}> منو رژیمی</button>
        <button className='btn' onClick={listHandler}>  سالادر و پیش غذا</button>
       
    </div>
  )
}
