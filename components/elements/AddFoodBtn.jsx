
'use client'
import React, { useCallback } from 'react'
import OrderCountChange from './OrderCountChange';
import {  useDispatch,  } from 'react-redux';
import { addToBasket, decrease } from '@/redux/basketSlice';

export default function Btn({name,price,id,basket}) {

    const index = basket.findIndex(item => item.id == id)
    const count = basket[index]?.count

   

    const product = {name,price,id}

      
    
  const dispatch = useDispatch()
  
  

    const btnHandler = () =>{
      
      dispatch(addToBasket(product))

    }

    const backToBtnHandler =useCallback((e,id)=>{
      e.stopPropagation()
      if(count > 1){
        dispatch(decrease(id))
      }else if
      (count == 1){
        dispatch(decrease(id))
        
      }
    })

  
  return (
  
    <div className='flex'>
      
      {
        !count == "0" && <OrderCountChange onClick={backToBtnHandler} onAdd={btnHandler} count={count} id={id}  />
     
      }
      {
        !count &&
        <button className='min-w-[100px] text-center ml-spacing-1 bg-white w-[30%] p-[6px] rounded-full text-accent-main border-borders-xs border-inactive-light 
         shadow-shadows-small hover:bg-accent-light hover:text-surface-main transition-colors text-sm' onClick={btnHandler}>افزودن</button>
      }

     
      
    </div>
  )
}













