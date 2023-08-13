'use client'


import React from 'react'


export default function FoodCategoryList({title}) {

      

  const listHandler = () =>{
      
  }

  return (

    <div className='flex flex-col lg:items-end mt-spacing-2 font-vrg text-scales-body overflow-y-auto lg:max-h-[400px]  max-h-[200px] flipped '>
       <button  className=' text-right  lg:text-left lg:ml-4 btn before:absolute before:h-5 before:w-[2px]
        before:bg-surface-overlay  md:text-left md:before:left-0 
       before:opacity-0 focus:before:opacity-100 md:pl-2 'onClick={listHandler}>{title}</button>
 </div>

  )
}
