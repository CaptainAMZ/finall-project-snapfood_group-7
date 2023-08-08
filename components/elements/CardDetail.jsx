import React from 'react'
import CardCount from './CardCount'
import OrderedFoods from './OrderedFoods'
import TotalPrice from './TotalPrice'
import Payable from './Payable'
import Description from './Description'
import SubmitOrderBtn from './SubmitOrderBtn'

// کامپوننت سبد خرید
// see PageSides.jsx

function CardDetail() {
  return (
    <div>
      <form className='mt-2 pt-4 pb-3 px-4 bg-surface-light border-[0.0625rem] border-carbon-alphaLight rounded-lg leading-[1.15rem]'>
        <CardCount count={'۱'}/>
        <OrderedFoods/>
        <TotalPrice/>
        <Payable payableprice={'۱۰۵,۰۰۰'}/>
        <Description/>
        <SubmitOrderBtn/>
      </form>
    </div>
  )
}

export default CardDetail