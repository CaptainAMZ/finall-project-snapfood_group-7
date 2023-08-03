import React from 'react'
import Image from "next/image";
import food from "../../public/images/images-home/service-food.png"; 

export default function Servic({service, img}) {
  return (
    
        <a className='grow '>
            <div className='flex min-w-5.5 pb-spacing-2 cursor-pointer flex-col items-center justify-center  '>
                    <Image className='mb-spacing-2  ' src={img} width={40} height={40} alt="food" />
                    <span className=' inline-block font-vrg  leading-lineHeight-caption text-.75 text-carbon-light cursor-pointer'> {service}</span>

            </div>
        </a>
   
  )
}
