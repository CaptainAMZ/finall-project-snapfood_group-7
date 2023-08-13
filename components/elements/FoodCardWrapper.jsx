'use client'
import React from 'react'
import FoodCard from './FoodCard'
import { useSelector } from "react-redux";
import Image from 'next/image';

export default function FoodCardWrapper({foods,fcomments, getSearch, url}) {

 

    const basket = useSelector(state=> state.basket.foods)
    
    const resultFilter = foods.filter(items => getSearch ? items.restId == url.restaurant && items.name.includes(getSearch): items.restId == url.restaurant)

  return (
    <>
       {
              
              resultFilter.length ?
              resultFilter.map((items) =>(
                <FoodCard key={items.id} {...items} comment={fcomments} desc={items.desc} basket={basket} />
                
              )) 
              : 
              <div className='w-full h-[500px] flex items-center justify-center min-w-[200px]'>
                    <Image width={300} height={300} src="/images/Untitled.png" objectFit="cover"/>
              </div>
              
            }
    </>
  )
}
