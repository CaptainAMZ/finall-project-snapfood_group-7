'use client'


import React from 'react'

export default function InfoBtn() {

        const modalHandler = (e) =>{
            console.log("hast")
        }


  return (
    <div>
     <button className='w-full text-center bg-white py-2 rounded-full text-green-600 shadow-xl mb-4' onClick={modalHandler}> Customer commant</button>
    </div>
  )
}
