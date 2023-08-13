import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function SearchMarket({ resturantName, count }) {

    return (
        <div className='flex flex-col border-b-[0.0625rem] border-surface-dark'>
            <div className='my-[1.125rem] flex items-center justify-between'>
                <span className=' mr-[0.75rem] font-vrg text-[0.875rem] leading-lineHeight-caption text-carbon-main' >
                    فروشگاه ها
                </span>
                <Link href={''} >
                    <div className='ml-[0.75rem] flex items-center'>

                        <span className=' mr-[0.75rem] font-vsb text-[0.875rem] leading-lineHeight-caption text-accent2-main'>
                            مشاهده همه
                            ({count})
                        </span>
                        <Image src={"/images/images-home/left-green.svg"} width={22} height={22} alt='left' />
                    </div>
                </Link>
            </div>

            <Link href={''} >

                <div className='p-[1.125rem] flex items-center '>
                    <Image className='ml-spacing-2' src={"/images/images-home/market-stall.svg"} width={20} height={20} alt='market' />
                    <div >
                        <span className='inline-block font-vrg text-[0.875rem] leading-lineHeight-caption text-carbon-main '>
                            {resturantName}
                        </span>
                    </div>
                </div>
            </Link>
        </div>

    )
}
