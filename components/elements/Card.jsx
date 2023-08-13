import React from "react";
import Link from "next/link";

const Card = ({ item, inSlide }) => {
  return (
    <Link
      href={`/service/restaurants/${item.id}`}
      className={`cursor-pointer  flex mb-6 flex-col shadow-md ${
        inSlide && "w-full m-auto"
      } items-center  pb-6 bg-white  h-[370px] rounded-xl  hover:shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] ${
        !inSlide && "sm:w-[100%]  md:w-[47%]  lg:w-[30%] md:mr-4 lg:mr-7"
      }  `}
      key={item.id}
    >
      <div className="w-full relative  min-h-[40%]  ">
        <img
          src={item.image}
          alt="Restaurant Image"
          className="w-full h-full object-cover rounded-t-xl "
        />
        <div className="w-[88px] h-[88px] absolute right-0 left-0 m-auto bg-white flex items-center justify-center rounded-lg   -bottom-5 shadow-shadows-high">
          <img
            src={item.logo}
            alt="Logo"
            className="w-20 h-20 object-cover rounded-xl"
          />
        </div>
        <div className="absolute bottom-0 right-0 bg-white py-1 px-3 rounded-tl-2xl">
          <span className="text-sm font-vb text-pink-600">5%</span>
        </div>
      </div>
      <div
        style={{ direction: "rtl" }}
        className=" w-full flex items-center justify-between flex-col h-[60%] mt-7 "
      >
        <div className=" w-full text-center mb-12 ">
          <h2 className="overflow-hidden text-lg font-vb mb-2 ">{item.name}</h2>
          <div className="w-full  flex justify-center mb-2 ">
            <img
              src="/images/icons8-star-20.png"
              alt="star"
              className=" object-cover w-[13px] h-[13px] ml-1 "
            />
            <span className="text-xs ml-2 font-vb ">{item.star}</span>
            <span className="text-xs text-gray-400 font-vrg">
              ({item.rate}امتیاز)
            </span>
          </div>
          <h3 className="text-xs text-gray-400 font-vrg">{item.otherCats}</h3>
        </div>
        <footer className="flex justify-center ">
          <div className="w-48 h-10 flex items-center justify-center rounded-[72px] shadow-shadows-medium">
            <img src={item.delivery.icon} alt="Dlivery" className="ml-2" />
            <p className="text-xs ml-2 font-vrg">{item.delivery.type}</p>
            <p className="text-xs font-vb">
              {" "}
              {item.delivery.price}
              <span className="mr-[2px]">تومان</span>
            </p>
          </div>
        </footer>
      </div>
    </Link>
  );
};

export default Card;
