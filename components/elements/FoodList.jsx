import React from 'react'
import FoodCard from './FoodCard'

export default function  () {
  return (
    <div className='border-t-borders-xs border-r-borders-xs border-b-borders-xs border-black-alphaMedium rounded-md overflow-hidden w-full bg-surface-light flex flex-col justify-start md:px-spacing-3 '> 
      <h1 className='font-vmd text-scales-body py-spacing-2 text-surface-overlay border-l-borders-xs border-black-alphaMedium w-[100%]' > تخفیف‌ دارها</h1>
      <div className='flex flex-col md:flex-row'>
      <FoodCard/>
      <FoodCard/>
      <FoodCard/>
      <FoodCard/>
      </div>
    </div>
  )
}
