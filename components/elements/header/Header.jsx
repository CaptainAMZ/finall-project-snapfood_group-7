'use client'

import React from 'react'
import Image from 'next/image'
import search from '../../../public/images/images-home/search.svg'
import location from '../../../public/images/images-home/location.svg'
import res from '../../../public/images/images-home/service-meat.png'
import logo from '../../../public/images/images-home/logo.svg'
import down from '../../../public/images/images-home/down.svg'
import person from '../../../public/images/images-home/person.svg'
import order from '../../../public/images/images-home/order.svg'

export default function Header() {
  return (
    <div className='position sticky transform translate-y-0 transition all 0.3s ease-in 0s top-0 right-0 left-0 z-999 w-full'>
        <header className='w-full bg-white flex flex-col'>
            <div className=' flex justify-between  items-center p-spacing-2  max-h-spacing-9'>
                <div className='flex-row items-center' >

                    <a href="" className='hidden'>
                        <Image  src={logo}
                                        width={50}
                                         height={50}
                                         alt="Picture of the author"/>       
                    </a>
                    <div className='max-h-spacing-5 p-spacing-11 cursor-pointer  inline-flex items-center  '>
                        
                        <Image className='me-spacing-12' src={location}
                                            width={17}
                                            height={18}
                                            alt="location" />
                                
                        
                        <div className='me-spacing-12 flex cursor-pointer' >
                            
                            <div className='flex justify-center items-baseline '>
                                <span className='pt-spacing-13 font-vrg text-vsm leading-lineHeight-tiny inline-block text-surface-overlay min-w-29 max-w-29 opacity-60 truncate w-auto ' >
                                     ابوذر، پرستار، امیر حسین معماری</span>
                                <Image className='ms-spacing-14 mt-spacing-11' src={down}
                                                width={17}
                                                height={18}
                                                alt="down" />

                            </div>
                        </div>
                    </div>
                   


                </div>

                   

                <div className='end-spacing-0 w-spacing-15  p-spacing-2 absolute left-spacing-0'>

                    <Image className='ml-spacing-1' src={search}
                                                    width={19}
                                                    height={19}
                                                    alt="search" />
                        <p className='hidden'>
                                    جست و جو در اسنپ فود
                        </p>

                </div>


                <div className=' flex items-center z-999'> 

                            <div className='p-spacing-2 cursor-pointer items-baseline flex'>

                                 <Image className='ml-spacing-1 block cursor-pointer' src={person}
                                                    width={17}
                                                    height={18}
                                                    alt="person" />
                                   

                                   <div>

                                   </div>
                             </div>

                             <div className=' relative cursor-pointer flex max-h-spacing-6 mr-spacing-2 rounded-lgg'>
                                            
                                <Image className='ml-spacing-1 ' src={order}
                                                    width={20}
                                                    height={28}
                                                    alt="order" />

                                <p className='hidden'>سفارش ها </p>
                             </div>
                </div>
            </div>
     




        </header>
    </div>
  )
}
