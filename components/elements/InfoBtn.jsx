'use client'
import RestaurantInfoModal from '../modules/RestaurantInfoModal'

import React, { useState } from 'react'

export default function InfoBtn({name,rate,address,logo}) {

        const[modal, setModal] = useState(false)

        const openModalHandler = (e) =>{
            setModal(true)

            document.body.style.overflow = 'hidden';
        }


        const closeModalHandler = (e) =>{
          
          if(e.target.className.includes('MODAL')){
           setModal(false)
           document.body.style.overflow = 'auto';
           }
          
        }

        const closeModalBtn = () =>{
          setModal(false)

        }


  return (
<div>
<div>
     <button className='w-[100%] text-center bg-surface-main shadow-shadows-high p-spacing-1 rounded-full font-vrg text-scales-default text-accent2-main border-borders-xs' onClick={openModalHandler}> اطلاعات و نظرات</button>
    </div>
    { modal &&(<div onClick={closeModalHandler} className='MODAL fixed top-0 left-0 right-0 bg-black-alphaMedium flex items-center justify-center  h-[100vh] z-50 overflow-hidden' >
    <RestaurantInfoModal closeModal={closeModalBtn} name={name} rate={rate} address={address} logo={logo}/>
    </div>)
    }
</div>
  )
}
