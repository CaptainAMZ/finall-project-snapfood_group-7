import React from 'react'


// کامپوننت جزییات مجموع، مالیات و هزینه ارسال سفارش
function TotalPriceDetail({ total, fee, delivery, totalprice, deliverycost, text }) {
             
         

  return (
    <div className='h-8 flex flex-row flex-nowrap justify-between items-center'>
        <span className='inline-block w-auto h-auto p-0 m-0 font-vrg text-scales-body leading-lineHeight-body text-carbon-main'>{total || fee || delivery}</span>
        <div className='inline-flex flex-col flex-nowrap'>
            <div className='inline-flex flex-row flex-nowrap'>
                <div className='inline-flex flex-col flex-nowrap items-start'>
                    <span className='inline-block w-auto h-auto p-0 m-0 font-vrg text-scales-body text-carbon-main leading-lineHeight-body'> 
                        {totalprice || deliverycost}  
                        <span className='inline-block w-auto h-auto p-0 mr-1 font-vrg text-scales-caption leading-lineHeight-caption text-carbon-light'>{text}</span>
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TotalPriceDetail
