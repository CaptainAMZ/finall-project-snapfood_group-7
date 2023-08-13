import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function SearchProductCard({item,restaurants}) {

    const {delivery, id} = restaurants.find(restaurant => restaurant.id === item.restId)

  return (
    <Link href={`/service/restaurants/${id}`} className=" min-w-[267px] max-w-[500px]  p-[.75rem]">
      
      <section className="border border-surface-dark rounded-[0.75rem] p-[1rem] cursor-pointer shadow-shadows-small">
        <div className="flex flex-col items-center justify-center">
          <h3 className="flex flex-col items-center text-center mb-[0.375rem] text-ellipsis font-vrg text-scales-tiny leading-lineHeight-tiny h-auto text-carbon-main">
            {item.name}
          </h3>

          <div className="mb-[1.125rem] flex items-center justify-center">
            <span className="font-vrg text-scales-tiny leading-lineHeight-tiny  text-carbon-main ml-[4px]  text-center">{delivery.type}</span>

            <div className="inline-flex">
              <span className="font-vrg text-scales-tiny leading-lineHeight-tiny  text-carbon-main   text-center ">
                {delivery.price}
                <span className="font-vrg text-scales-caption leading-lineHeight-caption  text-carbon-main  inline-flex mr-[2px]  ">تومان</span>
              </span>
            </div>
          </div>
          <div className="mb-[0.875rem] cursor-pointer ">
            <Image className="rounded-[0.5rem]" src={item.image} width={112} height={112} alt="food" />
          </div>
          <div className="ml-[.5rem] flex">
            <span className="ml-[.5rem] flex items-center ">
              <Image className="ml-[.25rem] pb-1 inline-flex" src={'/images/icons8-star-20.png'} width={13} height={13} alt="star" />
                
              <span className="font-vmd text-scales-caption leading-lineHeight-caption  text-carbon-main inline-flex ">{item.star}</span>
            </span>
            <p  className="font-vrg text-scales-caption leading-lineHeight-caption  text-inactive-dark inline-flex ">({item.rate})</p>
          </div>
          <h2 className="font-vb text-scales-default leading-lineHeight-default  text-carbon-main inline-flex text-center mt-[8px] mb-[16px] text-ellipsis">{item.name}</h2>
          <div className="inline-flex">
              <span className="font-vsb text-scales-body leading-lineHeight-body  text-carbon-main   text-center ">
               {item.price}
                <span className="font-vrg text-scales-caption leading-lineHeight-caption  text-carbon-main  inline-flex mr-[4px]  ">تومان</span>
              </span>
            </div>
        </div>
      </section>
      
    </Link>
  );
}
