import React from 'react'
import PreOrder from './PreOrder';
import Ventor from './Ventor';
import NoBasket from './NoBasket';
import Basket from './Basket';

function PageSides() {
  return (
    <div className='sticky top-[4rem] transition ease duration-0'>
      {/* PreOrderTime */}
      <PreOrder/>
      {/* Delivery Cost */}
      <Ventor/>
      {/* Basket Info */}
      {/* <NoBasket/> */}
      <Basket/>
    </div>
  )
}

export default PageSides;