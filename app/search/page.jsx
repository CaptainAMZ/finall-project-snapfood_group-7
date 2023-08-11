import React from 'react'
import {getLocalData} from '../../lib/localdata'
import SearchProductCard from '@/components/elements/SearchProductCard';


export default async function page({searchParams}) {
    
    const { foods, restaurants} = await getLocalData();
    
    const searchValue=searchParams.search;

    const filteredFoods=foods.filter(item=> item.name.includes(searchValue) );
  return (
 

   <>
        {filteredFoods.map(item => <SearchProductCard/>)}
   </>

    
  )
}
