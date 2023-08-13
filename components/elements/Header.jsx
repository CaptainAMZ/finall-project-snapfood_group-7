import React from "react";
import Image from "next/image";
import OrderDiv from "./OrderDiv";
import SearchDiv from "./SearchDiv";
import { getLocalData } from '../../lib/localdata'
import Link from "next/link";
import Location from "./Location";
import Person from "./Person";



export default async function Header() {

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

          
            <Location/>

          </div>
        </div>

        <SearchDiv cats={cats} restaurants={restaurants} foods={foods} />

        <div className=" flex items-center z-999 md:gap-x-spacing-3">
          <Person/>

          <OrderDiv />
        </div>
      </div>
    </header>


  );
}
