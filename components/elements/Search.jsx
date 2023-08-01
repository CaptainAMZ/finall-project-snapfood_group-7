
import React from 'react'
import Image from 'next/image'
import search from '../../public/images/images-home/search-dark.svg'

export default function Search() {
    return (

        <div className='fixed top-0 flex justify-center w-[31vw] min-w-[18.75rem] m-auto py-spacing-16'>

            <div className='w-[95%] flex flex-col'>
                <div className='relative w-full flex'>

                    <Image src={search} width={17} height={17}/>
                    <input  type="text" className=' w-full  h-12 py-spacing-16 pl-spacing-16 pt-spacing-5 border-[0.0625rem] border-carbon-alphaHigh rounded-[0.625rem] font-vrg 
                    leading-lineHeight-default'/>

                </div>

                <div>

                    <div>

                        <span>

                        </span>
                    </div>

                </div>
            </div>
        </div>
    )
}