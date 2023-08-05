import React from 'react'
import TotalPriceDetail from './TotalPriceDetail'

// کامپوننت مجموع، مالیات و هزینه ارسال سفارش
function TotalPrice() {
  return (
    <div className='flex flex-col flex-nowrap border-b-[1px] border-carbon-alphaLight'>
        <TotalPriceDetail total={'مجموع'} totalprice={'۹۰,۰۰۰'} text={'تومان'}/>
        <TotalPriceDetail fee={'مالیات'} text={'رایگان'}/>
        <TotalPriceDetail delivery={'هزینه ارسال'} deliverycost={'۱۵,۰۰۰'} text={'تومان'}/>
    </div>
  )
}

export default TotalPrice