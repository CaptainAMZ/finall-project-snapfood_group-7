'use client'


import React from 'react'

export default function FoodCategoryList() {

  const listHandler = () =>{
      console.log("category")
  }

  return (
    <div className='flex  flex-col items-end mt-spacing-2 font-vrg text-scales-body text-carbon-light  h-[400px]'>
        <button className='btn' onClick={listHandler}>تخفیف دار ها</button>
        <button className='btn' onClick={listHandler}>چلوکباب</button>
        <button className='btn' onClick={listHandler}>خوراک</button>
        <button className='btn' onClick={listHandler}>غذای ایرانی</button>
        <button className='btn' onClick={listHandler}>سالاد و پیش غذا</button>
        <button className='btn' onClick={listHandler}>سرویس اضافه</button>
        <button className='btn' onClick={listHandler}>نوشیدنی</button>
       
    </div>
  )
}
