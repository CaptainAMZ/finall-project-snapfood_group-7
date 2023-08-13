import React, { useEffect } from "react";
import Image from "next/image";
import AddFoodBtn from "../elements/AddFoodBtn";
import defImg from "../../public/images/deflogo-1.jpg";
import FComments from '../elements/FComments';

export default function FoodModal({
  closeModal,
  image = "/images/deflogo-1.jpg",
  name,
  rate,
  price,
  comment,
  id,
  basket,
  desc,
 
}) {
  return (
    <div className="w-[45rem]  bg-surface-light h-[40rem] rounded-xl overflow-hidden ">
      <div className="overflow-y-auto h-[40rem]">
        <div className="block p-spacing-3 sticky top-0 right-[-2]  bg-surface-light ">
          <button
            className="cursor-pointer block w-full text-right px-spacing-1"
            onClick={closeModal}
          >
            <Image
              src="/images/icons8-close-24.png"
              width={20}
              height={20}
              alt=""
              className="object-cover  "
            />
          </button>
        </div>
        <div className="flex  items-start justify-center pb-spacing-2 ">
          <div className="flex ">
            <div className=" min-w-[300px] text-center pr-3">
              <Image
                src={image || defImg}
                width={300}
                height={300}
                alt=""
                className="object-cover rounded-xl borders-lg border-borders-xs border-surface-light  "
              />
            </div>
          </div>
          <div className="flex flex-col px-4 w-[100%]">
            <div className="flex items-center  justify-between mt-2 ">
              <h1 className="font-vb text-scales-default "> {name} </h1>
              <div className="flex items-center border-borders-xs  rounded-md px-[10px]">
                <div className="min-w-[15px]">
                  <Image
                    className="object-cover ml-spacing-1 "
                    src="/images/icons8-star-40.png"
                    width={15}
                    height={15}
                    alt=""
                  />
                </div>
                <p className="text-scales-body font-vsb pt-[4px]">{rate}</p>
              </div>
            </div>
            <div className="text-right mt-4 text-scales-body font-vmd text-gray-500">
              <p>{desc}</p>
            </div>
            <div>
              <div className="w-[100%] hover:bg-surface-main  transition-colors flex items-center justify-between  py-spacing-1 mb-spacing-2 mt-7">
                <div className="flex items-center ">
                  <div>
                    <p className="text-scales-body font-vsb">{price} تومان</p>
                  </div>
                </div>
                <div>
                  <AddFoodBtn
                    id={id}
                    price={price}
                    name={name}
                    basket={basket}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-right px-3 text-scales-large text-carbon-light font-vsb my-8">
          <p>نظرات کاربران</p>
        </div>
        
        {comment
          .filter((item) => item.fId == id)
          .map(({id,name,date,rate,desc,stuff}) => (
              <FComments 
              key={id}
              name={name}
              date={date}
              rate={rate}
              desc={desc}
              stuff={stuff}

               />
          ))}

      </div>
            </div>


  );
}
