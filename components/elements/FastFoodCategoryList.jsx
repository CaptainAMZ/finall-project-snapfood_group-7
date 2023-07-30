
"use client"

import React from 'react'


export default function FastFoodCategoryList() {

  const listHandler = () =>{
      console.log("category")
  }

  return (
    <div className='flex flex-col items-end mt-spacing-2 font-vrg text-scales-body text-carbon-light overflow-y-scroll scrollbar  scrollbar-track-surface-alphaHigh  h-[400px] scrollbar-thumb-slate-100'>
        <button className='revers-btn' onClick={listHandler}>تخفیف دار ها</button>
        <button className='revers-btn' onClick={listHandler}>ساندویچ</button>
        <button className='revers-btn' onClick={listHandler}>پیتزا آمریکایی</button>
        <button className='revers-btn' onClick={listHandler}>پیتزا ایتالیایی</button>
        <button className='revers-btn' onClick={listHandler}>پیتزا ترکیبی (نصف و نصف)</button>
        <button className='revers-btn' onClick={listHandler}> اسلایدر گوشت</button>
        <button className='revers-btn' onClick={listHandler}>اسلایدر مرغ گریل</button>
        <button className='revers-btn' onClick={listHandler}>  اسلایدر مرغ سوخاری</button>
        <button className='revers-btn' onClick={listHandler}> سوخاری</button>
        <button className='revers-btn' onClick={listHandler}> کمبو</button>
        <button className='revers-btn' onClick={listHandler}> منو رژیمی</button>
        <button className='revers-btn' onClick={listHandler}>  سالادر و پیش غذا</button>
       
    </div>
  )
}
