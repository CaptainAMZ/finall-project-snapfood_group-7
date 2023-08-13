'use client'
import React from 'react'
import FoodCard from './FoodCard'
import { useSelector } from "react-redux";

export default function FoodCardWrapper({foods,fcomments, getSearch, url}) {

 

    const basket = useSelector(state=> state.basket.foods)
    
    const resultFilter = foods.filter(items => getSearch ? items.restId == url.restaurant && items.name.includes(getSearch): items.restId == url.restaurant)

  return (
    <>
       {
              
              resultFilter.length ? 
              resultFilter.map(items =>(
                <FoodCard key={items.id} name={items.name} image={items.image} price={items.price} rate={items.rate} items={items} id={items.id} comment={fcomments} desc={items.desc} basket={basket} restId={items.restId}/>
              )) : <p>عرفان شیرینی</p>
              
            }
    </>
  )
}
