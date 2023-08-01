
"use client"

import React from 'react'

const fastFoodList = [
  
  "تخفیف دارها",
  "ساندویچ ها",
  "چلو کباب ها",
  "غذای ایرانی",
  "خوراک ها",
  "سوخاری",
  "پاستا",
  "استیک",
  "پیتزا آمریکایی",
  "کباب ترک",
  "پیتزا ایتالیایی",
  "سالاد",
  "پیتزا کانزاسی",
  "برگر ",
  "غذای پرسی ",

]


export default function FastFoodCategoryList() {

  const listHandler = () =>{
      console.log("category")
  }

  return (
    <div className='flex flex-col lg:items-end mt-spacing-2 font-vrg text-scales-body overflow-y-scroll  h-[400px] flipped '>
       {
       fastFoodList.map((items) =>{
        return(
          <button key={items} className=' lg:text-left lg:ml-4 btn before:absolute before:h-5 before:w-[2px] before:bg-surface-overlay before:left-0
          before:opacity-0 focus:before:opacity-100 ' onClick={listHandler}>{items}</button>
        )
       })
       }
       
    </div>
  )
}
