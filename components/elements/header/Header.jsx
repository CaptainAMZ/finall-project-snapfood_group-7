'use client'

import React from 'react'
import Image from 'next/image'
import location from '../../../public/images/images-home/location.svg'
import res from '../../../public/images/images-home/service-meat.png'
import logo from '../../../public/images/images-home/logo.svg'
import down from '../../../public/images/images-home/down.svg'

export default function Header() {
  return (
    <div className='position sticky transform translate-y-0 transition all 0.3s ease-in 0s top-0 right-0 left-0 z-999 w-full'>
        <header className='w-full bg-white shadow-header1 flex flex-col'>
            <div className='flex-col  justify-between  items-center  p-4 h-4.5 '>
                <div className='flex justify-end ' >

                    <a href="" className='hidden'>
                        <Image  src={logo}
                                        width={50}
                                         height={50}
                                         alt="Picture of the author"/>       
                    </a>
                    <div className='h-10 p-1 cursor-pointer items-center '>
                        
                        <Image className='ms-2.5' src={logo}
                                            width={12}
                                            height={14}
                                            alt="location" />
                                
                        
                        <div>
                            
                            <div>
                                <span > ابوذر پرستار امیر حسین معماری</span>
                                <Image className='ms-2.5' src={down}
                                                width={12}
                                                height={14}
                                                alt="location" />

                            </div>
                        </div>
                    </div>
                   


                </div>
            </div>
     




        </header>
    </div>
  )
}
