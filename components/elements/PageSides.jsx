import React from 'react'
import PreOrder from './PreOrder';
import Ventor from './Ventor';

function PageSides() {
  return (
    <div className='sticky top-[5.5rem] transition ease duration-0'>
      {/* PreOrderTime */}
      <PreOrder/>
      {/* Delivery Cost */}
      <Ventor/>
    </div>
  )
}

export default PageSides;