import React from 'react'
import FoodCard from './FoodCard'

export default function  () {
  return (
    <div className='border-t-borders-xs text-center border-r-borders-xs border-b-borders-xs border-black-alphaMedium rounded-md overflow-hidden bg-surface-light flex flex-col justify-start sx:w-[100%] lg:w-[100%] '> 
      <h1 className='font-vmd text-scales-body py-spacing-2 text-surface-overlay border-l-borders-xs border-black-alphaMedium w-[100%] ' > تخفیف‌ دارها</h1>
      <div className='flex flex-col md:flex-row flex-wrap '>
      <FoodCard/>
      <FoodCard/>
      <FoodCard/>
      <FoodCard/>
      <FoodCard/>
      <FoodCard/>
      <FoodCard/>
      <FoodCard/>
      <FoodCard/>
      <FoodCard/>
      <FoodCard/>
      <FoodCard/>
      <FoodCard/>
      <FoodCard/>
      <FoodCard/>

      
      
      
     
      </div>
    </div>
  )
}
