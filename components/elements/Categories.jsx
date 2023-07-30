import React from 'react'
import Category from "@/components/elements/Category";
import irani from "../../public/images/images-home/irani.jpg";

export default function Categories() {
  const category = [
    { type: "ایرانی", img: irani },
    { type: "ایرانی", img: irani },
    { type: "ایرانی", img: irani },
    { type: "ایرانی", img: irani },
    { type: "ایرانی", img: irani },
    { type: "ایرانی", img: irani },
    { type: "ایرانی", img: irani },
    { type: "ایرانی", img: irani },
    { type: "ایرانی", img: irani },
    { type: "ایرانی", img: irani },
    { type: "ایرانی", img: irani },
    { type: "ایرانی", img: irani },
  ];
  return (
    <div className="flex-col items-start mb-spacing-8 ">
    <p className="font-vb font-bold leading-lineHeight-default inline-block text-carbon-light text-start mb-spacing-4 w-full ">
      دسته بندی ها
    </p>

    <div className="mb-spacing-4 w-[calc(100% + 2rem)] m-[calc(-1rem)] flex flex-wrap">
      {category.map((item) => {
        return (
         <Category type={item.type} img={item.img}/>
        );
      }
      )}
    </div>
  </div>
  )
}
