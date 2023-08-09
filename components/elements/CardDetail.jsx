import React from 'react'
import CardCount from './CardCount'
import OrderedFoods from './OrderedFoods'
import TotalPrice from './TotalPrice'
import Payable from './Payable'
import Description from './Description'
import SubmitOrderBtn from './SubmitOrderBtn'
import { useSelector } from 'react-redux'
import { useParams } from 'next/navigation'

// کامپوننت سبد خرید
// see PageSides.jsx

function CardDetail({basket, restaurants}) {

  const {restaurant} = useParams()
  const deliveryCost = restaurants.find(items => items.id == restaurant).delivery.price

  

let totalPrice = 0
const basketPrice = useSelector(state => state.basket.foods.forEach(item => {
    totalPrice += item.count * item.price  
}));

        let totalCount = 0

          if(basket.length == 0){
              totalCount = 0
          }else if(basket.length == 1){

            totalCount = basket[0].count
             
          }else{
            totalCount= basket.reduce((pre, curr) =>{
              return(pre + curr.count)},0)}
        
      

       

  return (
    <div>
      <form className='mt-2 pt-4 pb-3 px-4 bg-surface-light border-[0.0625rem] border-carbon-alphaLight rounded-lg leading-[1.15rem]'>
        <CardCount count={totalCount}/>
        {
          basket.map((item, index) =>(
            <>
            <OrderedFoods key={item.id} {...item} index={index} />
            </>
          ))
        }
        <TotalPrice deliveryCost={deliveryCost} totalPrice={totalPrice} />
        <Payable deliveryCost={deliveryCost} totalPrice={totalPrice} />
        <Description/>
        <SubmitOrderBtn  />
      </form>
    </div>
  )
}

export default CardDetail