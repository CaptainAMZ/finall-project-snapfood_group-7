import React from 'react'
import Image from 'next/image'
import InfoBtn from './InfoBtn'

export default function InfoTitle() {
  return (
    <div className='flex flex-col items-center px-16px w-full'>
    <div className='flex  w-[100%] gap-2 justify-center mb-[24px]'>
        <div className='flex flex-col h-0 '>
        <div className='flex mb-10 items-center'>
            <div className='border-white border-2 py-1 px-2 mr-10 rounded-full'>
                15%
            </div>
            <div className='flex flex-row-reverse pl-5'>
                <p className='px-1'>star</p>
                <p className='px-1'>pint</p>
                <p className='px-1'>subpoint</p>
            </div>
        </div>
        <div className='text-center'>
            <h2>Restaurant name</h2>
        </div>
        </div>
        <div className='border-2 border-white rounded-lg overflow-hidden '>
           <Image
           src="/images/5ced6a4b46383.png"
           width={100}
           height={100}
           alt=''
           className='object-cover  '/>
        </div>
    </div>
        <div className='w-full'>
            <InfoBtn/>
        </div>
    </div>
  )
}
