'use client'


import React from 'react'

export default function FoodCategoryList() {

  const listHandler = () =>{
      console.log("category")
  }

  return (
    <div className='flex  flex-col  mt-spacing-2 font-vrg text-scales-body text-carbon-light  h-[300px]  '>
        <button className='revers-btn' onClick={listHandler}>تخفیف دار ها</button>
        <button className='revers-btn' onClick={listHandler}>چلوکباب</button>
        <button className='revers-btn' onClick={listHandler}>خوراک</button>
        <button className='revers-btn' onClick={listHandler}>غذای ایرانی</button>
        <button className='revers-btn' onClick={listHandler}>سالاد و پیش غذا</button>
        <button className='revers-btn' onClick={listHandler}>سرویس اضافه</button>
        <button className='revers-btn' onClick={listHandler}>نوشیدنی</button>
       
    </div>
  )
}
