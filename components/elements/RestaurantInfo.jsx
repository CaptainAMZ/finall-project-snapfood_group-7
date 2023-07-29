import React from 'react'
import InfoTitle from './InfoTitle'
export default function RestaurantInfo() {
  return (
    <div className='w-full min-h-screen pt-[68px] px-[40px] bg-surface-dark'>
        <h1 className='text-center font-bold'>RestaurantInfo page(main Page)</h1>
    <div className='flex flex-col items-center justify-center md:justify-between md:flex-row'>

        <div>
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
        </div>
        <div>
            Retaurant info delivery and cart section
        </div>
        
    </div>
    </div>
  )
}
