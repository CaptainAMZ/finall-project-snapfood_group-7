import React from 'react'
import PreOrder from './PreOrder';
import Ventor from './Ventor';
import NoBasket from './NoBasket';
import Basket from './Basket';
import PreOrderModal from './PreOrderModal';

function PageSides() {
  return (
    <div className='sticky top-[5.5rem] transition ease duration-0'>
      {/* PreOrderTime */}
      {/* <PreOrder/> */}
      <PreOrderModal/>
      {/* Delivery Cost */}
      <Ventor/>
      {/* Basket Info */}
      {/* <NoBasket/> */}
      <Basket/>
    </div>
  )
}

export default PageSides;