import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function SearchFood({foodName,restaurant,img,price}) {
        
  return (
    <Link href={`/service/restaurants/${restaurant.id}`} >
    <div className='p-[1.125rem] flex flex-col'>
            <div className='flex items-center h-[5rem]'>
                    <Image className='ml-spacing-2  ' src={img} width={56} height={56} alt='food'/>
                    <div className='flex flex-col  '>
                        <span className='inline-block font-vsb text-[0.875rem] leading-lineHeight-caption text-carbon-main '>
                            {foodName}

                        </span>
                        <span className='inline-block font-vrg text-[0.875rem] leading-lineHeight-caption text-carbon-main mt-[0.75rem]'>

                            {restaurant.name}
                        </span>
                    </div>
            </div>
            <div className='flex justify-between items-center'>
                    <div>
                        <p className='inline-block font-vrg text-[0.875rem] leading-lineHeight-caption text-carbon-main  ml-[0.25rem]'>
                        {restaurant.delivery.type}
                        </p>
                       <span className='inline-block font-vrg text-[0.875rem] leading-lineHeight-caption text-carbon-main'>

                                {restaurant.delivery.price}
                                <span className='inline-block font-vrg text-[0.875rem] leading-lineHeight-caption text-carbon-main mr-[0.25rem]'>
                                        تومان
                                </span>
                       </span>
                    </div>
                    <div>
                    <span className='inline-block font-vsb text-[0.875rem] leading-lineHeight-caption text-carbon-main'>

                           {price}
                            <span className='inline-block font-vrg text-[0.875rem] leading-lineHeight-caption text-carbon-main mr-[0.25rem]'>
                                    تومان                                                        </span>
                            </span>
                    </div>

            </div>

    </div>
</Link>
  )
}
