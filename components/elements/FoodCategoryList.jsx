'use client'


import React from 'react'

const food = [
  "تخفیف دار",
  "چلو کباب",
  "خوراک",
  "غذای ایرانی",
  "سالاد و پیش غذا",
  "سرویس اضافه",
  "نوشیدنی",
]


export default function FoodCategoryList() {

  const listHandler = () =>{
      
  }

  return (
    <div className='flex flex-col lg:items-end mt-spacing-2 font-vrg text-scales-body overflow-y-auto lg:max-h-[400px]  max-h-[200px] flipped '>
    {
    food.map((items) =>{
     return(
       <button key={items} className=' text-right pr-2 lg:text-left lg:ml-4 btn before:absolute before:h-5 before:w-[2px] before:bg-surface-overlay before:left-0 md:text-left
       before:opacity-0 focus:before:opacity-100 ' onClick={listHandler}>{items}</button>
     )
    })
    }
    
 </div>
  )
}
