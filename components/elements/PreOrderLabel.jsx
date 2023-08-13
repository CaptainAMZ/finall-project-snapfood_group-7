import React from 'react'


// کامپوننت دیو اطلاعات زمان ارسال و زمان دیگر
// see PreOrderModal.jsx
function PreOrderLabel({ info, labeltext, icon }) {
  return (
    <div role='button' className='flex flex-row flex-nowrap justify-between items-center w-[calc(100%-32px)] px-4 py-3.5 grow cursor-pointer'>
        <label 
            dir="rtl" 
            className='inline-flex items-center select-none cursor-pointer '>
            <img src='/images/icon-check.svg'/>
            <div className='flex flex-col flex-nowrap mr-[16.83px] cursor-pointer'>
                <p className='inline-block w-auto h-auto p-0 m-0 font-vb text-scales-caption leading-lineHeight-caption text-carbon-main'>{labeltext}</p>
                <p className='inline-block w-auto h-auto p-0 m-0 font-vrg text-scales-caption leading-lineHeight-caption text-carbon-main'>{info}</p>
            </div>
        </label>
        <img src={icon}/>
    </div>
  )
}

export default PreOrderLabel