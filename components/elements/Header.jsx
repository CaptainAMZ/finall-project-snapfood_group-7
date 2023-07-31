"use client";

import React from "react";
import Image from "next/image";
import search from "../../public/images/images-home/search.svg";
import location from "../../public/images/images-home/location.svg";
import logo from "../../public/images/images-home/logo.svg";
import down from "../../public/images/images-home/down.svg";
import person from "../../public/images/images-home/person.svg";
import order from "../../public/images/images-home/order.svg";
import Orders from "./Orders";
import { useState } from "react";


export default function Header() {

  const [modal , setModal] = useState(false);
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
                    className="ms-spacing-14 mt-spacing-11"
                    src={down}
                    width={17}
                    height={18}
                    alt="down"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center end-spacing-0 w-spacing-15  p-spacing-2 absolute m-auto max-h-spacing-6 rounded-lgg left-spacing-0 md:right-spacing-0 md:w-29 md:bg-surface-dark ">
            <Image
              className="ml-spacing-1"
              src={search}
              width={18}
              height={18}
              alt="search"
            />
            <p className="hidden md:inline-block md:text-inactive-dark md:text-start md:font-vrg md:leading-lineHeight-default md:tracking-tighter">
              جست و جو در اسنپ فود
            </p>
          </div>

          <div className=" flex items-center z-999 md:gap-x-spacing-3">
            <div className="p-spacing-2 cursor-pointer items-baseline flex">
              <Image
                className="ml-spacing-1 block cursor-pointer"
                src={person}
                width={17}
                height={17}
                alt="person"
              />

              <div></div>
            </div>

            <div onClick={()=>setModal(true)} className="  relative cursor-pointer flex max-h-spacing-6 mr-spacing-2 rounded-lgg">
              <Image
                className="ml-spacing-1 "
                src={order}
                width={18}
                height={18}
                alt="order"
              />

              <p  className="hidden md:inline-block  md:ml-spacing-1   md:font-vsb  md:leading-lineHeight-body md:text-surface-overlay  md:text-start  md:text-vm  md:tracking-tighter  md:cursor-pointer  ">
                سفارش ها
              </p>

              <Orders show ={modal}/>
            </div>
          </div>
        </div>
      </header>
    
    
  );
}
