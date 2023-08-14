"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import SearchCategory from "./SearchCategory";
import SearchMarket from "./SearchMarket";
import SearchProduct from "./SearchProduct";
import { useRouter } from "next/navigation";


export default function Search({
  foods,
  cats,
  restaurants,
  onClose,
  restId,
}) {


  const router = useRouter();
  const location = window.location;
  const path = location.pathname;

  const [value, setValue] = useState("");
  
  const condition = path.includes(`/service/restaurants/${restId}`);

  const INPUT = useRef();
  useEffect(() => {
    INPUT.current.focus();
  }, []);


  

  const submitHandler = (e) => {
    e.preventDefault();
    switch (path) {
      case "/" || "":
        router.push(`/search?search=${value}`);
        break;
      case "/service/restaurants":
        router.push(`/search?search=${value}`);
        break;
      case `/service/restaurants/${restId}`:
        router.push(`/service/restaurants/${restId}?search=${value}`);
        break;

      default :
        router.push(`/search?search=${value}`)  
    }
    onClose();

  };

  
  const handleSearchChange = useCallback((e)=>{
    const content = e.target.value;
    setValue(content);
  },[])

  
  const emptyInputValue = useCallback(()=>{
    setValue("");
  })

  


  

  return (
    <form
      onSubmit={submitHandler}
      className="fixed top-0 flex justify-center w-[31vw] min-w-[18.75rem] m-auto py-spacing-16 "
    >
      <div className="w-[95%] flex flex-col">
        <div className="relative w-full flex items-center justify-center ">
          <Image
            onClick={value.length ? emptyInputValue : undefined}
            className="absolute top-0 right-4  cursor-pointer pt-spacing-2"
            src={`${
              !value.length
                ? "/images/images-home/search-dark.svg"
                : "/images/images-home/cross-circle.svg"
            }`}
            width={17}
            height={17}
            alt="search"
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
              !condition && value.length > 1 ? "hidden" : ""
            } px-[1.125rem] pb-[1.125rem] pt-[.8rem] cursor-pointer `}
          >
            {/* nothing */}
            {!value.length && (
              <span className="font-vrg text-[0.875rem] leading-lineHeight-caption text-carbon-main">
                عبارت مورد نظر خود را وارد کنید
              </span>
            )}
            {/* length input one */}

            {!condition && value.length == 1 &&(
              <div className="flex justify-between">
                <span className="font-vrg text-[0.875rem] leading-lineHeight-caption text-carbon-main">
                  جستجوی {value}
                </span>

                <Image src={"/images/images-home/left.svg"} width={6} height={6} alt="left" />
              </div>
            )}
            {condition && !!value.length && (
              <div className="flex justify-between">
                <span className="font-vrg text-[0.875rem] leading-lineHeight-caption text-carbon-main">
                  جستجوی {value}
                </span>

                <Image src={"/images/images-home/left.svg"} width={6} height={6} alt="left"/> 
              </div>
            )}
          </div>


          {!condition &&
            value.length > 1 &&
            cats
              .filter((item) => {
                if (item.title.includes(value)) {
               
                  return item.title;
                }
              })
              .map((item) => <SearchCategory key={item.id} category={item.title} />)}

          {!condition &&
            value.length > 1 &&
            restaurants
              .filter((item) => {
                if (item.name.includes(value)) {
                  
                  return item;
                }
              })
              .map((item, index,arrayRef) => (
                <SearchMarket 
                key={ item.id}
                  resturantName={item.name}
                  count={arrayRef.length}
                />
              ))}
       

          {!condition && value.length > 1 && (
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
