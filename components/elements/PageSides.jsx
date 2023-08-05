'use client'

import React from 'react'
import PreOrder from './PreOrder';
import Ventor from './Ventor';
import NoBasket from './NoBasket';
import CardDetail from './CardDetail';

// کامپوننت زمان ارسال، پیک فروشنده و سبد حرید در اینجا قرار میگیرن
function PageSides() {
  return (
    <div className='sticky top-[4rem] transition ease duration-0'>
      {/* PreOrderTime */}
      <PreOrder/>
      {/* Delivery Cost */}
      <Ventor/>
      {/* Basket Info */}
      {/* <NoBasket/> */}
      <CardDetail/>
    </div>
  )
}

export default PageSides;