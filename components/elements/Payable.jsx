import React from 'react'

// کامپوننت قابل پرداخت در سبد خرید
// see CardDetail.jsx
function Payable({ payment }) {

        

  return (
    <div className='flex flex-row flex-nowrap justify-between items-center h-12'>
        <p className='inline-block w-auto h-auto p-0 m-0 font-vb text-scales-body text-carbon-main leading-lineHeight-body'>قابل پرداخت</p>
        <div className='inline-flex flex-col flex-nowrap'>
            <div className='inline-flex flex-row flex-nowrap items-center'>
                <div className='inline-flex flex-col flex-nowrap items-start'>
                    <span className='inline-block w-auto h-auto p-0 m-0 font-vb text-scales-body text-carbon-main leading-lineHeight-body'> 
                        {payment} 
                        <span className='inline-block w-auto h-auto p-0 mr-1 font-vrg text-scales-caption leading-lineHeight-caption text-carbon-light'>تومان</span>
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payable