
import React, { use } from 'react'
import OrderCounter from './OrderCounter'
import GrayDeleteOrderBtn from './GrayDeleteOrderBtn'
import OrderIncreaseBtn from './OrderIncreaseBtn'
import OrderDecreaseBtn from './OrderDecreaseBtn'


// کامپوننت حذف سفارش، دکمه افزایش  و کاهش تعداد
// see OrderPriceQuantity.jsx

function OrderCountChange({onClick, onAdd,count ,id}) {

 

  return (
    <div className='flex flex-col flex-nowrap items-center m-0 leading-[1.15rem]'>
        <div className='flex flex-row flex-nowrap justify-center items-center leading-[1.15rem]'>
            <GrayDeleteOrderBtn onClick={()=>onClick(id)}/>
            {/* <OrderDecreaseBtn/> */}
            
             <OrderCounter ordercount={count || 0}/>
            <OrderIncreaseBtn onAdd={onAdd}/>
        </div>
    </div>
  )
}

export default OrderCountChange