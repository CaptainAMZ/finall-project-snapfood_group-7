
"use client"

import React from 'react'


export default function FastFoodCategoryList() {

  const listHandler = () =>{
      console.log("category")
  }

  return (
    <div className='flex flex-col lg:items-end mt-spacing-2 font-vrg text-scales-body overflow-y-scroll  h-[400px] flipped '>
        <button className=' lg:text-left lg:ml-4 btn before:absolute before:h-5 before:w-[2px] before:bg-surface-overlay before:left-0
        before:opacity-0 focus:before:opacity-100  ' onClick={listHandler}>تخفیف دار ها</button>
        <button className=' lg:text-left lg:ml-4 btn before:absolute before:h-5 before:w-[2px] before:bg-surface-overlay before:left-0
        before:opacity-0 focus:before:opacity-100  ' onClick={listHandler}>  ساندویچ</button>
        <button className=' lg:text-left lg:ml-4 btn before:absolute before:h-5 before:w-[2px] before:bg-surface-overlay before:left-0
        before:opacity-0 focus:before:opacity-100  ' onClick={listHandler}> چلو کباب </button>
        <button className=' lg:text-left lg:ml-4 btn before:absolute before:h-5 before:w-[2px] before:bg-surface-overlay before:left-0
        before:opacity-0 focus:before:opacity-100  ' onClick={listHandler}> غذای ایرانی </button>
        <button className=' lg:text-left lg:ml-4 btn before:absolute before:h-5 before:w-[2px] before:bg-surface-overlay before:left-0
        before:opacity-0 focus:before:opacity-100  ' onClick={listHandler}> خوراک </button>
        <button className=' lg:text-left lg:ml-4 btn before:absolute before:h-5 before:w-[2px] before:bg-surface-overlay before:left-0
        before:opacity-0 focus:before:opacity-100  ' onClick={listHandler}> سوخاری </button>
        <button className=' lg:text-left lg:ml-4 btn before:absolute before:h-5 before:w-[2px] before:bg-surface-overlay before:left-0
        before:opacity-0 focus:before:opacity-100  ' onClick={listHandler}> غذای اصلی </button>
        <button className=' lg:text-left lg:ml-4 btn before:absolute before:h-5 before:w-[2px] before:bg-surface-overlay before:left-0
        before:opacity-0 focus:before:opacity-100  ' onClick={listHandler}> پیتزا ایتالیایی </button>
        <button className=' lg:text-left lg:ml-4 btn before:absolute before:h-5 before:w-[2px] before:bg-surface-overlay before:left-0
        before:opacity-0 focus:before:opacity-100  ' onClick={listHandler}> پیتزا کانزاسی </button>
        <button className=' lg:text-left lg:ml-4 btn before:absolute before:h-5 before:w-[2px] before:bg-surface-overlay before:left-0
        before:opacity-0 focus:before:opacity-100  ' onClick={listHandler}> پیتزا کانزاسی </button>
        <button className=' lg:text-left lg:ml-4 btn before:absolute before:h-5 before:w-[2px] before:bg-surface-overlay before:left-0
        before:opacity-0 focus:before:opacity-100  ' onClick={listHandler}> پیتزا کانزاسی </button>
        <button className=' lg:text-left lg:ml-4 btn before:absolute before:h-5 before:w-[2px] before:bg-surface-overlay before:left-0
        before:opacity-0 focus:before:opacity-100  ' onClick={listHandler}> پیتزا کانزاسی </button>
        <button className=' lg:text-left lg:ml-4 btn before:absolute before:h-5 before:w-[2px] before:bg-surface-overlay before:left-0
        before:opacity-0 focus:before:opacity-100  ' onClick={listHandler}> پیتزا کانزاسی </button>
        <button className=' lg:text-left lg:ml-4 btn before:absolute before:h-5 before:w-[2px] before:bg-surface-overlay before:left-0
        before:opacity-0 focus:before:opacity-100  ' onClick={listHandler}> پیتزا کانزاسی </button>
        <button className=' lg:text-left lg:ml-4 btn before:absolute before:h-5 before:w-[2px] before:bg-surface-overlay before:left-0
        before:opacity-0 focus:before:opacity-100  ' onClick={listHandler}> پیتزا کانزاسی </button>

    </div>
  )
}
