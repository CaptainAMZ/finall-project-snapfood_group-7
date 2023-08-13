import React from 'react'
import Image from 'next/image'
import InfoBtn from './InfoBtn'
import FoodCategoryList from './FoodCategoryList'
import { getLocalData } from '@/lib/localdata';





export default async function InfoTitle({params,comments}) {

   
    
    const {restCats, restaurants} = await getLocalData();
    const resturant = restaurants.find(items=> items.id == params.restaurant)

   
    
    
    

  return (
      
    <div className='font-vrg'>
        <div className='flex mb-10 '>
            <div className='pl-spacing-1 min-w-[100px]'>
            <Image
            src={resturant.logo}
            width={100}
            height={100}
            alt=''
            className='object-cover rounded-xl borders-lg border-borders-xs border-surface-light  shadow-md '/>
            </div>
            <div className='flex flex-col mr-1'>
            <div className='flex mb-2 md:mb-2 lg:mb-6 sm:mb-7  items-center  justify-between mt-2  w-[100%]'>
                <div className='flex '>
                <div className=' flex items-center'>
                 <div>
                 <Image
                 src="/images/icons8-star-20.png"
                 width={12}
                 height={12}
                 alt=''
                 className='object-cover pb-1'/>
                 </div>
                 <p className='text-scales-caption font-vsb pr-1'>{resturant.star}</p>
                </div>
                 <p className='px-1 text-inactive-dark font-vrg text-scales-caption'>(۲,۴۵۶ امتیاز)</p>
                </div>
        </div>
        <div>
             <h2 className='w-[95%] truncate text-scales-large font-vb'>{resturant.name}</h2>
         </div>
            </div>
        </div>
        <div>
            <InfoBtn {...resturant} comments={comments}/>
        </div>
     
          {
            restCats.filter(item => item.restId == params.restaurant)
            .map(({id,title} )=> (
              <FoodCategoryList key={id} title={title}/>
            ))
          }
    
    </div>
    
  )
}
