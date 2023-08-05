import React from 'react'

// پیک فروشنده و قیمت
function VentorPrice({ price }) {
  return (
    <div>
        <p className='inline-block w-auto h-auto m-0 p-0 font-vrg text-scales-caption leading-lineHeight-caption text-carbon-main'>پیک فروشنده</p>
        <span className='inline-block w-auto h-auto mr-1 p-0 font-vb text-scales-caption leading-lineHeight-caption text-carbon-main'>{price}</span>
        <span className='inline-block w-auto h-auto mr-1 p-0 font-vrg text-scales-caption leading-lineHeight-caption text-carbon-main'>تومان</span>
    </div>
  )
}

export default VentorPrice


