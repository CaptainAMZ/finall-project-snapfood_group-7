
'use client'

import React from 'react'
import FoodCard from './FoodCard'
import { useParams, useSearchParams } from 'next/navigation'

export default  function  ({foods, fcomments}) {

  
  const search = useSearchParams();

  const getSearch = search.get("search")

  const url = useParams()

    console.log(url.restaurant)
  

  

  return (
    <div className='border-t-[.5px] text-center border-r-borders-xs border-b-borders-xs border-surface-dark rounded-md overflow-hidden bg-surface-light flex flex-col justify-start sx:w-[100%] lg:w-[100%] '> 
      <div className='flex flex-col md:flex-row flex-wrap '>
          {
              
            foods.filter(items => getSearch ? items.restId == url.restaurant && items.name.includes(getSearch): items.restId == url.restaurant)
            .map(items =>(
              <FoodCard key={items.id} name={items.name} image={items.image} price={items.price} rate={items.rate} items={items}  id={items.id} comment={fcomments} desc={items.desc}/>
            ))
          }

  
      </div>
    </div>
  )
}
