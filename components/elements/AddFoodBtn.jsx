  
import React from 'react'
import {useSelector, useDispatch } from 'react-redux';
import { add, remove } from '../../app/GelobalRedux/Featurs/cartSlice';

export default function Btn({product}) {
  
  const cart = useSelector(store => store.cart)
  const dispatch = useDispatch()
  return (
    <div>
         {
                cart.filter(p => p.id == product.id)[0]?.count > 0 ? <div><button onClick={()=>dispatch(add(product))}>💈</button>
                {cart.filter( p => p.id== product.restId)[0].count} </div> :
                <button onClick ={() =>dispatch(add(product))}>افزودن</button>
        }

        {
           cart.filter(p => p.id == product.restId)[0]?.count > 0 && 
           <div><button onClick={() => dispatch(remove(product))} >-</button></div>

        }
        
    
    </div>
  )
}
