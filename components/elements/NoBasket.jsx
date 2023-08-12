import React from 'react'
import Image from 'next/image'

// کامپوننت سبد خرید شما خالی است
function NoBasket() {
  return (
    <div className='flex flex-col flex-nowrap items-center mt-2 pt-12'>
        <Image width={20} height={20} src="/images/icons8-shopping-bag-32.png"/>
        <p className='inline-block w-auto h-auto mt-6 p-0 font-vmd text-scales-body leading-lineHeight-body text-initial text-inactive-dark'>سبد خرید شما خالی است!</p>
    </div>
  )
}

export default NoBasket