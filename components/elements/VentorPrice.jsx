import React from 'react'

// پیک فروشنده و قیمت
function VentorPrice({ price, type }) {
  return (
    <div>
        <p className='inline-block w-auto h-auto m-0 p-0 font-vrg text-scales-caption leading-lineHeight-caption text-carbon-main'>{type}</p>
        <span className='inline-block w-auto h-auto mr-1 p-0 font-vb text-scales-caption leading-lineHeight-caption text-carbon-main'>{price}</span>
        <span className='inline-block w-auto h-auto mr-1 p-0 font-vrg text-scales-caption leading-lineHeight-caption text-carbon-main'>تومان</span>
    </div>
  )
}

export default VentorPrice


