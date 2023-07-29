import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import AddFoodBtn from './AddFoodBtn'

export default function FoodCard() {
  return (
    
    <div className='font-vrg  md:min-w-[50%] border-l-borders-xs border-t-borders-xs border-black-alphaMedium flex flex-col'>
        <Link href="#" >
        <div className=' font-vrg flex justify-between py-spacing-2 px-spacing-2 '>
          <div className='mt-spacing-2'>
            <h3 className='font-vmd text-scales-body text-surface-overlay'>سالاد فصل</h3>
            <p className='text-right font-vrg text-scales-caption text-carbon-light mt-spacing-1'>یک نفره</p>
          </div>
          <div className='min-w-[150px] '>
          <Image
            className='object-cover rounded-xl'
            src="/images/612c6182c8d3d.jpeg"
            width={150}
            height={150}
            alt=''
            />
          </div>
        </div>
        <div className='w-[100%] hover:bg-surface-dark transition-colors flex items-center justify-between px-spacing-2 py-spacing-2 mb-spacing-2'>
           <div className='flex items-center'>
           <div className='bg-off-badge-color font-vsb text-accent-dark  ml-spacing-1 rounded-md p-[4px] text-center'>
                %۷۰
            </div>
            <div>
              <p className='text-scales-body line-through text-inactive-dark text-right'>۵۳,۵۰۰</p>
              <p className='text-scales-body font-vsb'>
              ۱۶,۰۵۰  تومان
              </p>
            </div>
           </div>
           <div className='text-center ml-spacing-1 bg-surface-main w-[40%] p-[4px] rounded-full text-accent-main border-borders-xs border-inactive-light shadow-shadows-small hover:bg-accent-light hover:text-surface-main transition-colors'>
              <AddFoodBtn/>
           </div>
        </div>
      </Link>
        </div>
    
  )
}
