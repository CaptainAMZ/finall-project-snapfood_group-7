"use client";

import React, { useState } from "react";
import Image from "next/image";
import search from "../../public/images/images-home/search.svg";
import Search from "./Search";
// import { useRouter } from 'next/router'
import { useSelectedLayoutSegment } from "next/navigation";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import { usePathname, useSearchParams } from "next/navigation";

export default function SearchDiv({ foods, cats, restaurants }) {
  const [modal, setModal] = useState(false);

  const { restaurant: restId } = useParams();
  const location = window.location;
  const path = location.pathname;
  let restaurantName;

  let text = "";
  switch (path) {
    case "/":
      text = "اسنپ فود";
      break;
    case "/service/restaurants":
      text = "رستوران";
      break;
    case `/service/restaurants/${restId}`:
      restaurantName = restaurants.find((item) => item.id == restId).name;
      text = restaurantName;
  }

  const closeModalHandler = (e) => {
    const targetClass = e.target.className;
    if (targetClass.includes("CLOSE")) {
      setModal(false);
      document.body.style.overflow = "scroll";
    }
  };

  const openModalHandler = (e) => {
    setModal(true);

    document.body.style.overflow = "hidden";
  };

  return (
    <>
      <div
        onClick={openModalHandler}
        className="flex items-center end-spacing-0 w-spacing-15  p-spacing-2 absolute m-auto max-h-spacing-6 rounded-lgg left-spacing-0 md:right-spacing-0 md:w-29 md:bg-surface-dark "
      >
        <Image
          className="ml-spacing-1"
          src={"/images/images-home/search.svg"}
          width={18}
          height={18}
          alt="search"
        />
        <p className="hidden md:inline-block md:text-inactive-dark md:text-start md:font-vrg md:leading-lineHeight-default md:tracking-tighter">
          جست و جو در {text}
        </p>
      </div>

      {modal && (
        <div
          onClick={closeModalHandler}
          className="CLOSE  fixed inset-spacing-0 bg-black-alphaMedium flex items-center justify-center w-full h-screen z-50 "
        >
          <Search foods={foods} cats={cats} restaurants={restaurants} />
        </div>
      )}
    </>
  );
}
