import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function SearchCategory({category}) {
  return (
   



                    <div className='last:border-b-[0.0625rem]   last:border-surface-dark flex flex-col'>
                      <Link href={''}>
                            <div className='p-[1.125rem] flex items-center '>
                                <Image className='ml-spacing-2' src="/images/images-home/menu-4.svg" width={20} height={20} alt='menu'/>
                                <div >
                                    <span className='inline-block font-vrg text-[0.875rem] leading-lineHeight-caption text-carbon-main '>
                                        دسته بندی

                                        <p className='inline-block font-vsb text-[0.875rem] leading-lineHeight-caption text-carbon-main mr-spacing-1'>
                                           {category}                                     </p>
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </div>
 
  )
}
