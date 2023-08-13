"use client";

import React, { useEffect, useState } from "react";

function Filter({ productCards, setProductCards }) {
  const [isOpen, setIsopen] = useState(false);
  const [filteredoption, setFilteredOption] = useState("");

  useEffect(()=>{
    window.addEventListener("click",(e)=>!(e.target.classList.contains("isOpen"))  && setIsopen(false))
    return ()=> window.removeEventListener("click",(e)=>!(e.target.classList.contains("isOpen"))  && setIsopen(false))
},[])



  // Searching option
  const Handlechange = (e) => {
    setFilteredOption(e.target.value);
    
    
  };
  

  

  const itemsList = ["بالاترین امتیاز", "ارزان ترین", "گران ترین"];
  //Sorting restaurants by price
  function sortProductsByprice(e) {
    e.stopPropagation();

    if (e.target.value === "ارزان ترین") {
      setProductCards([]);
      console.log(productCards);
      setProductCards([
        ...productCards.sort(
          (a, b) =>
            a.delivery.price -
            b.delivery.price
        ),
      ]);

      console.log(productCards);
    }
    if (e.target.value === "گران ترین") {
      setProductCards([]);
      setProductCards([
        ...productCards.sort(
          (a, b) =>
            b.delivery.price -
            a.delivery.price
        ),
      ]);
      console.log("ali");
    }
    if (e.target.value === "بالاترین امتیاز") {
      setProductCards([]);
      setProductCards([...productCards.sort((a, b) => b.rate - a.rate)]);
    }
  }

  return (
    <div className="w-full h-full flex  justify-end   sm:pl-4 md:pl-0 lg:pl-6 ">
      <div
        className="w-56 h-12 flex flex-col  text-base items-center justify-center  "
        onClick={()=>setIsopen(!isOpen)}
      >
        <div className=" shadow-sm cursor-pointer w-full h-full flex items-center rounded-md rounded-tl-md rounded-bl-md border border-solid border-carbon-alphaLight   hover:border-[rgb(38,132,255)] hover: shadow-shadow-[0px_0px_0px_1px_rgb(38,132,255)] hover:duration-300 ">
          <input
            className="w-[85%]  h-full flex items-center justify-center text-[rgb(21,20,20)] text-md  resize-none overflow-hidden text-start mx-0.5 my-0 px-2 py-0 border-[none] outline-none  isOpen    "
            placeholder="به ترتیب پیش فرض"
            wrap="soft"
            onChange={Handlechange}
            value={filteredoption}
          ></input>
          <div className="rotate-180 w-px h-9 bg-[rgb(204,204,204)] mx-0 my-2"></div>
          <div className="w-[15%] h-full ">
            <div className="w-full h-full self-center px-1 py-0 flex justify-center items-center " >
              <img src="/images/arrow.svg" alt="arrow" />
            </div>
          </div>
        </div>
        <div className="w-full rounded mt-1.5 z-20 relative ">
          {isOpen &&  (
            <div className="  w-full rounded px-0 py-1 border-[0.8px] border-solid border-[rgba(24,25,28,0.06)] bg-white z-50 absolute ">
               {
                itemsList.filter((item)=>{
                  if(item.includes(filteredoption)) return item
                  
                }).map((item ,index)=>(
                  <option
                  className="w-full h-[40px] flex items-center pr-2  hover:bg-[rgba(185,232,245,0.57)]"
                  value={item}
                  onClick={(e) => sortProductsByprice(e)}
                  key={item.id}
                >
                  {item}
                </option>
                ))
               }
              
              {/* <option
                className="w-full h-[40px] flex items-center pr-2  hover:bg-[rgba(185,232,245,0.57)]"
                value="گران ترین"
                onClick={(e) => sortProductsByprice(e)}
              >
                گران ترین
              </option>
              <option
                className="w-full h-[40px] flex items-center pr-2  hover:bg-[rgba(185,232,245,0.57)]"
                value="ارزان ترین"
                onClick={(e) => sortProductsByprice(e)}
              >
                ارزان ترین
              </option> */}
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
}

export default Filter;
