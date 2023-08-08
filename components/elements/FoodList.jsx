import React from 'react'
import FoodCard from './FoodCard'
import { getLocalData } from '@/lib/localdata';

export default async function  () {

  
  const {foods,fcomments } = await getLocalData();
  

  return (
    <div className='border-t-[.5px] text-center border-r-borders-xs border-b-borders-xs border-surface-dark rounded-md overflow-hidden bg-surface-light flex flex-col justify-start sx:w-[100%] lg:w-[100%] '> 
      <div className='flex flex-col md:flex-row flex-wrap '>
          {
            foods.filter(items => items.restId == 2)
            .map(items =>(
              <FoodCard key={items.id} name={items.name} image={items.image} price={items.price} rate={items.rate} items={items}  id={items.id} comment={fcomments} desc={items.desc}/>
            ))
          }

  
      </div>
    </div>
  )
}
