import React from 'react'
import PageSides from './PageSides'
export default function RestaurantInfo() {
  return (
    <div className='w-full min-h-screen pt-[68px] px-[16px] bg-surface-dark'>
        <h1 className='text-center font-bold'>RestaurantInfo page(main Page)</h1>
        <div className='flex flex-col md:justify-between md:flex-row p-[calc(1rem)]'>
            <div>
            </div>
            <div>
            </div>
            {/* DeliveryInfo */}
            <div className='basis-1/4 max-w-full xs:basis-full'>
                <PageSides/>
            </div>
        </div>
    </div>
  )
}
