import React from 'react'
import Image from 'next/image'
import InfoBtn from './InfoBtn'
import FoodCategoryList from './FoodCategoryList'
import FastFoodCategoryList from './FastFoodCategoryList'

export default function InfoTitle() {
  return (
  

    <div className='font-vrg  '>
        <div className='flex mb-10 w-[30%] '>
            <div className='pl-spacing-1 min-w-[100%]'  >
            <Image
            src="/images/5ced6a4b46383.png"
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
                 <p className='text-scales-caption font-vsb pr-1'>۴.۵</p>
                </div>
                 <p className='px-1 text-inactive-dark font-vrg text-scales-caption'>(۲,۴۵۶ امتیاز)</p>
                </div>
                {/* <div className=' shadow-sm font-vsb text-accent-dark  ml-spacing-1 rounded-full border-borders-xs px-[10px] py-[2px] text-center'>
                %۷۰
                </div> */}
        </div>
        <div>
             <h2 className='w-[99%] truncate text-scales-large font-vb'>آشپزخانه صنعتی امیران</h2>
         </div>
            </div>
        </div>
        <div className='w-full'>
            <InfoBtn/>
        </div>
        <div className='w-full   '>
        <FoodCategoryList/>
        {/* <FastFoodCategoryList/> */}
        </div>
    </div>
    
  )
}
