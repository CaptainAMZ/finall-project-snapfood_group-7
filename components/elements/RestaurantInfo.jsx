import React from 'react'
import InfoTitle from './InfoTitle'
import FoodList from './FoodList'
import PageSides from './PageSides'
export default function RestaurantInfo() {
  return (
    <div className='flex flex-wrap pt-[68px] px-4 pb-4'>
      <aside className='max-w-full basis-full p-[calc(1rem)] sm:basis-1/2 md:basis-1/4 md:max-w-[25%]'>
        <div className='sticky top-[4rem] right-0'>
          <InfoTitle/>
        </div>
      </aside>
      <div className='max-w-full basis-full p-[calc(1rem)] sm:basis-1/2 sm:max-w-[50%]'>
        <FoodList/>
      </div>
      <aside className='max-w-full basis-full p-[calc(1rem)]p-[calc(1rem)] md:basis-1/4 md:max-w-[25%]'>
        <PageSides/>
      </aside>
    </div>
  )
}

// flex flex-col md:justify-between md:flex-row p-[calc(1rem)]
// flex flex-col p-[calc(1rem)] sm:flex-row sm:flex-wrap sm:justify-between lg:mx-24