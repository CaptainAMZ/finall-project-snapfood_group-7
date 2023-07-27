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
        <div>
            Retaurant info Food List section
        </div>
        <div>
            Retaurant info delivery and cart section
        </div>
    </div>
    </div>
  )
}
