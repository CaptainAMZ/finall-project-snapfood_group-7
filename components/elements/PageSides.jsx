'use client'

import React from 'react'
import PreOrder from './PreOrder';
import Ventor from './Ventor';
import NoBasket from './NoBasket';
import CardDetail from './CardDetail';
import { useSelector } from 'react-redux';



// کامپوننت زمان ارسال، پیک فروشنده و سبد حرید در اینجا قرار میگیرن
function PageSides
({
 
  restaurants 
})
{


    const basket = useSelector(state=> state.basket.foods)


    
  return (
   
    <div>
   
      <PreOrder/>
      
      <Ventor  restaurants={restaurants}/>

      { basket.length !="0" ? <CardDetail  basket={basket}restaurants={restaurants}/> :
        <NoBasket />   
      }
        
    </div>
    
  )
}

export default PageSides;