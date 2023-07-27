'use client'


import React from 'react'

export default function InfoBtn() {

        const modalHandler = (e) =>{
            console.log("hast")
        }


  return (
    <div>
     <button className='w-full text-center bg-surface-main shadow-shadows-high p-spacing-1 rounded-full font-vrg text-scales-default text-accent2-main border-borders-xs' onClick={modalHandler}> اطلاعات و نظرات</button>
    </div>
  )
}
