import React from 'react'
import Image from 'next/image'
import InfoBtn from './InfoBtn'
import FoodCategoryList from './FoodCategoryList'
import { getLocalData } from '@/lib/localdata';





export default async function InfoTitle({params}) {


      
    const {restCats, restaurants} = await getLocalData();
    const resturant = restaurants.filter(items=> items.id == params.restaurant)

   
    
    
    

  return (
      
    <div className='font-vrg  '>
        <div className='flex mb-10 w-[30%] '>
            <div className='pl-spacing-1 min-w-[100%]'  >
            <Image
            src={resturant[0].logo}
            width={100}
            height={100}
            alt=''
            className='object-cover rounded-xl borders-lg border-borders-xs border-surface-light  shadow-md '/>
            </div>
            <div className='flex flex-col '>
            <div className='flex mb-2 md:mb-2 lg:mb-6 sm:mb-7  items-center  justify-between mt-2 '>
                <div className='flex '>
                <div className=' flex items-center '>
                 <div>
                 <Image
                 src="/images/icons8-star-20.png"
                 width={10}
                 height={10}
                 alt=''
                 className='object-cover '/>
                 </div>
                 <p className='text-scales-caption font-vsb pr-1'>{resturant[0].star}</p>
                </div>
                 <p className='px-1 text-inactive-dark font-vrg text-scales-caption'>(۲,۴۵۶ امتیاز)</p>
                </div>
        </div>
        <div>
             <h2 className='w-[99%] truncate text-scales-large font-vb'>{resturant[0].name}</h2>
         </div>
            </div>
        </div>
        <div className='w-full'>
            <InfoBtn {...resturant[0]}/>
        </div>
        <div className='w-full   '>
          {
            restCats.filter(item => item.restId == params.restaurant)
            .map(items => (
              
              <FoodCategoryList title={items.title}/>
            ))
          }
        </div>
    </div>
    
  )
}
