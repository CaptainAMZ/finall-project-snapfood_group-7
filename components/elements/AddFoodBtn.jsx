  
import React, { useState } from 'react'
// import {useSelector, useDispatch } from 'react-redux';
// import { add, remove } from '../../redux/GelobalRedux/Featurs/cartSlice';
import OrderCountChange from './OrderCountChange';

export default function Btn() {
  
  const[btn, setBtn] = useState(false)

    const btnHandler = () =>{
      setBtn(true)
    }

    const backToBtnHandler = () =>{
      setBtn(false)
    }
  return (
    <div className='flex'>
      {
        btn && <OrderCountChange onClick={backToBtnHandler}/>
     
      }
      {
        !btn &&
        <button className='min-w-[100px] text-center ml-spacing-1 bg-surface-main w-[30%] p-[4px] rounded-full text-accent-main border-borders-xs border-inactive-light 
         shadow-shadows-small hover:bg-accent-light hover:text-surface-main transition-colors' onClick={btnHandler}>افزودن</button>
      }
      
    </div>
  )
}
