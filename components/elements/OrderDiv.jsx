"use client";

import React from 'react'
import Image from "next/image";
import Orders from './Orders'
import order from '../../public/images/images-home/order.svg'
import { useState } from 'react';

export default function OrderDiv() {

    const [modal , setModal] = useState(false);



    const closeModalHandler =(e) =>{

    if(e.target.className.includes('CLOSE')){
      setModal(false);
      document.body.style.overflow = 'scroll';
     
    }
    
        

    }

    const openModalHandler = (e)=>{
        setModal(true)
       
        document.body.style.overflow = 'hidden';

       
    }
  return (
    <>
    
    <div onClick={ openModalHandler } className="  relative cursor-pointer flex max-h-spacing-6 mr-spacing-2 rounded-lgg ">
            <Image
            className="ml-spacing-1 "
            src={order}
            width={18}
            height={18}
            alt="order"
            />

            <p  className="hidden md:inline-block  md:ml-spacing-1   md:font-vsb  md:leading-lineHeight-body md:text-surface-overlay  md:text-start  md:text-vm  md:tracking-tighter  md:cursor-pointer  ">
            سفارش ها
            </p>

           
           
            
    </div>

            {modal && <div  onClick={closeModalHandler} className='CLOSE  fixed inset-spacing-0 bg-black-alphaMedium flex items-center justify-center w-full h-screen z-50'>
                            
            <Orders  />
            </div>
            }
        
    </>
    
  


  )
}
