import React from 'react'
import Image from 'next/image'

export default function OrderFoodName({infoFood}) {
    const {id , name , price, count} = infoFood
  return (
    <div className=' h-12  px-spacing-2 border-b-[0.0625rem] border-solid border-carbon-alphaLight flex items-center justify-between'>
    <span className='font-vrg text-vm leading-lineHeight-body carbon-light'>
            {name}
    </span>

    <div className='flex items-center flex-row-reverse'>
      <div className='mr-spacing-13 inline-flex'>
        <div className=' mr-spacing-13 inline-flex items-center'>
          <div className='mr-spacing-13 '>
            <span className='mr-spacing-13 font-vsb text-vm leading-lineHeight-body carbon-light '>
                      {price}
            </span>

            <span className=' mr-spacing-13 font-vrg text-vm leading-lineHeight-body carbon-light '>
                        تومان
            </span>
          </div>
        </div>
      </div>

      <Image   className='cursor-pointer pt-spacing-11' src={'/images/images-home/cross.svg'} width={6} height={8}/>
      <span className=' pt-spacing-11  mr-spacing-13 ml-spacing-13  font-vrg text-vm leading-lineHeight-body carbon-light'>
              {count}
      </span>
    </div>
  </div>
  )
}
