import React from 'react'
import BasketModal from './BasketModal'
export default function RestaurantInfo() {
  return (
    <div className='w-full min-h-screen pt-[68px] bg-surface-dark'>
        <h1 className='text-center font-bold'>RestaurantInfo page(main Page)</h1>
        <div className='flex flex-col md:justify-between md:flex-row p-[calc(1rem)]'>
            <div>
              <BasketModal/>
            </div>
        </div>
    </div>
  )
}
