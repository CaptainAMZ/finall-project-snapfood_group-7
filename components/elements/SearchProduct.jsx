import React, { useRef, useState } from "react";
import Image from "next/image";
import leftgreen from "../../public/images/images-home/left-green.svg";
import SearchFood from "./SearchFood";
export default function SearchProduct({ foods, value, restaurants }) {
  
  const foodFilter=foods.filter((item)=>{

    if(item.name.includes(value)){
      
      return item
    }
  })
  return (
    <div className={`${foodFilter.length ? '' : 'hidden'} flex flex-col border-b-[0.0625rem] border-surface-dark`}>
      <div className="mt-[1.125rem] flex items-center justify-between">
        <span className=" mr-[0.75rem] font-vrg text-[0.875rem] leading-lineHeight-caption text-carbon-main">
          محصولات
        </span>

        <a>
          <div className="ml-[0.75rem] flex items-center">
            <span className=" mr-[0.75rem] font-vsb text-[0.875rem] leading-lineHeight-caption text-accent2-main">
              مشاهده همه (
             {foodFilter.length}
              )
            </span>

            <Image src={leftgreen} width={22} />
          </div>
        </a>
      </div>

      {foodFilter.map((food, index, arrayRef) => {
          return (
            <SearchFood
              key={food.id}
              foodName={food.name}
              restaurant={restaurants.filter(
                (item, index) => item.id === food.restId
              )}
              img={food.image}
              price={food.price}
            />
          );
        })}
    </div>
  );
}