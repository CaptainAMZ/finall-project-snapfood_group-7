import React from 'react'
import left from '../../public/images/images-home/left.svg'
import Image from "next/image";

export default function Category({type,img}) {
  return (
    <div className="basis-1/2 max-w-1/2  p-[calc(1rem)] sm:basis-1/3 sm:max-w-1/3 md:basis-1/4 md:max-w-1/4 lg:basis-1/6 lg:max-w-1/6 " >
    <a className="bg-transparent">
      <div className="relative p-[0.1875rem] h-[6.5rem] border border-solid border-white rounded-xl shadow-category cursor-pointer transition duration-200 flex bg-white ">
        <Image src={img} width={500} height={500} className="border border-solid border-white rounded-xl w-full min-h-full object-cover "/>
        <div className="absolute right-spacing-0 bottom-spacing-0 py-[.3rem] pr-spacing-2 pl-[0.4rem] rounded-tl-xl rounded-br-xl bg-white flex items-center cursor-pointer">
           <p className="ml-[0.8125rem] font-vrg text-1 leading-lineHeight-default text-carbon-main inline-block text-start cursor-pointer">
              {type}

           </p>

           <Image src={left} width={17} height={20
           } className="hover:-translate-x-spacing-11 translate-x-spacing-0 transition ease-in-out duration-200 cursor-pointer "/>
        </div>
      </div>
    </a>
  </div>
  )
}
