import React from 'react'
import Image from "next/image";
import Link from 'next/link';

export default function Category({ type, img, link }) {
  return (
    <div className="basis-1/2 max-w-1/2  p-[calc(1rem)] sm:basis-1/3 sm:max-w-1/3 md:basis-1/4 md:max-w-1/4 lg:basis-1/6 lg:max-w-1/6 " >
      <Link href={`/service/restaurants?cat=${link}`} className="bg-transparent">
        <div className="relative p-[0.1875rem] h-[5.9375rem] border border-solid border-white rounded-[0.75rem] shadow-shadows-medium cursor-pointer transition duration-200 flex bg-white ">
          <Image src={img} width={193} height={95} alt={type} className="border border-solid border-white rounded-xl w-full h-full  object-cover" />
          <div className=" move absolute right-spacing-0 bottom-spacing-0 py-[.25rem] pr-spacing-2 pl-[0.5rem] rounded-tl-xl rounded-br-xl bg-white flex items-center cursor-pointer transition ease-in-out duration-200 ">
            <p className="ml-[0.5rem] font-vrg text-1 leading-lineHeight-default text-carbon-main inline-block text-start cursor-pointer">
              {type}

            </p>

            <Image src={"/images/images-home/left.svg"} width={17} height={20
            } alt='left' className=" cursor-pointer  " />
          </div>
        </div>
      </Link>
    </div>
  )
}
