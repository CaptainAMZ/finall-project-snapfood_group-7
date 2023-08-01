import React from 'react'
import Image from 'next/image'
import leftgreen from'../../public/images/images-home/left-green.svg'
import SearchFood from './SearchFood'
export default function SearchProduct() {
  return (
  <div className='flex flex-col border-b-[0.0625rem] border-surface-dark'>  
    <div className='mt-[1.125rem] flex items-center justify-between'>

    <span  className=' mr-[0.75rem] font-vrg text-[0.875rem] leading-lineHeight-caption text-carbon-main' >
        محصولات
    </span>
    
    <a >

            <div className='ml-[0.75rem] flex items-center'>

                    <span className=' mr-[0.75rem] font-vsb text-[0.875rem] leading-lineHeight-caption text-accent2-main'>
                                
                            
                                مشاهده همه

                                (684)
                    </span>


                    <Image src={leftgreen} width={22} />
            </div>

    </a>
    </div>
    <SearchFood foodName={'پیتزا پنجره ای'} resturantName={'پیتزا پروپک(تهرانپارس)'} img={''}/>
                          


</div>
  )
}
