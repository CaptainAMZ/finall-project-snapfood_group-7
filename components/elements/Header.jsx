import React from "react";
import Image from "next/image";


import OrderDiv from "./OrderDiv";
import SearchDiv from "./SearchDiv";
import { getLocalData } from '../../lib/localdata'
import Link from "next/link";

import { headers } from 'next/headers';

export default async function Header({ params }) {



  // console.log(params);
  const { cats, foods, restaurants } = await getLocalData();
  return (

    <header className="w-full bg-white flex flex-col">
      <div className=" flex justify-between  items-center p-spacing-2  max-h-spacing-9">
        <div className="flex items-center">
          <Link
            href="/"
            className="hidden sm:block ml-spacing-5 outline-none cursor-pointer"
          >

           

            <Image src={"/images/images-home/logo.svg"} width={68} height={34} alt="logo" />

          </Link>
          <div className="max-h-spacing-5 p-spacing-11 cursor-pointer  inline-flex items-center  ">
            <Image
              className="me-spacing-12"
              src={"/images/images-home/location.svg"}
              width={17}
              height={18}
              alt="location"
            />

            <div className="me-spacing-12 flex cursor-pointer">
              <div className="flex justify-center items-baseline ">
                <span
                  className="pt-spacing-13 font-vrg text-vsm leading-lineHeight-tiny inline-block text-surface-overlay min-w-29 max-w-29 opacity-60 truncate w-auto 
                                sm:max-w-[calc(57vw-85px)] sm:min-w-9.375"
                >
                  ابوذر، پرستار، امیر حسین معماری
                </span>
                <Image
                  className="ms-spacing-14 mt-spacing-11 "
                  src={"/images/images-home/down.svg"}
                  width={19}
                  height={17}
                  alt="down"
                />
              </div>
            </div>
          </div>
        </div>

        <SearchDiv cats={cats} restaurants={restaurants} foods={foods} />

        <div className=" flex items-center z-999 md:gap-x-spacing-3">
          <div className="p-spacing-2 cursor-pointer items-baseline flex">
            <Image
              className=" block cursor-pointer"
              src={"/images/images-home/person.svg"}
              width={17}
              height={17}
              alt="person"
            />


          </div>

          <OrderDiv />
        </div>
      </div>
    </header>


  );
}
