
"use client"

import React from 'react'



export default function FastFoodCategoryList({title}) {

  const listHandler = () =>{
      
  }

  return (
    <div className='flex flex-col lg:items-end mt-spacing-2 font-vrg text-scales-body overflow-y-scroll flipped '>

          <button  className=' lg:text-left lg:ml-4 btn before:absolute before:h-5 before:w-[2px] before:bg-surface-overlay before:left-0
          before:opacity-0 focus:before:opacity-100 ' onClick={listHandler}>{title}</button>
       

    </div>
  )
}
