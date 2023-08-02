import React from 'react'
import Image from 'next/image'
import pizza from '../../public/images/images-home/pizza.jpg'
export default function SearchFood({foodName,resturantName,img}) {
  return (
    <a >

    <div className='p-[1.125rem] flex flex-col'>
            <div className='flex items-center h-[5rem]'>
                    <Image className='ml-spacing-2  ' src={img} width={56} height={56}/>

                    <div className='flex flex-col  '>

                        <span className='inline-block font-vsb text-[0.875rem] leading-lineHeight-caption text-carbon-main '>

                            {foodName}

                        </span>

                        <span className='inline-block font-vrg text-[0.875rem] leading-lineHeight-caption text-carbon-main mt-[0.75rem]'>

                            {resturantName}

                        </span>
                    </div>

            </div>

            <div className='flex justify-between items-center'>
                    <div>

                        <p className='inline-block font-vrg text-[0.875rem] leading-lineHeight-caption text-carbon-main  ml-[0.25rem]'>
                                پیک فروشنده
                        </p>

                       <span className='inline-block font-vrg text-[0.875rem] leading-lineHeight-caption text-carbon-main'>

                                54,000
                                <span className='inline-block font-vrg text-[0.875rem] leading-lineHeight-caption text-carbon-main mr-[0.25rem]'>
                                        نومان
                                </span>
                       </span>

                    </div>

                    <div>
                    <span className='inline-block font-vsb text-[0.875rem] leading-lineHeight-caption text-carbon-main'>

                           248,000
                            <span className='inline-block font-vrg text-[0.875rem] leading-lineHeight-caption text-carbon-main mr-[0.25rem]'>
                                    تومان                                                        </span>
                            </span>

                    </div>

            </div>

    </div>
</a>
  )
}
