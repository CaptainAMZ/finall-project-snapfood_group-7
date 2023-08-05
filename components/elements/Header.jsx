

import React from "react";
import Image from "next/image";
import location from "../../public/images/images-home/location.svg";
import logo from "../../public/images/images-home/logo.svg";
import down from "../../public/images/images-home/down.svg";
import person from "../../public/images/images-home/person.svg";

import OrderDiv from "./OrderDiv";
import SearchDiv from "./SearchDiv";
import {getLocalData} from '../../lib/localdata'




export default async function Header() {

  const {foods,restaurants} = await getLocalData();
  return (
   
      <header className="w-full bg-white flex flex-col">
        <div className=" flex justify-between  items-center p-spacing-2  max-h-spacing-9">
          <div className="flex items-center">
            <a
              href=""
              className="hidden sm:block ml-spacing-5 outline-none cursor-pointer"
            >
              <Image src={logo} width={68} height={34} alt="logo" />
            </a>
            <div className="max-h-spacing-5 p-spacing-11 cursor-pointer  inline-flex items-center  ">
              <Image
                className="me-spacing-12"
                src={location}
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
                    src={down}
                    width={19}
                    height={17}
                    alt="down"
                  />
                </div>
              </div>
            </div>
          </div>

          <SearchDiv/>

          <div className=" flex items-center z-999 md:gap-x-spacing-3">
            <div className="p-spacing-2 cursor-pointer items-baseline flex">
              <Image
                className=" block cursor-pointer"
                src={person}
                width={17}
                height={17}
                alt="person"
              />

              
            </div>

            <OrderDiv/>
          </div>
        </div>
      </header>
    
    
  );
}
