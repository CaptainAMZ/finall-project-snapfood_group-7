import React from 'react'
import Image from 'next/image'
import InfoBtn from './InfoBtn'
import FoodCategoryList from './FoodCategoryList'
import FastFoodCategoryList from './FastFoodCategoryList'

export default function InfoTitle() {
  return (
    <div className='min-w-[300px] w-[100%] p-[16px] font-vmd  rounded-lg'>
    <div className='flex w-[100%]  mb-spacing-4'>
        <div className='pl-spacing-2 min-w-[100px]'  >
           <Image
           src="/images/5ced6a4b46383.png"
           width={100}
           height={100}
           alt=''
           className='object-cover rounded-xl borders-lg border-borders-xs border-surface-light  '/>
        </div>
        <div className='flex flex-col h-0 '>
        <div className='flex mb-10 flex-row justify-between items-center mb-spacing-4'>
            <div className='flex flex-col pl-5 '>
                <div className=' flex items-center justify-start'>
                <p className='px-1 pl-spacing-1'>*</p>
                <p className='px-1 pl-spacing-'>۴.۵</p>
                </div>
                <p className='px-1 text-inactive-dark font-vrg text-scales-caption'>(۲,۴۵۶ امتیاز)</p>
            </div>
                <p className='mr-spacing-10 px-[10px] py-[4px] rounded-2xl text-accent-dark border-surface-light border-borders-xs '> %۱۵</p>
        </div>
        <div>
            <h2 className='w-[76%] truncate'>آشپزخانه صنعتی امیران</h2>
        </div>
        </div>
    </div>
        <div className='w-full'>
            <InfoBtn/>
        </div>
        <div className='w-full'>
            <FoodCategoryList/>
        </div>
        {/* <div className='w-full'>
            <FastFoodCategoryList/>
        </div> */}
        
    </div>
  )
}
