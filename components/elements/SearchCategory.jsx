import React from 'react'
import menu from'../../public/images/images-home/menu-4.svg'
import Image from 'next/image'

export default function SearchCategory({category}) {
  return (
   



<                   div className='flex flex-col border-b-[0.0625rem] border-surface-dark'>
                      <a >

                            <div className='p-[1.125rem] flex items-center '>

                                <Image className='ml-spacing-2' src={menu} width={20} height={20}/>

                                <div >
                                    <span className='inline-block font-vrg text-[0.875rem] leading-lineHeight-caption text-carbon-main '>
                                        دسته بندی

                                        <p className='inline-block font-vsb text-[0.875rem] leading-lineHeight-caption text-carbon-main mr-spacing-1'>
                                           {category}                                     </p>
                                    </span>

                                </div>
                            </div>
                        </a>


                    </div>
 
  )
}
