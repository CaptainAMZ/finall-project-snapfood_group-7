import React from 'react'
import left from '../../public/images/images-home/left.svg'
import Image from "next/image";

export default function Category() {
  return (
    <div>

         <a href="">
            <div>
                {/* <Image className='mb-spacing-2  ' src={left} width={40} height={40} alt="food" /> */}
                <div className='absolute right-spacing-0 bottom-spacing-0  p'>
                    <p className='font-vrg leading-lineHeight-default inline-block text-carbon-main text-start'>
                            ایرانی
                    </p>
                    <Image className='mb-spacing-2  ' src={left} width={6.58} height={11.17} alt="left" />
                </div>
            </div>
         </a>
    </div>
  )
}
