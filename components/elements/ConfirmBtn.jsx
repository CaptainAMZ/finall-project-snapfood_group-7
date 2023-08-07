import React from 'react'

// دکمه تایید حذف سبد خرید در مودال
// see DeleteBasketModal.jsx

function ConfirmBtn() {
  return (
    <button 
        dir="rtl" 
        className='box-border inline-flex justify-center items-center w-[13.5rem] h-12 px-1 py-[1px] m-0 border-borders-xs border-accent-main rounded-md bg-accent-main shadow-none text-white font-vb text-scales-large bg-clip-padding overflow-visible normal-case cursor-pointer transition-all ease-out duration-0 hover:bg-accent-light hover:border-accent-light active:bg-accent-dark active:border-accent-dark focus:outline-none focus:bg-accent-main focus:border-accent-alphaHigh'>
            حذف سبد
    </button>
  )
}

export default ConfirmBtn