import React from 'react'
import CancelBtn from './CancelBtn'
import ConfirmBtn from './ConfirmBtn'

// مودال حذف سبد خرید

function DeleteBasketModal() {
  return (
    <div className='flex justify-center items-center fixed inset-0 z-[10000] leading-[1.15rem]'>
        <div className='bg-white shadow-shadows-modal rounded-xl max-h-[90vh] overflow-hidden'>
            <div className='w-[30rem] flex flex-col flex-nowrap justify-around'>
                <p className='inline-block w-auto h-auto p-4 m-0 font-vb text-scales-large leading-lineHeight-large text-carbon-main'>آیا از حذف سبد خرید مطمئن هستید؟</p>
                <div className='flex flex-row flex-nowrap justify-around p-4'>
                    <CancelBtn/>
                    <ConfirmBtn/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DeleteBasketModal