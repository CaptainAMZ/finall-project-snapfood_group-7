  
import React, { useState } from 'react'
import OrderCountChange from './OrderCountChange';
import {  useDispatch, useSelector } from 'react-redux';
import { addToBasket, decrease } from '@/redux/basketSlice';

export default function Btn({name,price,id,basket}) {

    const index = basket.findIndex(item => item.id == id)
    const count = basket[index]?.count
  
    const product = {name,price,id}

 
    
  const dispatch = useDispatch()
  
  const[btn, setBtn] = useState(false)

    const btnHandler = () =>{
      setBtn(true)
      dispatch(addToBasket(product))

    }
    

    const backToBtnHandler = (id) =>{
      if(count > 1){
        dispatch(decrease(id))
      }else if
      (count == 1){
        dispatch(decrease(id))
        setBtn(false)
      }
    }
  return (
  
    <div className='flex'>
      
      {
        btn && <OrderCountChange onClick={backToBtnHandler} onAdd={btnHandler} count={count} id={id}  />
     
      }
      {
        !btn &&
        <button className='min-w-[100px] text-center ml-spacing-1 bg-surface-main w-[30%] p-[4px] rounded-full text-accent-main border-borders-xs border-inactive-light 
         shadow-shadows-small hover:bg-accent-light hover:text-surface-main transition-colors' onClick={btnHandler}>افزودن</button>
      }

     
      
    </div>
  )
}













// export const calculateShoppingCart = (cart) => {
//   return cart.reduce( (init, current) => init = init + (current.count * current.price), 0)
// }
// const totalPrice = useMemo(() => calculateShoppingCart(cart), [cart])
