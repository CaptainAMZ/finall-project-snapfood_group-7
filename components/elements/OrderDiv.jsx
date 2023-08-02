"use client";

import React from 'react'
import Image from "next/image";
import Orders from './Orders'
import order from '../../public/images/images-home/order.svg'
import { useState } from 'react';

export default function OrderDiv() {

    const [modalOrder , setModalOrder] = useState(false);



    const closeModalHandler =(e) =>{
     const targetClass=  e.target.className;
     
    if(targetClass.includes('CLOSE') ){
      setModalOrder(false);
      document.body.style.overflow = 'scroll';
      
     
    }
    
        

    }

    const openModalHandler = (e)=>{
        setModalOrder(true)
        e.stopPropagation()
        document.body.style.overflow = 'hidden';

       
    }
  return (
    <>
    
    <div onClick={ openModalHandler } className="  relative cursor-pointer flex max-h-spacing-6 mr-spacing-2 rounded-lgg ">
            <Image
            className="ml-spacing-1 "
            src={order}
            width={20}
            height={20}
            alt="order"
            />

            <p  className="hidden md:inline-block  md:ml-spacing-1   md:font-vxb  md:leading-lineHeight-body md:text-surface-overlay  md:text-start  md:text-vm  md:tracking-tighter  md:cursor-pointer md:pl-2 ">
            سفارش ها
            </p>

           
           
            
    </div>

            {modalOrder && <div  onClick={closeModalHandler} className='CLOSE  fixed inset-spacing-0 bg-black-alphaMedium flex items-center justify-center w-full h-screen z-50'>
                            
            <Orders  />
            </div>
            }
        
    </>
    
  


  )
}
