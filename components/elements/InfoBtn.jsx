'use client'
import RestaurantInfoModal from '../modules/RestaurantInfoModal'

import React, { useState } from 'react'

export default function InfoBtn() {

        const[modal, setModal] = useState(false)

        const openModalHandler = (e) =>{
            setModal(true)

            document.body.style.overflow = 'hidden';
        }


        const closeModalHandler = () =>{
          setModal(false)
          document.body.style.overflow = 'scroll';
          console.log("baste")
        }


  return (
<div>
<div>
     <button className='w-[100%] text-center bg-surface-main shadow-shadows-high p-spacing-1 rounded-full font-vrg text-scales-default text-accent2-main border-borders-xs' onClick={openModalHandler}> اطلاعات و نظرات</button>
    </div>
    { modal &&(<div className='fixed inset-spacing-0 bg-black-alphaMedium flex items-center justify-center w-full h-[100vh] z-50' >
    <RestaurantInfoModal closeModal={closeModalHandler}/>
    </div>)
    }
</div>
  )
}
