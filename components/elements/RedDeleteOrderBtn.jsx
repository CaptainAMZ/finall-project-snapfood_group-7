'use client'

import React from 'react'
import { useDispatch } from 'react-redux'
import { reset } from '@/redux/basketSlice'

// دکمه سطل زباله قرمز حذف سبد خرید
function RedDeleteOrderBtn() {

  const dispatch = useDispatch()
  const resetHandler = () =>{
        dispatch(reset())
  }

  return (
    <button onClick={resetHandler} 
        type="button" 
        dir="rtl" 
        className='inline-flex justify-center items-center w-8 h-8 min-w-auto p-0 m-0 font-vb text-scales-body border-borders-xs border-transparent rounded-[50%] shadow-none bg-clip-padding bg-transparent overflow-visible normal-case cursor-pointer transition-all ease-out duration-0 hover:bg-accent-alphaLight hover:border-accent-alphaLight active:bg-accent-alphaMedium active:border-accent-alphaMedium focus:outline-none focus:bg-transparent focus:border-accent-alphaHigh'>
        <img src='/images/icon-red-delete.svg' className='font-vb text-scales-body normal-case cursor-pointer'/>
    </button>
  )
}

export default RedDeleteOrderBtn