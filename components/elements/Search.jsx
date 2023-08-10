"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import searchDark from "../../public/images/images-home/search-dark.svg";
import crossCircle from "../../public/images/images-home/cross-circle.svg";
import left from "../../public/images/images-home/left.svg";

import SearchCategory from "./SearchCategory";
import SearchMarket from "./SearchMarket";
import SearchFood from "./SearchFood";
import SearchProduct from "./SearchProduct";
import { useRouter } from "next/navigation";

export default function Search({ foods, cats, restaurants }) {
  const router = useRouter();
  const location = window.location;
  const path = location.pathname;

  const icon = searchDark;
  // const icon = crossCircle;
  // width ={20px} height ={20px}

  const [value, setValue] = useState("");

  const handleSearchChange = (e) => {
    const content = e.target.value;
    setValue(content);
    console.log(e);

    // if (e.key == "Enter")
    //   switch (path) {
    //     case "/":
    //       router.push(`/?search=${value}`);
    //       break;
    //     case "/service/restaurants":
    //       text = "رستوران";
    //       break;
    //     case `/service/restaurants/${restId}`:
    //       restaurantName = restaurants.find((item) => item.id == restId).name;
    //       text = restaurantName;
    //   }
  };

  const emtyInputValue = () => {
    setValue("");
  };

  const INPUT = useRef();
  useEffect(() => {
    INPUT.current.focus();
  }, []);

  return (
    <form className="fixed top-0 flex justify-center w-[31vw] min-w-[18.75rem] m-auto py-spacing-16 mt-[.8rem]">
      <div className="w-[95%] flex flex-col">
        <div className="relative w-full flex items-center justify-center ">
          <Image
            onClick={value.length ? emtyInputValue : undefined}
            className="absolute top-0 right-4  cursor-pointer pt-spacing-2"
            src={`${
              !value.length
                ? "/images/images-home/search-dark.svg"
                : "/images/images-home/cross-circle.svg"
            }`}
            width={17}
            height={17}
          />

          <input
            ref={INPUT}
            onChange={handleSearchChange}
            value={value}
            type="text"
            className="outline-none focus:border-black w-full  h-12 py-spacing-16 pl-spacing-16 pr-spacing-5 border-[0.0625rem] border-carbon-alphaHigh rounded-[0.625rem] font-vrg 
                    leading-lineHeight-default"
          />
        </div>

        <div className=" bg-white mt-[0.25rem] rounded-[0.375rem] overflow-y-auto max-h-[70vh]">
          <div
            className={`${
              value.length > 1 ? "hidden" : ""
            } px-[1.125rem] pb-[1.125rem] pt-[.8rem] cursor-pointer `}
          >
            {/* nothing */}
            {!value.length && (
              <span className="font-vrg text-[0.875rem] leading-lineHeight-caption text-carbon-main">
                عبارت مورد نظر خود را وارد کنید
              </span>
            )}
            {/* length input one */}

            {value.length === 1 && (
              <div className="flex justify-between">
                <span className="font-vrg text-[0.875rem] leading-lineHeight-caption text-carbon-main">
                  جستجوی {value}
                </span>

                <Image src={left} />
              </div>
            )}
          </div>

          {/* <SearchCategory category={'پیتزا'}/> */}

          {value.length > 1 &&
            cats
              .filter((item) => {
                if (item.title.includes(value)) {
                  console.log(item.title);
                  return item.title;
                }
              })
              .map((item) => <SearchCategory category={item.title} />)}

          {value.length > 1 &&
            restaurants
              .filter((item) => {
                if (item.name.includes(value)) {
                  console.log(item.name);
                  return item;
                }
              })
              .map((item, index, arrayRef) => (
                <SearchMarket
                  resturantName={item.name}
                  count={arrayRef.length}
                />
              ))}
          {/* <SearchMarket resturantName={'پیتزا شیلا'}/> */}

          {/*                         
                    {value.length>1&&foods.filter((item)=>{
                        if(item.name.includes(value)){

                            // console.log(item);
                            return item
                            
                        }
                    }).map((item,index,arrayRef)=>{
                        console.log(arrayRef);
                    return<SearchProduct foodName={item.name} img={item.image} price={item.price} count={arrayRef.length} />})}  */}

          {value.length > 1 && (
            <SearchProduct
              foods={foods}
              value={value}
              restaurants={restaurants}
            />
          )}
        </div>
      </div>
    </form>
  );
}
