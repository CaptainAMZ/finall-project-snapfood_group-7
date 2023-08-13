import React from 'react'
import TotalPriceDetail from './TotalPriceDetail'




// کامپوننت مجموع، مالیات و هزینه ارسال سفارش
function TotalPrice({deliveryCost, totalPrice}) {

  

  return (
    <div className='flex flex-col flex-nowrap border-b-[1px] border-carbon-alphaLigh'>
        <TotalPriceDetail total={'مجموع'} totalprice={totalPrice || "0"} text={'تومان'}/>
        <TotalPriceDetail fee={'مالیات'} text={'رایگان'}/>
        <TotalPriceDetail delivery={'هزینه ارسال'} deliverycost={deliveryCost} text={'تومان'}/>
        

    </div>
  )
}

export default TotalPrice