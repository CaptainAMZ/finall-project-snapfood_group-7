import React from 'react'
import FoodCard from './FoodCard'
import { getLocalData } from '@/lib/localdata';

export default async function  () {

  const {foods} = await getLocalData();
 
  



  return (
    <div className='border-t-[.5px] text-center border-r-borders-xs border-b-borders-xs border-surface-dark rounded-md overflow-hidden bg-surface-light flex flex-col justify-start sx:w-[100%] lg:w-[100%] '> 
      <h1 className='font-vmd text-scales-body py-spacing-2 text-surface-overlay border-l-borders-xs border-surface-dark w-[100%] ' > تخفیف‌ دارها</h1>
      <div className='flex flex-col md:flex-row flex-wrap '>
          {
            foods.map(items =>(
              <FoodCard key={items.id} name={items.name} image={items.image} price={items.price} rate={items.rate} items={items}  id={items.id}/>
            ))
          }
      <h1 className='font-vmd text-scales-body py-spacing-2 text-surface-overlay border-l-[.5px] border-surface-dark w-[100%] ' > تخفیف‌ دارها</h1>
     
      <h1 className='font-vmd text-scales-body py-spacing-2 text-surface-overlay border-l-[.5px] border-t-[.5px] border-surface-dark w-[100%] ' > تخفیف‌ دارها</h1>
      
      </div>
    </div>
  )
}
