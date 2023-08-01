
import React from 'react'
import Image from 'next/image'

export default function Search() {
    return (

        <div className='fixed top-0 flex justify-center w-[31vw] min-w-[18.75rem] m-auto py-spacing-16'>

            <div className='w-[95%] flex flex-col'>
                <div className='relative w-full'>

                    <Image/>
                    <input type="text" />

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