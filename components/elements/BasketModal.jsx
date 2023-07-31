import React from 'react'

function BasketModal() {
  return (
    <div className='flex justify-center items-center fixed inset-0 z-[10000] leading-[1.15rem]'>
        <div className='bg-white shadow-shadows-modal rounded-xl max-h-[90vh] overflow-hidden leading-[1.15rem]'>
            <div className='w-[30rem] flex flex-col flex-nowrap justify-around leading-[1.15rem]'>
                <p className='inline-block w-auto h-auto p-4 m-0 font-vb text-scales-large leading-lineHeight-large text-carbon-main'>آیا از حذف سبد خرید مطمئن هستید؟</p>
                <div className='flex flex-row flex-nowrap justify-around p-4 leading-[1.15rem]'>
                    <button 
                        dir="rtl"
                        className='box-border inline-flex justify-center items-center w-[13.5rem] h-12 px-1 py-[1px] m-0 border-borders-xs border-carbon-alphaLight rounded-md bg-carbon-alphaLight shadow-none text-carbon-main font-vb text-scales-large leading-[1.15rem] bg-clip-padding overflow-visible normal-case cursor-pointer transition-all ease-out duration-0 hover:bg-carbon-alphaMedium hover:border-carbon-alphaMedium active:bg-carbon-alphaHigh active:border-carbon-alphaHigh focus:outline-none focus:bg-carbon-alphaLight focus:border-carbon-alphaHigh'>
                            انصراف
                    </button>
                    <button 
                        dir="rtl" 
                        className='box-border inline-flex justify-center items-center w-[13.5rem] h-12 px-1 py-[1px] m-0 border-borders-xs border-accent-main rounded-md bg-accent-main shadow-none text-white font-vb text-scales-large leading-[1.15rem] bg-clip-padding overflow-visible normal-case cursor-pointer transition-all ease-out duration-0 hover:bg-accent-light hover:border-accent-light active:bg-accent-dark active:border-accent-dark focus:outline-none focus:bg-accent-main focus:border-accent-alphaHigh'>
                            حذف سبد
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BasketModal