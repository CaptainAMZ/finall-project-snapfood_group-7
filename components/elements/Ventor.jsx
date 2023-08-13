'use client'
import React from 'react'
import VentorPrice from './VentorPrice'
import { useParams } from 'next/navigation'

// آیکون و کامپوننت پیک فروشنده
function Ventor
({
 restaurants
})
{

  
  const {restaurant} = useParams()
  const {price, type} = restaurants.find(items => items.id == restaurant).delivery
    

  return (
    // white bg container
    <div className='flex flex-row flex-nowrap px-3 py-1 mb-2 bg-surface-light border-[1px] border-carbon-alphaLight rounded-lg'>
        <div className='flex flex-1 flex-row flex-nowrap justify-between items-center py-3'>
          
            <div className='flex flex-row flex-nowrap items-center'>
                {/* ventor icon */}
                <img src='/images/icon-ventor.svg' className='ml-4 w-5 h-5'/>
                {/* ventor's price, see VentorPrice.jsx */}
                <VentorPrice price={price} type={type}/>
            </div>
          
        </div>
    </div>
  )
}

export default Ventor