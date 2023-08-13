import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { reset } from '@/redux/basketSlice'


// کامپوننت سبد خرید و تعداد سفارش داخل پرانتز
// see CardDetail.jsx


function CardCount({ count }) {
  

      const dispatch = useDispatch() 
  const removeBasketHandler = useCallback(()=>{
          dispatch(reset())
          
  },[])




  return (
    <div className='h-6 mb-2 flex flex-row flex-nowrap justify-between items-center'>
        <div className='flex flex-row flex-nowrap'>
            <p className='inline-block w-auto h-auto p-0 ml-1 font-vb text-scales-body leading-lineHeight-body text-carbon-light'>سبد خرید</p>
            <span className='inline-block w-auto h-auto p-0 m-0 font-vrg text-scales-body leading-lineHeight-body text-carbon-light'>({count})</span>
        </div>
        <img src="/images/trash-bold.svg" alt="trash" className='w-5 cursor-pointer' onClick={removeBasketHandler}  />
    </div>
  )
}

export default CardCount