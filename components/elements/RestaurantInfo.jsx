import React from 'react'
import InfoTitle from './InfoTitle'
import FoodCategoryList from './FoodCategoryList'

export default function RestaurantInfo() {
  return (
    <div className='w-full h-screen pt-[68px] px-[16px] bg-slate-100'>
        <h1 className='text-center font-bold'>RestaurantInfo page(main Page)</h1>
    <div className='flex flex-col items-center justify-center md:justify-between md:flex-row-reverse'>

        <div>
            {/* Retaurant info Title section */}
            <InfoTitle/>
        </div>
        <div>
            <FoodCategoryList/>
        </div>
        <div>
            Retaurant info delivery and cart section
        </div>
    </div>
    </div>
  )
}
