import React from 'react'
import Image from 'next/image'
export default function FComments({name,date,rate,desc,stuff}) {
  return (
    <div className='flex flex-col'>
    <div className='flex px-spacing-2'>
      <div className='flex-col w-[30%] text-right '>
          <p className='text-scales-body text-carbon-main'>{name}</p>
          <p className='text-scales-caption text-carbon-light my-spacing-1'> 
          {date}  
          </p>
          <div className='flex items-center border-borders-xs w-[50px] rounded-md border-surface-dark px-[4px]'>
            <div className='min-w-[15px]'>
            <Image
          className='object-cover ml-spacing-1 '
          src="/images/icons8-star-40.png"
          width={15}
          height={15}
          alt=''
          />
          </div>
          <p className='pt-[2px]'>{rate}</p>
          </div>
      </div>
      <div className='flex-col'>
          <p className='font-vmd text-scales-body text-carbon-light text-right'>
           {desc}   
          </p>
          <div className='flex'>
            <p className='font-vmd text-scales-caption mt-spacing-1 p-[8px] bg-surface-dark rounded-lg text-carbon-light'>
                {stuff} 
            </p>
          </div>
      </div>
    </div>
     <div className='bg-surface-dark h-[1px] w-[100%] my-spacing-3'></div>
  </div>

  )
}
