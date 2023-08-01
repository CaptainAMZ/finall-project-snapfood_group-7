
"use client"
import Link from 'next/link'
import Image from 'next/image'
import AddFoodBtn from './AddFoodBtn'
import React, { useState } from 'react'
import RestaurantInfoModal from '../modules/RestaurantInfoModal'
import FoodModal from '../modules/FoodModal'



export default function FoodCard() {

  const[openModal, setOpenModal] = useState(false)

  const handleOpenModal = (e) =>{
    setOpenModal(true)
      console.log("yess")

      document.body.style.overflow = 'hidden';
  }


  const handleCloseModal = (e) =>{

   if(e.target.className.includes('CLOSE')){
     setOpenModal(false)
     document.body.style.overflow = 'auto';
   }
    
    
  }

  const closeModalBtn = () =>{
    setOpenModal(false)

  }


  return (
    
    <div className='font-vrg  md:w-[50%] border-l-borders-xs border-t-[.5px] border-b-[.5px] border-surface-dark'>
        <Link href="">
        <div className=' font-vrg flex justify-between py-spacing-1 px-spacing-1 lg:px-spacing-2'onClick={handleOpenModal}>
          <div className='mt-spacing-1'>
            <h3 className='font-vmd text-scales-body text-surface-overlay'>سالاد فصل</h3>
            <p className='text-right font-vrg text-scales-caption text-carbon-light mt-spacing-1'>یک نفره</p>
          </div>
          <div className='md:w-[100px] lg:w-[120px]'>
          <Image
            className='object-cover rounded-xl'
            src="/images/612c6182c8d3d.jpeg"
            width={120}
            height={120}
            alt=''
            />
          </div>
        </div>
        <div className='w-[100%] hover:bg-surface-main transition-colors flex items-center justify-between px-spacing-2  mb-spacing-2 md:px-0 lg:px-spacing-2'>
           <div className='flex items-center'>
           {/* <div className='bg-off-badge-color font-vsb text-accent-dark  ml-spacing-1 rounded-md p-[4px] text-center'>
                %۷۰
            </div> */}
            <div>
              <p className='text-scales-body line-through text-inactive-dark text-right  md:d-none'>۵۳,۵۰۰</p>
              <p className='text-scales-body font-vsb'>
              ۱۶,۰۵۰  تومان
              </p>
            </div>
           </div>
           <div className='min-w-[100px] text-center ml-spacing-1 bg-surface-main w-[30%] p-[4px] rounded-full text-accent-main border-borders-xs border-inactive-light 
            shadow-shadows-small hover:bg-accent-light hover:text-surface-main transition-colors'>
              <AddFoodBtn/>
           </div>
        </div>
      </Link>
      <div>
        {
            openModal &&(<div onClick={handleCloseModal} className='CLOSE fixed inset-spacing-0 bg-black-alphaMedium flex items-center justify-center w-full h-[100vh] z-50' >
           <FoodModal closeModal={closeModalBtn}/>
           </div>)
           
        }
      </div>
        </div>
    
  )
}
