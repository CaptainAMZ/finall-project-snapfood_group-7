import React from 'react'
import InfoTitle from './InfoTitle'
import FoodList from './FoodList'
import { getLocalData } from '@/lib/localdata';
import PageSliderWrapper from './PageSliderWrapper';

export default async function RestaurantInfo({params}) {
  const {foods,fcomments, restaurants,rComments } = await getLocalData();
  return (

    <div className='flex flex-wrap pt-[68px] mt-[98px] px-4 pb-4 lg:mx-[90px] '>
      <div className='max-w-full basis-full p-[calc(1rem)] sm:basis-1/2 md:basis-1/4 md:max-w-[25%] '>
        <div className='sticky top-[4rem] right-0 z-10'>
          <InfoTitle params={params} comments={rComments}/>
        </div>
      </div>
      <div className='max-w-full basis-full p-[calc(1rem)] sm:basis-1/2 sm:max-w-[50%]'>
        <FoodList foods={foods} fcomments={fcomments}/>
      </div>
      <div className=' max-w-full basis-full p-[calc(1rem)]  md:basis-1/4 md:max-w-[25%]'>
      <div className='sticky top-16 '>
        <PageSliderWrapper foods={foods} restaurants={restaurants}/>
      </div>
      </div>
    </div>
  )
}