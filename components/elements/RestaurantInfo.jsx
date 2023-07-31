import React from 'react'
import InfoTitle from './InfoTitle'
import FoodList from './FoodList'
export default function RestaurantInfo() {
  return (
    <div className='flex flex-col sm:flex-row sm:flex-wrap gap-10 sm:justify-center px-4 pt-[68px] lg:px-4 lg:mx-24  '>
     <div className=' sm:w-[45%] md:flex-1 
     '>
      <div className='sticky top-0 right-0'>
        <InfoTitle/>
      </div>
     </div>
     <div className='sm:w-[45%] md:flex-3 lg:flex-[2] '>
       <FoodList/>
     </div>
     <div className='bg-green-400 md:flex-1'>
        <p>
         
        </p>
     </div>
    </div>
    
  )
}
