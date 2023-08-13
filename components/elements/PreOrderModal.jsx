import React from 'react'
import ArrowUpBtn from './ArrowUpBtn'
import PreOrderLabel from './PreOrderLabel'


// مودال انتخاب زمان دریافت سفارش
function PreOrderModal() {
  return (
    <div className='relative w-0 h-0'>
        <div className='absolute -top-11 -left-[19.375rem] w-[19.375rem] min-h-[3rem] p-0 flex flex-col items-center overflow-hidden text-carbon-main shadow-shadows-high rounded-lg bg-white leading-[1.15rem]'>
            <div className='flex flex-row flex-nowrap justify-between items-center w-[calc(100%-32px)] px-4 py-3.5 grow'>
                <div className='flex flex-row flex-nowrap justify-center items-center'>
                    <img src='/images/icon-select-time.svg' className='ml-4'/>
                    <p className='inline-block w-auto h-auto p-0 m-0 font-vrg text-scales-caption leading-lineHeight-caption text-carbon-main'>زمان دریافت سفارش</p>
                </div>
                <ArrowUpBtn/>
            </div>
            <PreOrderLabel labeltext={'سریع‌ترین زمان ممکن'} info={'ارسال سریع بعد از ثبت سفارش'} icon="/images/icon-preorder.svg"/>
            <hr className='w-full h-0 m-0 border-carbon-alphaLight border-solid border-t-[1px] grow overflow-visible'></hr>
            <PreOrderLabel info={'زمان دیگر'}/>
        </div>
    </div>
  )
}

export default PreOrderModal