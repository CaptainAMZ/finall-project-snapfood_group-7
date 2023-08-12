import React from 'react'
// import BasketIcon from '@/public/images/icon-basket.svg'

// کامپوننت سبد خرید شما خالی است
function NoBasket() {
  return (
    <div className='flex flex-col flex-nowrap items-center mt-2 pt-12'>
        <img src='/images/basket.svg' className='w-5 h-5' />
        <p className='inline-block w-auto h-auto mt-6 p-0 font-vmd text-scales-body leading-lineHeight-body text-initial text-inactive-dark'>سبد خرید شما خالی است!</p>
    </div>
  )
}

export default NoBasket