import RestaurantInfo from '@/components/elements/RestaurantInfo'
import React from 'react'
import { getLocalData } from '@/lib/localdata';
export async function generateStaticParams () {

  const {restaurants} = await getLocalData();

  return restaurants.map(item => (
    {id : item.id.toString()}
    ))
    
    
}





export default function page({params}) {
      
  return (
    <div>
      <RestaurantInfo params={params}/>
      
    </div>
  )
}
