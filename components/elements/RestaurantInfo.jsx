import React from 'react'
import InfoTitle from './InfoTitle'
import FoodList from './FoodList'
export default function RestaurantInfo() {
  return (
    <div className='w-full min-h-screen pt-[68px]  bg-surface-main lg:max-w-[1440px] '>
    <div className='flex flex-col  md:flex-row items-center md:items-start md:justify-center gap-spacing-3'>

        <div className='md:w-[25%] w-[100%]'>
            {/* Retaurant info Title section */}
            <InfoTitle/>
        </div>
        <div className='md:max-w-[100%] text-center px-spacing-3 max-w-[50rem] flex flex-col justify-center mt-spacing-3 
        md:flex-row '>
            {/* Retaurant info Food List section */}
           <div className='md:max-w-[700px]  '>
           <FoodList/>
           </div>
        <div className=' bg-accent-light md:max-w-[100%] '>
          اثممنخخنحخ
        </div>
        </div>
        
    </div>
    </div>
  )
}
