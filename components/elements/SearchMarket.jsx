import React from 'react'
import leftgreen from'../../public/images/images-home/left-green.svg'
import Image from 'next/image'
import market from'../../public/images/images-home/market-stall.svg'

export default function SearchMarket({resturantName}) {
   
  return (
   


        <div className='flex flex-col border-b-[0.0625rem] border-surface-dark'>

        <div className='my-[1.125rem] flex items-center justify-between'>

            <span  className=' mr-[0.75rem] font-vrg text-[0.875rem] leading-lineHeight-caption text-carbon-main' >
                            فروشگاه ها
            </span>
            <a >

                <div className='ml-[0.75rem] flex items-center'>

                        <span className=' mr-[0.75rem] font-vsb text-[0.875rem] leading-lineHeight-caption text-accent2-main'>
                                    
                                
                                    مشاهده همه

                                    (23)
                        </span>


                        <Image src={leftgreen} width={22} />
                </div>
            
            </a>



        </div>

        <a >

        <div className='p-[1.125rem] flex items-center '>

            <Image className='ml-spacing-2' src={market} width={20} height={20}/>

            <div >
                <span className='inline-block font-vrg text-[0.875rem] leading-lineHeight-caption text-carbon-main '>
                    {resturantName}

                    
                </span>

            </div>
        </div>
        </a>
        </div>
   
  )
}
