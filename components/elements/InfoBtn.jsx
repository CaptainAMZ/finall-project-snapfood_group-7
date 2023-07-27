'use client'
import RestaurantInfoModal from '../modules/RestaurantInfoModal'

import React from 'react'

export default function InfoBtn() {

        const modalHandler = (e) =>{
            console.log("hast")
        }


  return (
<div>
<div>
     <button className='w-full text-center bg-surface-main shadow-shadows-high p-spacing-1 rounded-full font-vrg text-scales-default text-accent2-main border-borders-xs' onClick={modalHandler}> اطلاعات و نظرات</button>
    </div>
    <div className='fixed inset-spacing-0 bg-black-alphaMedium flex items-center justify-center w-full h-[100vh]' >
    <RestaurantInfoModal/>
    </div>
</div>
  )
}
